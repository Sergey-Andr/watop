import cakeChocolate from "@/../public/cakeChocolate.jpg";
import cakeApple from "@/../public/cakeApple.jpg";
import cakeFruit from "@/../public/cakeFruit.jpg";
import cakeAnanas from "@/../public/cakeAnanas.jpg";
import cakeCarrot from "@/../public/cakeCarrot.png";
import { StaticImageData } from "next/image";

export interface ICakes {
  taste: string;
  type: string[];
  name: string;
  price: number;
  image: StaticImageData;
  popularity: number;
  description: string;
}

export const cakes: ICakes[] = [
  {
    taste: "chocolate",
    type: ["celebration", "baby"],
    name: "Chocolate cake",
    price: 140,
    image: cakeChocolate,
    popularity: 4,
    description: "cake",
  },
  {
    taste: "Apple cake",
    type: [""],
    name: "fruits",
    price: 110,
    image: cakeApple,
    popularity: 2,
    description: "cake",
  },
  {
    taste: "fruits",
    type: ["wedding", "special"],
    name: "Fruits cake",
    price: 130,
    image: cakeFruit,
    popularity: 7,
    description: "cake",
  },
  {
    taste: "fruits",
    type: ["celebration", "special"],
    name: "Ananas cake",
    price: 120,
    image: cakeAnanas,
    popularity: 6,
    description: "cake",
  },
  {
    taste: "fruits",
    type: ["wedding", "baby"],
    name: "Carrot cake",
    price: 160,
    image: cakeCarrot,
    popularity: 8,
    description: "cake",
  },
];
