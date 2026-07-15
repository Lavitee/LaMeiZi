from __future__ import annotations

import argparse
import json
from itertools import combinations
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps


IMAGE_SUFFIXES = {".jpg", ".jpeg", ".png", ".webp", ".heic"}


def difference_hash(image: Image.Image) -> int:
    pixels = list(image.convert("L").resize((9, 8)).getdata())
    result = 0
    for row in range(8):
        for column in range(8):
            left = pixels[row * 9 + column]
            right = pixels[row * 9 + column + 1]
            result = (result << 1) | int(left > right)
    return result


def hamming_distance(first: int, second: int) -> int:
    return (first ^ second).bit_count()


def load_records(source: Path) -> list[dict[str, object]]:
    records: list[dict[str, object]] = []
    for path in sorted(source.iterdir()):
        if path.suffix.lower() not in IMAGE_SUFFIXES:
            continue
        with Image.open(path) as raw:
            image = ImageOps.exif_transpose(raw).convert("RGB")
            records.append(
                {
                    "name": path.name,
                    "path": path,
                    "width": image.width,
                    "height": image.height,
                    "hash": difference_hash(image),
                }
            )
    return records


def make_contact_sheet(records: list[dict[str, object]], output: Path) -> None:
    columns = 4
    cell_width = 360
    image_height = 238
    label_height = 54
    rows = (len(records) + columns - 1) // columns
    sheet = Image.new("RGB", (columns * cell_width, rows * (image_height + label_height)), "#17130f")
    draw = ImageDraw.Draw(sheet)
    font = ImageFont.load_default(size=16)

    for index, record in enumerate(records):
        row, column = divmod(index, columns)
        x = column * cell_width
        y = row * (image_height + label_height)
        with Image.open(record["path"]) as raw:
            image = ImageOps.exif_transpose(raw).convert("RGB")
            fitted = ImageOps.fit(image, (cell_width, image_height), method=Image.Resampling.LANCZOS)
        sheet.paste(fitted, (x, y))
        label = f"{index + 1:02d}  {record['name']}\n{record['width']} x {record['height']}"
        draw.multiline_text((x + 10, y + image_height + 7), label, fill="#fff8e8", font=font, spacing=3)

    output.parent.mkdir(parents=True, exist_ok=True)
    sheet.save(output, quality=90, optimize=True)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("contact_sheet", type=Path)
    parser.add_argument("report", type=Path)
    args = parser.parse_args()

    records = load_records(args.source)
    make_contact_sheet(records, args.contact_sheet)

    candidates = []
    for first, second in combinations(records, 2):
        distance = hamming_distance(first["hash"], second["hash"])
        if distance <= 10:
            candidates.append(
                {
                    "first": first["name"],
                    "second": second["name"],
                    "distance": distance,
                }
            )

    report = {
        "count": len(records),
        "images": [
            {
                "name": record["name"],
                "width": record["width"],
                "height": record["height"],
            }
            for record in records
        ],
        "possible_near_duplicates": sorted(candidates, key=lambda item: item["distance"]),
    }
    args.report.write_text(json.dumps(report, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
