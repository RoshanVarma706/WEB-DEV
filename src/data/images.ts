/**
 * Food photography served from /public/images.
 *
 * Two groups:
 *  - "Our own" photos: the restaurant's own dish photographs (paneer lababdar,
 *    fix lunch plate, veg manchow soup, paneer pakoda).
 *  - Licensed stock photos (CC0 / CC BY / CC BY-SA), resized for the web.
 *
 * Every shipped file is listed in IMAGE_CREDITS for attribution.
 */

export const HERO_IMAGE = "/images/thali.jpg";
export const FIX_LUNCH_IMAGE = "/images/fix-lunch-plate.jpg";

export const CUISINE_IMAGES: Record<string, string> = {
  "North Indian & Punjabi": "/images/mixed-veg-curry.jpg",
  "Tandoor & Breads": "/images/butter-naan.jpg",
  "Starters & Indo-Chinese": "/images/veg-manchurian.jpg",
  "Rice & Biryani": "/images/veg-biryani.jpg",
  "Paneer & Kofta": "/images/paneer-tikka.jpg",
  "Lassi & Sweets": "/images/gulab-jamun.jpg",
};

export const DISH_IMAGES: Record<string, string> = {
  "Paneer Lababdar": "/images/paneer-lababdar.jpg",
  "Dal Makhani": "/images/dal-makhani.jpg",
  "Butter Naan": "/images/butter-naan.jpg",
  "Special Sher-E-Punjab": "/images/mixed-veg-curry.jpg",
  "Vegetable Biryani": "/images/veg-biryani.jpg",
  "Special Lassi": "/images/sweet-lassi.jpg",
};

export type GalleryPhoto = {
  src: string;
  title: string;
  caption: string;
};

/** Real photographs of this restaurant's dishes. */
export const GALLERY: GalleryPhoto[] = [
  {
    src: "/images/fix-lunch-plate.jpg",
    title: "Fix lunch plate",
    caption: "The full lunch plate — naan, dal, chana, sabji, rice and papad.",
  },
  {
    src: "/images/paneer-lababdar.jpg",
    title: "Paneer lababdar",
    caption: "Our signature paneer gravy, made fresh to order.",
  },
  {
    src: "/images/veg-manchow-soup.jpg",
    title: "Veg manchow soup",
    caption: "A crisp, warming start to the meal.",
  },
  {
    src: "/images/paneer-pakoda.jpg",
    title: "Paneer pakoda",
    caption: "Golden paneer pakoda, fried on order.",
  },
];

export type ImageCredit = {
  file: string;
  title: string;
  author: string;
  license: string;
  source: string;
};

export const IMAGE_CREDITS: ImageCredit[] = [
  {
    file: "/images/paneer-lababdar.jpg",
    title: "Paneer lababdar",
    author: "Hotel Sher E Punjab",
    license: "Own photo",
    source: "https://maps.app.goo.gl/qyvX4kBT9qa8uYYbA",
  },
  {
    file: "/images/fix-lunch-plate.jpg",
    title: "Fix lunch plate",
    author: "Hotel Sher E Punjab",
    license: "Own photo",
    source: "https://maps.app.goo.gl/qyvX4kBT9qa8uYYbA",
  },
  {
    file: "/images/veg-manchow-soup.jpg",
    title: "Veg manchow soup",
    author: "Hotel Sher E Punjab",
    license: "Own photo",
    source: "https://maps.app.goo.gl/qyvX4kBT9qa8uYYbA",
  },
  {
    file: "/images/paneer-pakoda.jpg",
    title: "Paneer pakoda",
    author: "Hotel Sher E Punjab",
    license: "Own photo",
    source: "https://maps.app.goo.gl/qyvX4kBT9qa8uYYbA",
  },
  {
    file: "/images/dal-makhani.jpg",
    title: "Dal Makhani",
    author: "Miansari66",
    license: "CC0 1.0",
    source: "https://commons.wikimedia.org/wiki/File:Dal_Makhani_(1).JPG",
  },
  {
    file: "/images/butter-naan.jpg",
    title: "Naan",
    author: "Karen and Brad Emerson",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Naan_(3612152726).jpg",
  },
  {
    file: "/images/mixed-veg-curry.jpg",
    title: "Mixed Vegetable Curry",
    author: "Miansari66",
    license: "CC0 1.0",
    source: "https://commons.wikimedia.org/wiki/File:Mixed_Vegetable_Curry.JPG",
  },
  {
    file: "/images/veg-biryani.jpg",
    title: "Vegetable biryani",
    author: "Pranavanish",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Vegetable-biryani.jpg",
  },
  {
    file: "/images/sweet-lassi.jpg",
    title: "Lassi (Sweet)",
    author: "Nivasdurai",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Lassi_(Sweet).JPG",
  },
  {
    file: "/images/paneer-tikka.jpg",
    title: "Paneer Tikka",
    author: "Jamie",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Paneer_Tikka_(2172840954).jpg",
  },
  {
    file: "/images/veg-manchurian.jpg",
    title: "Veg manchurian",
    author: "Kvr.lohith",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Veg_manchurian_recipe.jpg",
  },
  {
    file: "/images/thali.jpg",
    title: "Traditional North Indian Thali",
    author: "Shashank shk",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Traditional_North_Indian_Thali.jpg",
  },
  {
    file: "/images/gulab-jamun.jpg",
    title: "Gulab Jamun Mithai",
    author: "Premnath Thirumalaisamy",
    license: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:1_Gulab_Jamun_Mithai_Sweets_of_India.jpg",
  },
];

/** Every image path the site ships (used by tests to guarantee coverage). */
export function allImagePaths(): string[] {
  return Array.from(
    new Set<string>([
      HERO_IMAGE,
      FIX_LUNCH_IMAGE,
      ...Object.values(CUISINE_IMAGES),
      ...Object.values(DISH_IMAGES),
      ...GALLERY.map((g) => g.src),
    ]),
  );
}
