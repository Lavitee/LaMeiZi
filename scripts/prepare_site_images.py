from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageOps


SOURCE = Path("photos/new-uploads")
OUTPUT = Path("public/images/restaurant")

PHOTO_MAP = {
    "table-spread.webp": "Image_20260714143832_118_568.jpg",
    "meat-selection.webp": "Image_20260714143856_119_568.jpg",
    "signature-table.webp": "Image_20260714143858_120_568.jpg",
    "seafood-hotpot.webp": "Image_20260714143900_121_568.jpg",
    "seafood-bar.webp": "Image_20260714143902_122_568.jpg",
    "sushi-rolls.webp": "Image_20260714143903_123_568.jpg",
    "sauce-bar.webp": "Image_20260714143905_124_568.jpg",
    "fruit-bar.webp": "Image_20260714143906_125_568.jpg",
    "dining-room-dark.webp": "Image_20260714143908_126_568.jpg",
    "dining-room.webp": "Image_20260714143909_127_568.jpg",
    "buffet-meats-01.webp": "Image_20260714144931_133_568.jpg",
    "buffet-meats-02.webp": "Image_20260714144934_134_568.jpg",
    "seafood-selection.webp": "Image_20260714171639_140_568.jpg",
    "crawfish-seafood.webp": "Image_20260714171653_142_568.jpg",
}


def resize_for_web(image: Image.Image, max_edge: int = 2200) -> Image.Image:
    width, height = image.size
    scale = min(1.0, max_edge / max(width, height))
    if scale == 1.0:
        return image
    return image.resize(
        (round(width * scale), round(height * scale)),
        Image.Resampling.LANCZOS,
    )


def prepare_photos() -> None:
    for output_name, source_name in PHOTO_MAP.items():
        with Image.open(SOURCE / source_name) as raw:
            image = ImageOps.exif_transpose(raw).convert("RGB")
            image = resize_for_web(image)
            image.save(
                OUTPUT / output_name,
                format="WEBP",
                quality=86,
                method=6,
            )


def prepare_logos() -> None:
    source = SOURCE / "Image_20260714180240_144_568.png"
    with Image.open(source) as raw:
        logo = raw.convert("RGBA")
        bounds = logo.getbbox()
        if bounds:
            logo = logo.crop(bounds)
        padded = ImageOps.expand(logo, border=22, fill=(0, 0, 0, 0))
        padded.save(OUTPUT / "logo-lameizi.png", optimize=True)

        light = padded.copy()
        pixels = light.load()
        for y in range(light.height):
            for x in range(light.width):
                red, green, blue, alpha = pixels[x, y]
                if alpha and red < 85 and green < 85 and blue < 85:
                    pixels[x, y] = (250, 247, 239, alpha)
        light.save(OUTPUT / "logo-lameizi-light.png", optimize=True)


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    prepare_photos()
    prepare_logos()


if __name__ == "__main__":
    main()
