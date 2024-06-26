"use client";
import { memo } from "react";
import {
  TCategory,
  useSelectCategory,
  useSetCategoryActions,
} from "@/components/CatalogBlock/store/useCategoriesStore";

interface INavigationItem {
  label: string;
  category: TCategory;
}

const navigation: INavigationItem[] = [
  { label: "Популярна торти", category: "popular" },
  { label: "Празненства торти", category: "celebration" },
  { label: "Бебета торти", category: "baby" },
  { label: "Сватбена торти", category: "wedding" },
  { label: "Специална торти", category: "special" },
];

const Navigation = () => {
  const { setCategory } = useSetCategoryActions();
  const category = useSelectCategory();

  return (
    <nav className="flex justify-between max-w-3xl w-full font-sans text-xl mb-16">
      {navigation.map((nav) => (
        <button
          id={`nav_${nav.label}`}
          key={nav.label}
          onClick={() => setCategory(nav.category)}
          className={`cursor-pointer relative text-lg hover:text-black/50 duration-300 ${category === nav.category ? "after:absolute after:h-0.5 after:w-full after:bg-red-600 after:translate-y-10 after:-translate-x-full" : ""}`}
        >
          {nav.label}
        </button>
      ))}
    </nav>
  );
};

export default memo(Navigation);
