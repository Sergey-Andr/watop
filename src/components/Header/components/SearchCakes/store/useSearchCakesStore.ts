"use client";
import { createStore } from "@/store/createStore";
import { ICake } from "@/app/tempInfo";

interface IUseSearchCakesStore extends IUseSearchCakesContent {
  actions: IUseSearchCakesActions;
}

export interface IUseSearchCakesContent {
  searchedCakes: ICake[];
}

export interface IUseSearchCakesActions {
  setSearchCakes: (searchedCakes: ICake[]) => void;
}

const useSearchCakesStore = createStore(
  (set: (actions: IUseSearchCakesContent) => void): IUseSearchCakesStore => ({
    searchedCakes: [],
    actions: {
      setSearchCakes: (searchedCakes) => set({ searchedCakes }),
    },
  }),
);

export const selectSearchCakes = (): ICake[] =>
  useSearchCakesStore((state: IUseSearchCakesStore) => state.searchedCakes);

export const useSetSearchCakesActions = (): IUseSearchCakesActions =>
  useSearchCakesStore((state: IUseSearchCakesStore) => state.actions);
