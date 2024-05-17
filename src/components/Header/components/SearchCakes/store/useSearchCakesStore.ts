"use client";
import { createStore } from "@/store/createStore";
import { ICakes } from "@/app/tempInfo";

interface IUseSearchCakesStore extends IUseSearchCakesContent {
  actions: IUseSearchCakesActions;
}

export interface IUseSearchCakesContent {
  searchedCakes: ICakes[];
}

export interface IUseSearchCakesActions {
  setSearchCakes: (searchedCakes: ICakes[]) => void;
}

const useSearchCakesStore = createStore(
  (set: (actions: IUseSearchCakesContent) => void): IUseSearchCakesStore => ({
    searchedCakes: [],
    actions: {
      setSearchCakes: (searchedCakes) => set({ searchedCakes }),
    },
  }),
);

export const selectSearchCakes = (): ICakes[] =>
  useSearchCakesStore((state: IUseSearchCakesStore) => state.searchedCakes);

export const useSetSearchCakesActions = (): IUseSearchCakesActions =>
  useSearchCakesStore((state: IUseSearchCakesStore) => state.actions);
