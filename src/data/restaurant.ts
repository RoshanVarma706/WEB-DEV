export type Dish = {
  name: string;
  price: number;
  tag?: "bestseller" | "chef" | "sweet" | "spicy" | "new";
  veg?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  unit: string;
  blurb: string;
  icon: string;
  dishes: Dish[];
};

export const BUSINESS = {
  name: "Hotel Sher E Punjab",
  tagline: "Pure Veg Punjabi Kitchen",
  since: "Maninagar, Ahmedabad",
  phoneDisplay: "+91 93275 24210",
  phoneTel: "+919327524210",
  whatsapp: "919327524210",
  address: "Saini Complex, Khokhra Circle, Maninagar East, Ahmedabad 380008",
  mapsUrl: "https://maps.app.goo.gl/nihwHkoxSR1qMq5Y7",
  hours: [
    { label: "Lunch", value: "11:00 AM – 3:00 PM" },
    { label: "Dinner", value: "7:00 PM – 10:30 PM" },
  ],
  // 0 = Sunday ... 6 = Saturday. Lunch and dinner service windows in minutes.
  service: [
    { open: 11 * 60, close: 15 * 60 },
    { open: 19 * 60, close: 22 * 60 + 30 },
  ],
};

export const FIX_LUNCH = {
  headline: "₹170",
  window: "Every day, 11 AM to 3 PM",
  options: [
    {
      name: "Special Fix Lunch",
      price: "₹200",
      parcel: "₹190 parcel",
      detail:
        "Chana masala or mix veg, 1 paneer sabji, dal fry, jeera rice, papad, 3 tawa roti or 3 butter roti or 2 tandoori paratha, cold drink or butter milk, and 1 sweet.",
      featured: true,
    },
    {
      name: "Fix Lunch",
      price: "₹170",
      detail: "Dine in. Minimum 600 gm of food on the plate.",
    },
    {
      name: "Fix Lunch Parcel",
      price: "₹160",
      detail:
        "Chana masala or mix veg, 1 paneer sabji, dal fry, plain rice, papad, and 3 tawa roti or 3 butter roti or 2 tandoori paratha.",
    },
  ],
  notes: [
    "Fix lunch is available at lunch time only.",
    "Sharing a fix lunch is not allowed.",
    "Jain fix lunch is not available.",
  ],
};

export const CUISINES = [
  {
    icon: "🫕",
    title: "North Indian & Punjabi",
    text: "Slow-simmered gravies, dal makhani, kadai and handi specials cooked in the classic Punjabi style.",
  },
  {
    icon: "🫓",
    title: "Tandoor & Breads",
    text: "Naan, kulcha, paratha and tawa roti pulled fresh from the tandoor, brushed with pure butter.",
  },
  {
    icon: "🧆",
    title: "Starters & Indo-Chinese",
    text: "Manchurian, chilli paneer, momos and crisp pakodas — the favourite pre-dinner bites.",
  },
  {
    icon: "🍚",
    title: "Rice & Biryani",
    text: "Jeera rice, pulao and layered vegetable and Hyderabadi biryani served with cooling raita.",
  },
  {
    icon: "🥘",
    title: "Paneer & Kofta",
    text: "A whole menu built for paneer lovers — lababdar, pasanda, balti, kaju and rich koftas.",
  },
  {
    icon: "🥤",
    title: "Lassi & Sweets",
    text: "Thick sweet and mango lassi, butter milk and traditional desserts to finish the meal.",
  },
];

export const SIGNATURE_DISHES = [
  {
    name: "Paneer Lababdar",
    price: "₹270",
    note: "Our most-ordered paneer gravy — creamy, tangy and rich.",
  },
  {
    name: "Dal Makhani",
    price: "₹220",
    note: "Black dal simmered slow overnight with butter and cream.",
  },
  {
    name: "Butter Naan",
    price: "₹60",
    note: "Pillowy tandoor naan finished with a brush of butter.",
  },
  {
    name: "Special Sher-E-Punjab",
    price: "₹240",
    note: "The signature house sabzi, generous and full of flavour.",
  },
  {
    name: "Vegetable Biryani",
    price: "₹220",
    note: "Aromatic layered rice served with a cool veg raita.",
  },
  {
    name: "Special Lassi",
    price: "₹120",
    note: "Thick, chilled and topped — the classic Punjabi finish.",
  },
];

export const MENU: MenuCategory[] = [
  {
    id: "soup",
    name: "Soup",
    unit: "Per 200 ml",
    blurb: "Warm beginnings, made fresh through the day.",
    icon: "🍜",
    dishes: [
      { name: "Tomato soup", price: 110 },
      { name: "Hot and sour veg soup", price: 120, tag: "spicy" },
      { name: "Veg soup", price: 120 },
      { name: "Veg manchurian soup", price: 140 },
      { name: "Veg manchow soup", price: 130, tag: "bestseller" },
      { name: "Sweet corn soup", price: 135 },
      { name: "Sweet corn veg soup", price: 135 },
      { name: "Cream of mushroom soup", price: 135 },
      { name: "Cheese corn tomato soup", price: 145 },
    ],
  },
  {
    id: "starters",
    name: "Starters",
    unit: "Dry or gravy, per 10 pcs unless noted",
    blurb: "Crisp, smoky and made to share.",
    icon: "🧆",
    dishes: [
      { name: "Veg manchurian", price: 180, tag: "bestseller" },
      { name: "Mushroom chilli", price: 280 },
      { name: "Paneer chilli", price: 280, tag: "spicy" },
      { name: "Paneer tikka dry", price: 300, tag: "chef" },
      { name: "Paneer pakoda", price: 300 },
      { name: "Cheese pakoda", price: 350 },
      { name: "Cheese ball", price: 350 },
      { name: "Harabhara kabab (12 pcs)", price: 200 },
      { name: "Spring roll (12 pcs)", price: 220 },
      { name: "Momos", price: 150 },
      { name: "French fries (200 gm)", price: 150 },
    ],
  },
  {
    id: "punjabi",
    name: "Pure Punjabi Veg",
    unit: "Per 300 to 450 gm",
    blurb: "The heart of the kitchen — home-style Punjabi sabzi.",
    icon: "🫕",
    dishes: [
      { name: "Sp. baby corn butter masala", price: 220 },
      { name: "Sp. makai khub masala", price: 220 },
      { name: "Sp. Sher-E-Punjab", price: 240, tag: "chef" },
      { name: "Navratan korma (sweet)", price: 250, tag: "sweet" },
      { name: "Mushroom mutter masala", price: 230 },
      { name: "Mushroom masala", price: 260 },
      { name: "Mushroom do pyaza", price: 250 },
      { name: "Mushroom palak", price: 230 },
      { name: "Corn palak", price: 230 },
      { name: "Veg kolhapuri", price: 210, tag: "spicy" },
      { name: "Veg makhanwala", price: 220 },
      { name: "Veg jal fry", price: 220 },
      { name: "Veg hyderabadi", price: 220 },
      { name: "Veg diwani handi", price: 230 },
      { name: "Veg jaipuri", price: 220 },
      { name: "Veg kadai", price: 210 },
      { name: "Veg handi", price: 230 },
      { name: "Veg tawa masala", price: 250 },
    ],
  },
  {
    id: "paneer",
    name: "Paneer",
    unit: "Per 300 to 500 gm",
    blurb: "A whole section for paneer lovers.",
    icon: "🥘",
    dishes: [
      { name: "Chana paneer", price: 210 },
      { name: "Mutter paneer", price: 220 },
      { name: "Palak paneer", price: 220 },
      { name: "Shahi paneer", price: 240 },
      { name: "Shahi korma", price: 230 },
      { name: "Soya paneer masala", price: 230 },
      { name: "Paneer tikka masala", price: 220 },
      { name: "Paneer butter masala", price: 240, tag: "bestseller" },
      { name: "Paneer angara", price: 250, tag: "spicy" },
      { name: "Paneer khima (dry)", price: 250 },
      { name: "Paneer chatpata", price: 260 },
      { name: "Paneer roganjosh", price: 260 },
      { name: "Paneer korma", price: 220 },
      { name: "Paneer kadai", price: 230 },
      { name: "Paneer bhurji", price: 240 },
      { name: "Paneer balti", price: 250 },
      { name: "Paneer toofani", price: 250 },
      { name: "Paneer pasanda", price: 260 },
      { name: "Paneer handi", price: 260 },
      { name: "Paneer tawa masala", price: 270 },
      { name: "Paneer do pyaza", price: 250 },
      { name: "Paneer lababdar", price: 270, tag: "chef" },
      { name: "Cheese butter masala", price: 290 },
      { name: "Mushroom paneer masala", price: 270 },
    ],
  },
  {
    id: "veg-dal",
    name: "Vegetables & Dal",
    unit: "Per 300 gm",
    blurb: "Everyday comfort, cooked clean and simple.",
    icon: "🥬",
    dishes: [
      { name: "Aloo gobhi (dry or gravy)", price: 180 },
      { name: "Aloo palak", price: 180 },
      { name: "Aloo mutter", price: 180 },
      { name: "Mix vegetable", price: 180 },
      { name: "Mix vegetable (dry)", price: 220 },
      { name: "Sev tomato", price: 200 },
      { name: "Jeera aloo (dry)", price: 180 },
      { name: "Bhindi masala", price: 180 },
      { name: "Bhindi fry (dry)", price: 220 },
      { name: "Plain palak tadka", price: 220 },
      { name: "Chana masala", price: 200 },
      { name: "Dal makhani (black dal)", price: 220, tag: "bestseller" },
      { name: "Dal fry tadka", price: 210 },
      { name: "Dal fry butter", price: 210 },
      { name: "Dal fry", price: 180 },
      { name: "Dal hariyali (dal and palak mix)", price: 200 },
      { name: "Sarso da saag (seasonal)", price: 220, tag: "new" },
      { name: "Baighan bharta (seasonal)", price: 200, tag: "new" },
    ],
  },
  {
    id: "kaju-kofta",
    name: "Kaju & Kofta",
    unit: "Per 300 to 500 gm",
    blurb: "Rich, celebratory gravies for a special meal.",
    icon: "🌰",
    dishes: [
      { name: "Kaju paneer lasaniya", price: 290 },
      { name: "Kaju paneer", price: 260 },
      { name: "Kaju masala", price: 290 },
      { name: "Kaju curry", price: 290 },
      { name: "Khoya kaju (sweet)", price: 290, tag: "sweet" },
      { name: "Kaju balti butter", price: 300 },
      { name: "Malai kofta (sweet or spicy)", price: 240, tag: "sweet" },
      { name: "Nargis kofta", price: 240 },
      { name: "Paneer kofta", price: 240 },
      { name: "Kashmiri kofta (sweet)", price: 250, tag: "sweet" },
      { name: "Cheese kofta", price: 260 },
    ],
  },
  {
    id: "breads",
    name: "Roti, Naan & Paratha",
    unit: "Price per piece",
    blurb: "Straight from the tandoor to your plate.",
    icon: "🫓",
    dishes: [
      { name: "Butter chapati or plain chapati (tawa roti)", price: 18 },
      { name: "Roti, tandoori plain", price: 18 },
      { name: "Butter roti, tandoori", price: 20 },
      { name: "Bajari roti", price: 35 },
      { name: "Makai roti", price: 35 },
      { name: "Missi roti", price: 60 },
      { name: "Butter paratha", price: 40 },
      { name: "Butter kulcha", price: 65 },
      { name: "Onion garlic kulcha", price: 90 },
      { name: "Mirch pyaaj kulcha", price: 90 },
      { name: "Plain naan", price: 50 },
      { name: "Butter naan", price: 60, tag: "bestseller" },
      { name: "Butter cheese naan", price: 130 },
      { name: "Garlic naan", price: 80 },
      { name: "Cheese garlic naan", price: 140 },
      { name: "Kashmiri naan", price: 150 },
      { name: "Stuff naan", price: 110 },
      { name: "Aloo paratha (dahi and butter)", price: 100 },
      { name: "Gobi paratha", price: 110 },
      { name: "Onion garlic paratha", price: 100 },
      { name: "Paneer paratha", price: 120 },
      { name: "Stuff paratha", price: 130 },
    ],
  },
  {
    id: "rice",
    name: "Rice & Biryani",
    unit: "Per 200 to 450 gm",
    blurb: "Fragrant rice, pulao and slow-layered biryani.",
    icon: "🍚",
    dishes: [
      { name: "Plain rice", price: 110 },
      { name: "Jeera fried rice", price: 130 },
      { name: "Steam rice hot", price: 120 },
      { name: "Veg pulav", price: 180 },
      { name: "Veg pulav and cheese", price: 220 },
      { name: "Peas pulav (green peas)", price: 180 },
      { name: "Paneer pulav", price: 220 },
      { name: "Veg Kashmiri pulav (sweet)", price: 270, tag: "sweet" },
      { name: "Kaju pulav", price: 270 },
      { name: "Vegetable biryani", price: 220, tag: "bestseller" },
      { name: "Hyderabadi biryani", price: 240, tag: "spicy" },
      { name: "Masala fried rice", price: 220 },
      { name: "Vegetable biryani with veg raita", price: 250 },
      { name: "Hyderabadi biryani with veg raita", price: 270 },
      { name: "Veg fried rice (Chinese)", price: 200 },
      { name: "Veg manchurian fried rice (Chinese)", price: 240 },
      { name: "Mushroom fried rice (Chinese)", price: 250 },
      { name: "Extra raita", price: 30 },
      { name: "Extra cheese", price: 40 },
    ],
  },
  {
    id: "raita",
    name: "Raita, Salad & Papad",
    unit: "Raita per 200 ml, papad per piece",
    blurb: "The cool, crunchy sides that complete the thali.",
    icon: "🥗",
    dishes: [
      { name: "Curd", price: 50 },
      { name: "Plain raita", price: 50 },
      { name: "Green fudina chutney (100 ml)", price: 30 },
      { name: "Veg raita", price: 60 },
      { name: "Aloo raita", price: 60 },
      { name: "Boondi raita", price: 60 },
      { name: "Pineapple raita", price: 90 },
      { name: "Mix fruit raita", price: 100 },
      { name: "Roasted papad", price: 25 },
      { name: "Fry papad", price: 30 },
      { name: "Sp. masala papad", price: 40 },
      { name: "Sp. cheese masala papad", price: 60 },
      { name: "Tomato salad", price: 50 },
      { name: "Green salad (250 gm)", price: 65 },
    ],
  },
  {
    id: "lassi",
    name: "Lassi & Sweets",
    unit: "Lassi per 250 to 280 ml",
    blurb: "Thick lassi and timeless Indian sweets.",
    icon: "🥤",
    dishes: [
      { name: "Butter milk", price: 25 },
      { name: "Sweet lassi", price: 70 },
      { name: "Mango lassi", price: 100, tag: "bestseller" },
      { name: "Sp. Sher-E-Punjab lassi", price: 120, tag: "chef" },
      { name: "Gulab jamun (2 pcs)", price: 30, tag: "sweet" },
      { name: "Kala jamun (2 pcs)", price: 30, tag: "sweet" },
      { name: "Makai roti sweet churma (2 pcs)", price: 200, tag: "sweet" },
    ],
  },
];

export const HOUSE_NOTES = [
  "Pure vegetarian kitchen — Jain food is not available.",
  "Fixed, fair prices. No discounts.",
  "On Sundays and festival days, expect a short wait after you order.",
  "Parcel orders are taken by phone and WhatsApp, and we are on Swiggy and Zomato.",
];

export const tagLabels: Record<NonNullable<Dish["tag"]>, string> = {
  bestseller: "Bestseller",
  chef: "Chef's pick",
  sweet: "Sweet",
  spicy: "Spicy",
  new: "Seasonal",
};
