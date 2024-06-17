"use client";
import { createStore } from "@/store/createStore";

interface IUseCategoriesStore extends IUseCategoriesContent {
  actions: IUseCategoriesActions;
}

export type TCategory =
  | "popular"
  | "celebration"
  | "baby"
  | "wedding"
  | "special";

export interface IUseCategoriesContent {
  category: TCategory;
}

export interface IUseCategoriesActions {
  setCategory: (category: TCategory) => void;
}

const useCategoriesStore = createStore(
  (set: (actions: IUseCategoriesContent) => void): IUseCategoriesStore => ({
    category: "popular",
    actions: {
      setCategory: (category) => set({ category }),
    },
  }),
  "category",
  true,
  "session",
);

export const selectCategory = (): TCategory =>
  useCategoriesStore((state: IUseCategoriesStore) => state.category);

export const useSetCategoryActions = (): IUseCategoriesActions =>
  useCategoriesStore((state: IUseCategoriesStore) => state.actions);
