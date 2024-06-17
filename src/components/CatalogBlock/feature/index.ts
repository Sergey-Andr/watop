import { TCategory } from "@/components/CatalogBlock/store/useCategoriesStore";
import { ICake } from "@/app/utils/cakes/fetchAllCakes";

export const sortCakes = (sortCakes: ICake[], category: TCategory) => {
  if (!sortCakes) return [];
  const cakes = [...sortCakes];

  switch (category) {
    case "popular": {
      const chanks = [];
      for (let i = 0; i < cakes.length - 1; i += 5) {
        chanks.push(cakes.slice(i, i + 5));
      }
      chanks.map((chank) => {
        return chank.sort((a, b) => a.popularity - b.popularity);
      });

      return chanks.flat();
    }
    default: {
      return cakes.filter((cake) =>
        cake.type.find((type) => type === category),
      );
    }
  }
};
