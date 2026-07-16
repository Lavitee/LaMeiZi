export const yelpUrl =
  "https://www.yelp.com/biz/lameizi-hotpot-and-bbq-tampa";

export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const isStaticExport = process.env.GITHUB_PAGES === "true";

export function siteAsset(path: string): string {
  if (isStaticExport) return path.replace(/^\/+/, "");
  return `${siteBasePath}${path}`;
}

export function sitePage(path: string): string {
  if (isStaticExport) {
    if (path === "/") return "./";
    return `${path.replace(/^\/+/, "")}.html`;
  }
  if (!siteBasePath) return path;
  if (path === "/") return `${siteBasePath}/`;
  return `${siteBasePath}${path}.html`;
}

export const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=2501%20E%20Fowler%20Ave%2C%20Tampa%20FL%2033612";

export const phoneDisplay = "813-443-2287";
export const phoneUrl = "tel:+18134432287";

export const newUploadPhotos = {
  diningRoom: "/images/new-uploads/Image_20260715150537_445_568.jpg",
  sojuShelf: "/images/new-uploads/Image_20260715150540_447_568.jpg",
  drinksDesserts: "/images/new-uploads/Image_20260715150546_450_568.jpg",
  bbqPlatter: "/images/new-uploads/Image_20260715150554_454_568.jpg",
  meatPlatter: "/images/new-uploads/Image_20260715150558_456_568.jpg",
  seafoodClose: "/images/new-uploads/Image_20260715150601_458_568.jpg",
  hotpotPlatter: "/images/new-uploads/Image_20260716170000_food-table-spread.jpg",
  seafoodPlatter: "/images/new-uploads/Image_20260715150607_462_568.jpg",
  exterior: "/images/new-uploads/Image_20260715150612_465_568.jpg",
  exteriorAlt: "/images/new-uploads/Image_20260715150614_466_568.jpg",
  logoWall: "/images/new-uploads/Image_20260715150615_467_568.jpg",
  lobby: "/images/new-uploads/Image_20260715150620_469_568.jpg",
  privateRoom: "/images/new-uploads/Image_20260715150621_470_568.jpg",
  drinksShelf: "/images/new-uploads/Image_20260715150626_472_568.jpg",
  sushiRolls: "/images/new-uploads/Image_20260715162343_480_568.jpg",
  sushiRollsAlt: "/images/new-uploads/Image_20260715162358_481_568.jpg",
  crawfish: "/images/new-uploads/Image_20260715162421_483_568.jpg",
  crawfishAlt: "/images/new-uploads/Image_20260715162423_484_568.jpg",
  seafoodRoll: "/images/new-uploads/Image_20260715162426_485_568.jpg",
  salmonSashimi: "/images/new-uploads/Image_20260715162428_486_568.jpg",
  spicyRedOilBroth: "/images/new-uploads/Image_20260715162435_487_568.jpg",
  misoBroth: "/images/new-uploads/Image_20260715162605_492_568.jpg",
  mushroomBroth: "/images/new-uploads/Image_20260715162540_489_568.jpg",
  tomatoBroth: "/images/new-uploads/Image_20260715162557_490_568.jpg",
  curryBroth: "/images/new-uploads/Image_20260715162604_491_568.jpg",
  herbalBroth: "/images/new-uploads/Image_20260715162607_493_568.jpg",
  porkBoneBroth: "/images/new-uploads/Image_20260715162616_499_568.jpg",
  soupLineup: "/images/new-uploads/Image_20260715162608_494_568.jpg",
  tomYumBroth: "/images/new-uploads/Image_20260715162535_488_568.jpg",
  vipCard: "/images/new-uploads/Image_20260715162613_497_568.jpg",
};

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
    image: newUploadPhotos.tomatoBroth,
  },
  {
    name: "Mushroom Soup",
    description:
      "A savory, aromatic base with soy sauce, vegetable protein, and fresh shiitake mushrooms.",
    image: newUploadPhotos.mushroomBroth,
  },
  {
    name: "Miso Soup",
    description:
      "A gluten-free favorite with Shinshu Icho soybean paste, soft tofu, and wakame seaweed.",
    image: newUploadPhotos.misoBroth,
  },
  {
    name: "Curry Soup",
    description:
      "Thai red curry, lemongrass, kaffir lime, turmeric, cumin, and fenugreek make a fragrant golden broth.",
    image: newUploadPhotos.curryBroth,
  },
  {
    name: "Healthy Herbal Soup",
    description:
      "A restorative broth brewed with angelica root, codonopsis pilosula, and sweet jujube beans.",
    image: newUploadPhotos.herbalBroth,
  },
  {
    name: "Pork Bone Soup",
    description:
      "Pork bones and chicken stock are slow-simmered into a rich broth and finished with sweet goji berries.",
    image: newUploadPhotos.porkBoneBroth,
  },
  {
    name: "Spicy Red-Oil Soup",
    description:
      "Broad bean paste, Sichuan peppercorns, star anise, fennel, and Chinese cinnamon create deep, numbing heat.",
    note: "Mild / Medium / Hot / Extra Hot",
    image: newUploadPhotos.spicyRedOilBroth,
  },
  {
    name: "Tom Yum Soup",
    description:
      "Chili and sour tamarind meet lemongrass, galangal, and kaffir lime leaves in a bright Thai broth.",
    note: "Mild / Medium / Hot / Extra Hot",
    image: newUploadPhotos.tomYumBroth,
  },
];

export const galleryPhotos = [
  {
    src: newUploadPhotos.diningRoom,
    alt: "LaMeiZi dining room with karaoke screens and private booths",
    caption: "Karaoke",
    className: "gallery-wide",
  },
  {
    src: newUploadPhotos.sojuShelf,
    alt: "Fruit-flavored Korean soju bottles in the LaMeiZi dining room",
    caption: "Fruit-flavored soju",
    className: "gallery-tall",
  },
  {
    src: newUploadPhotos.drinksDesserts,
    alt: "Colorful LaMeiZi drinks, ice cream, and layered desserts",
    caption: "Drinks & sweets",
  },
  {
    src: newUploadPhotos.bbqPlatter,
    alt: "Marinated meats and seafood prepared for Korean BBQ",
    caption: "Marinated meats & seafood",
  },
  {
    src: newUploadPhotos.meatPlatter,
    alt: "Korean BBQ meat rolls, seafood, tofu, and mushrooms",
    caption: "Ready for the grill",
  },
  {
    src: newUploadPhotos.hotpotPlatter,
    alt: "Hotpot ingredients with salmon, vegetables, mushrooms, and fish balls",
    caption: "Hotpot ingredients",
    className: "gallery-wide",
  },
  {
    src: newUploadPhotos.seafoodClose,
    alt: "Salmon, fish balls, vegetables, and mushrooms for hotpot",
    caption: "Seafood selection",
  },
  {
    src: newUploadPhotos.exterior,
    alt: "LaMeiZi Hotpot and BBQ restaurant exterior in Tampa",
    caption: "Find us in Tampa",
  },
  {
    src: newUploadPhotos.logoWall,
    alt: "Illuminated LaMeiZi logo inside the restaurant",
    caption: "The LaMeiZi mark",
  },
  {
    src: newUploadPhotos.lobby,
    alt: "LaMeiZi lobby with water feature, panda statue, and logo",
    caption: "Welcome in",
  },
  {
    src: newUploadPhotos.privateRoom,
    alt: "LaMeiZi dining room with a round table and Chinese lattice screens",
    caption: "Around the table",
  },
  {
    src: newUploadPhotos.drinksShelf,
    alt: "Colorful bubble tea drinks displayed at LaMeiZi",
    caption: "Made for the table",
  },
];
