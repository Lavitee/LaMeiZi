export const yelpUrl =
  "https://www.yelp.com/biz/lameizi-hotpot-and-bbq-tampa";

export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function siteAsset(path: string): string {
  return `${siteBasePath}${path}`;
}

export function sitePage(path: string): string {
  if (!siteBasePath) return path;
  if (path === "/") return `${siteBasePath}/`;
  return `${siteBasePath}${path}.html`;
}

export const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=2501%20E%20Fowler%20Ave%2C%20Tampa%20FL%2033612";

export const phoneDisplay = "813-443-2287";
export const phoneUrl = "tel:+18134432287";

export const vipTiers = [
  { amount: "$100", value: "$110", bonus: "$10 extra value" },
  { amount: "$200", value: "$225", bonus: "$25 extra value" },
  { amount: "$500", value: "$575", bonus: "$75 extra value" },
  { amount: "$1,000", value: "$1,200", bonus: "$200 extra value" },
];

export const soupBases = [
  {
    name: "Tomato Soup",
    description:
      "Sweet and tangy tomato paste simmers with soybean oil and fresh tomato slices for a vibrant, zesty broth.",
  },
  {
    name: "Mushroom Soup",
    description:
      "A savory, aromatic base with soy sauce, vegetable protein, and fresh shiitake mushrooms.",
  },
  {
    name: "Miso Soup",
    description:
      "A gluten-free favorite with Shinshu Icho soybean paste, soft tofu, and wakame seaweed.",
  },
  {
    name: "Curry Soup",
    description:
      "Thai red curry, lemongrass, kaffir lime, turmeric, cumin, and fenugreek make a fragrant golden broth.",
  },
  {
    name: "Healthy Herbal Soup",
    description:
      "A restorative broth brewed with angelica root, codonopsis pilosula, and sweet jujube beans.",
  },
  {
    name: "Pork Bone Soup",
    description:
      "Pork bones and chicken stock are slow-simmered into a rich broth and finished with sweet goji berries.",
  },
  {
    name: "Spicy Soup",
    description:
      "Broad bean paste, Sichuan peppercorns, star anise, fennel, and Chinese cinnamon create deep, numbing heat.",
    note: "Mild / Medium / Hot / Extra Hot",
  },
  {
    name: "Tom Yum Soup",
    description:
      "Chili and sour tamarind meet lemongrass, galangal, and kaffir lime leaves in a bright Thai broth.",
    note: "Mild / Medium / Hot / Extra Hot",
  },
];

export const galleryPhotos = [
  {
    src: "/images/restaurant/table-spread.webp",
    alt: "LaMeiZi hotpot, meats, seafood, and drinks",
    caption: "The LaMeiZi table",
    className: "gallery-wide",
  },
  {
    src: "/images/restaurant/signature-table.webp",
    alt: "LaMeiZi hotpot spread with meats and seafood",
    caption: "Hotpot & BBQ together",
  },
  {
    src: "/images/restaurant/meat-selection.webp",
    alt: "Korean BBQ meats and seafood on a table",
    caption: "Marinated meats",
  },
  {
    src: "/images/restaurant/seafood-selection.webp",
    alt: "Seafood, crab, shrimp, oysters, and hotpot at LaMeiZi",
    caption: "Seafood selection",
    className: "gallery-tall",
  },
  {
    src: "/images/restaurant/buffet-meats-02.webp",
    alt: "Buffet trays of marinated meats at LaMeiZi",
    caption: "From the buffet",
  },
  {
    src: "/images/restaurant/seafood-bar.webp",
    alt: "Crab legs and shellfish on ice at LaMeiZi",
    caption: "Seafood bar",
  },
  {
    src: "/images/restaurant/sauce-bar.webp",
    alt: "Sauce and garnish bar at LaMeiZi",
    caption: "Make your sauce",
  },
  {
    src: "/images/restaurant/fruit-bar.webp",
    alt: "Fresh fruit at LaMeiZi",
    caption: "Fresh fruit",
  },
  {
    src: "/images/restaurant/sushi-rolls.webp",
    alt: "Sushi rolls at LaMeiZi",
    caption: "Sushi & starters",
  },
  {
    src: "/images/restaurant/dining-room.webp",
    alt: "LaMeiZi dining room with red lanterns",
    caption: "The dining room",
    className: "gallery-wide",
  },
];
