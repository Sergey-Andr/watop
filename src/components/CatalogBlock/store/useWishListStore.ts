"use client";
import { createStore } from "@/store/createStore";

interface IUseShoppingCartStore extends IUseShoppingCartContent {
  actions: IUseShoppingCartActions;
}

export interface IUseShoppingCartContent {
  wishList: number[];
}

export interface IUseShoppingCartActions {
  setShoppingCart: (wishList: number[]) => void;
}

const useShoppingCartStore = createStore(
  (set: (actions: IUseShoppingCartContent) => void): IUseShoppingCartStore => ({
    wishList: [],
    actions: {
      setShoppingCart: (wishList) => set({ wishList }),
    },
  }),
  "shoppingCart",
  true,
  "locale",
);

export const selectShoppingCart = (): number[] =>
  useShoppingCartStore((state: IUseShoppingCartStore) => state.wishList);

export const useSetShoppingCartActions = (): IUseShoppingCartActions =>
  useShoppingCartStore((state: IUseShoppingCartStore) => state.actions);
