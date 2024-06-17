"use client";
import { memo, ReactElement, useState } from "react";
import { selectShoppingCart } from "@/app/cake/[id]/store/useShoppingCartStore";
import { FiShoppingCart } from "react-icons/fi";
import Popover from "@/app/cake/[id]/components/Cake/components/Popover";

const ShoppingCart = (): ReactElement => {
  const shoppingCart = selectShoppingCart();
  const [isClicked, setIsClicked] = useState(false);
  return (
    <button
      onClick={() => {
        setIsClicked(!isClicked);
      }}
      className="relative group/cart cursor-pointer"
    >
      <FiShoppingCart className="w-7 h-7 stroke-1 cursor-pointer hover:bg-black/10 duration-300 relative -top-1" />
      <span
        className={`w-5 h-5 absolute z-10 bg-rose-400/60 rounded-full duration-300 translate-x-full -translate-y-full flex items-center justify-center pb-1 font-bold ${shoppingCart.length === 0 ? "hidden" : "block"}`}
      >
        {shoppingCart.length}
      </span>
      <span className="w-full h-7 absolute bg-black/10 rounded-full scale-125 opacity-0 group-hover/cart:opacity-100 duration-300 -translate-x-1/2 -translate-y-[120%]" />
      {isClicked ? (
        <Popover isClicked={isClicked} setIsClicked={setIsClicked} />
      ) : (
        <></>
      )}
    </button>
  );
};

export default memo(ShoppingCart);
