import { TCategory } from "@/components/CatalogBlock/store/useCategoriesStore";
import { StaticImageData } from "next/image";

export interface ICake {
  id: number;
  taste: string;
  type: TCategory[];
  name: string;
  price: number;
  image: StaticImageData;
  popularity: number;
  related: number[];
  description: string;
}

//@ts-ignore
export async function fetchAllCakes(): any {
  const res = await fetch(`${process.env.NEXT_API_URL}/api/cakes`, {
    method: "GET",
  });
  const cakes = await res.json();

  return { data: cakes };
}
