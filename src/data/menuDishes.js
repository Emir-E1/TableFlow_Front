const base = import.meta.env.BASE_URL;

const contentImage = (name) => `${base}Content/${encodeURIComponent(name)}`;

export const menuDishes = [
  {
    image: contentImage("Image 3.png"),
    description: "Spicy seasoned seafood noodles",
    price: 2.29,
    quantity: 20,
  },
  {
    image: contentImage("Image 8.png"),
    description: "Salted pasta with mushroom sauce",
    price: 2.69,
    quantity: 11,
  },
  {
    image: contentImage("Image 5.png"),
    description: "Beef dumpling in hot and sour soup",
    price: 2.99,
    quantity: 16,
  },
  {
    image: contentImage("Image 6.png"),
    description: "Healthy noodle with spinach",
    price: 3.29,
    quantity: 22,
  },
  {
    image: contentImage("Image 5.png"),
    description: "Hot spicy fried rice with omelet",
    price: 3.49,
    quantity: 13,
  },
  {
    image: contentImage("Image 8.png"),
    description: "Spicy instant noodle with egg",
    price: 3.59,
    quantity: 17,
  },
  {
    image: contentImage("Image 3.png"),
    description: "Japanese noodle with pork",
    price: 3.29,
    quantity: 19,
  },
];

export function getMenuDish(index) {
  return menuDishes[index % menuDishes.length];
}

const contentImageNames = [
  "Image 3.png",

  "Image 5.png",
  "Image 6.png",

  "Image 8.png",
];

export const menuImageOptions = contentImageNames.map((name) => ({
  name,
  src: contentImage(name),
}));
