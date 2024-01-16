<<<<<<< HEAD:foodOrderingApp/server/src/constant/data.js
import images from "../../src/constant/images.js";
=======
import images from "./images.js";
>>>>>>> a80e021fbb3430998d22681c25d7fd649be6ef90:foodOrderingApp/server/constant/data.js

export const sample_foods = [
  {
    id: '1',
    name: 'Pizza Pepperoni',
    cookTime: '10-20',
    price: 10,
    favorite: false,
    origins: ['italy'],
    stars: 4.5,
    imageUrl: images.food1,
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id: '2',
    name: 'Meatball',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    origins: ['persia', 'middle east', 'china'],
    stars: 5,
    imageUrl: images.food2,
    tags: ['SlowFood', 'Lunch'],
  },
  {
    id: '3',
    name: 'Hamburger',
    price: 5,
    cookTime: '10-15',
    favorite: false,
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: images.food3,
    tags: ['FastFood', 'Hamburger'],
  },
  {
    id: '4',
    name: 'Fried Potatoes',
    price: 2,
    cookTime: '15-20',
    favorite: true,
    origins: ['belgium', 'france'],
    stars: 3,
    imageUrl: images.food4,
    tags: ['FastFood', 'Fry'],
  },
  {
    id: '5',
    name: 'Chicken Soup',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', 'asia'],
    stars: 3.5,
    imageUrl: images.food5,
    tags: ['SlowFood', 'Soup'],
  },
  {
    id: '6',
    name: 'Vegetables Pizza',
    price: 9,
    cookTime: '40-50',
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: images.food6,
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
];

export const sample_tags = [
  { name: "All", count: 6 },
  { name: "FastFood", count: 4 },
  { name: "Pizza", count: 2 },
  { name: "Lunch", count: 3 },
  { name: "SlowFood", count: 2 },
  { name: "Hamburger", count: 1 },
  { name: "Fry", count: 1 },
  { name: "Soup", count: 1 },
];