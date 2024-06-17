"use client";
import { createStore } from "@/store/createStore";

interface IUseShoppingCartStore extends IUseShoppingCartContent {
  actions: IUseShoppingCartActions;
}

type TShoppingCard = {
  id: number;
  quantity: number;
};

export interface IUseShoppingCartContent {
  shoppingCart: TShoppingCard[];
}

export interface IUseShoppingCartActions {
  setShoppingCart: (shoppingCart: TShoppingCard[]) => void;
}

const useShoppingCartStore = createStore(
  (set: (actions: IUseShoppingCartContent) => void): IUseShoppingCartStore => ({
    shoppingCart: [],
    actions: {
      setShoppingCart: (shoppingCart) => set({ shoppingCart }),
    },
  }),
  "shoppingCart",
  true,
  "locale",
);

export const selectShoppingCart = (): TShoppingCard[] =>
  useShoppingCartStore((state: IUseShoppingCartStore) => state.shoppingCart);

export const useSetShoppingCartActions = (): IUseShoppingCartActions =>
  useShoppingCartStore((state: IUseShoppingCartStore) => state.actions);
