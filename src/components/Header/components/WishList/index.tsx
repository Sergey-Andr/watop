"use client";
import { memo, ReactElement } from "react";
import { selectWishList } from "@/components/CatalogBlock/store/useWishListStore";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";

const WishList = (): ReactElement => {
  const wishList = selectWishList();
  return (
    <Link
      role="link"
      href="/profile/wish-list"
      className="relative mr-4 group/wish-list cursor-pointer"
    >
      <FaRegHeart className="w-6 h-6 cursor-pointer hover:bg-black/10 duration-300 mt-0.5" />
      <span
        className={`w-5 h-5 absolute z-10 bg-rose-400/60 rounded-full duration-300 translate-x-3/4 -translate-y-3/4 flex items-center justify-center pb-1 font-bold ${wishList?.length === 0 ? "hidden" : "block"}`}
      >
        {wishList?.length ?? ""}
      </span>
      <span className="w-full h-7 absolute bg-black/10 rounded-full scale-125 opacity-0 group-hover/wish-list:opacity-100 duration-300 -translate-y-full" />
    </Link>
  );
};

export default memo(WishList);
