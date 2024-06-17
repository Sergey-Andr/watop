import { TCategory } from "@/components/CatalogBlock/store/useCategoriesStore";
import { StaticImageData } from "next/image";
import { customInterceptor } from "@/app/utils/api";

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

export async function fetchAllCakes() {
  try {
    const response = await customInterceptor({
      url: "/cakes",
      method: "GET",
    });

    if (!response.ok) {
      const error = await response.text();
      return { status: response.status, errors: error };
    }

    const data = await response.json();

    return { status: 200, data: data };
  } catch (error) {
    return { status: 500, message: error };
  }
}
