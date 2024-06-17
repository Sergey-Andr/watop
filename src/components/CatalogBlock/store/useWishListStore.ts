"use client";
import { createStore } from "@/store/createStore";

export const WISH_LIST = "wishList";

interface IUseWishListStore extends IUseWishListContent {
  actions: IUseWishListActions;
}

export interface IUseWishListContent {
  wishList: number[];
}

export interface IUseWishListActions {
  setWishList: (wishList: number[]) => void;
}

const useWishListStore = createStore(
  (set: (actions: IUseWishListContent) => void): IUseWishListStore => ({
    wishList: [],
    actions: {
      setWishList: (wishList) => set({ wishList }),
    },
  }),
  WISH_LIST,
  true,
  "locale",
);

export const selectWishList = (): number[] =>
  useWishListStore((state: IUseWishListStore) => state.wishList);

export const useSetWishListActions = (): IUseWishListActions =>
  useWishListStore((state: IUseWishListStore) => state.actions);
