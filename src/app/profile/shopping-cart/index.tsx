"use client";
import { memo, ReactElement, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Popover from "@/app/cake/[id]/components/Cake/components/Popover";

const ShoppingCart = (): ReactElement => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <FiShoppingCart className="w-6 h-6 mr-4 group-hover/cart:text-rose-600 duration-300" />
      <button
        onClick={() => {
          setIsClicked(!isClicked);
        }}
        className="group-hover/cart:text-rose-600 duration-300"
      >
        Пазарска количка
      </button>
      <Popover isClicked={isClicked} setIsClicked={setIsClicked} />
    </>
  );
};

export default memo(ShoppingCart);
