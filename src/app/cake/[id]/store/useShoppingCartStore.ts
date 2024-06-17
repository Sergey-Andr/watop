"use client";
import { createStore } from "@/store/createStore";

interface IUseWishListStore extends IUseWishListContent {
  actions: IUseWishListActions;
}

export interface IUseWishListContent {
  wishList: number[];
}

export interface IUseWishListActions {
  setWishList: (wishList: number[]) => void;
}

//useWishListStore selectWishList useSetWishListActions
const useWishListStore = createStore(
  (set: (actions: IUseWishListContent) => void): IUseWishListStore => ({
    wishList: [],
    actions: {
      setWishList: (wishList) => set({ wishList }),
    },
  }),
  "wishList",
  true,
  "locale",
);

export const selectWishList = (): number[] =>
  useWishListStore((state: IUseWishListStore) => state.wishList);

export const useSetWishListActions = (): IUseWishListActions =>
  useWishListStore((state: IUseWishListStore) => state.actions);
