import cakeChocolate from "@/../public/cakeChocolate.jpg";
import cakeApple from "@/../public/cakeApple.jpg";
import cakeFruit from "@/../public/cakeFruit.jpg";
import cakeAnanas from "@/../public/cakeAnanas.jpg";
import cakeCarrot from "@/../public/cakeCarrot.png";
import { StaticImageData } from "next/image";

export interface ICake {
  id: number;
  taste: string;
  type: string[];
  name: string;
  price: number;
  image: StaticImageData;
  popularity: number;
  related: number[];
  description: string;
}

export const cakes: ICake[] = [
  {
    id: 1,
    taste: "chocolate",
    type: ["celebration", "baby"],
    name: "Chocolate cake",
    price: 140,
    image: cakeChocolate,
    popularity: 4,
    related: [],
    description:
      "Dark chocolate cake with a white frosting placed on a cake stand. The cake is decorated with flowers, giving it a beautiful and elegant appearance. The cake is positioned on a dining table, ready to be served and enjoyed.",
  },
  {
    id: 2,
    taste: "fruits",
    type: [""],
    name: "Apple cake",
    price: 110,
    image: cakeApple,
    popularity: 2,
    related: [5, 4, 3],
    description:
      "Delicious-looking cake with apples and blackberries on top. The cake is placed on a white plate, which is sitting on a dining table. The cake is decorated with a variety of apples and blackberries, creating a visually appealing and appetizing presentation. The combination of fruit and cake makes for a delightful dessert.",
  },
  {
    id: 3,
    taste: "fruits",
    type: ["wedding", "special"],
    name: "Fruits cake",
    price: 130,
    image: cakeFruit,
    popularity: 7,
    related: [5, 4, 2],
    description:
      "Three-layer cake with a white frosting and a variety of fruits on top. The cake is placed on a wooden stand, which is situated on a dining table. The fruits on the cake include apples, oranges, and pears, adding a colorful and fresh touch to the dessert. In addition to the cake, there are several wine glasses and cups placed around the table, suggesting that the cake might be served during a special occasion or celebration. The combination of the cake and the tableware creates a festive and inviting atmosphere.",
  },
  {
    id: 4,
    taste: "fruits",
    type: ["celebration", "special"],
    name: "Ananas cake",
    price: 120,
    image: cakeAnanas,
    popularity: 6,
    related: [5, 3, 2],
    description:
      "White cake with a generous amount of whipped cream on top. The cake is decorated with slices of pineapple, giving it a tropical and refreshing appearance. The cake is placed on a white plate, which is sitting on a dining table. A spoon is also present on the table, likely used for serving the cake. The combination of the cake, whipped cream, and pineapple slices creates a visually appealing and appetizing dessert.",
  },
  {
    id: 5,
    taste: "fruits",
    type: ["wedding", "baby"],
    name: "Carrot cake",
    price: 160,
    image: cakeCarrot,
    popularity: 8,
    related: [4, 3, 2, 1],
    description:
      "Delicious carrot cake with a generous amount of frosting on top. The cake is decorated with various fruits, including a mix of berries and other fruits. The cake is placed on a wooden stand, which adds a rustic touch to the presentation. The combination of the carrot cake and the fruit toppings creates a visually appealing and appetizing dessert.",
  },
];
