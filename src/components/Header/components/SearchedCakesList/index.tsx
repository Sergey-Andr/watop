import React, { FC, memo, ReactElement } from "react";
import Image from "next/image";
import shoppingCart from "../../../../../public/shoppingCart.svg";
import { ICake } from "@/app/tempInfo";
import { handleInputChange } from "@/components/Header/feature";
import { motion, Variants } from "framer-motion";
import {
  TCakeName,
  TDebounceRequestName,
  TDebounceTimer,
  TIsOpen,
} from "@/components/Header/components/SearchCakes";

interface ISearchedCakesList {
  isOpen: TIsOpen;
  setCakeName: React.Dispatch<React.SetStateAction<TCakeName>>;
  debounceTimer: TDebounceTimer;
  setDebounceRequestName: React.Dispatch<
    React.SetStateAction<TDebounceRequestName>
  >;
  setDebounceTimer: React.Dispatch<React.SetStateAction<TDebounceTimer>>;
  searchedCakes: ICake[];
}

const itemVariantsLi: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const itemVariantsUl = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.07,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

const SearchedCakesList: FC<ISearchedCakesList> = ({
  isOpen,
  setCakeName,
  debounceTimer,
  setDebounceTimer,
  setDebounceRequestName,
  searchedCakes,
}): ReactElement => {
  return (
    <motion.ul
      variants={itemVariantsUl}
      className={`w-full bg-white absolute p-2 translate-y-2 rounded-xl outline outline-2 outline-orange-100`}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      {searchedCakes.map((cake, i) => (
        <motion.li
          variants={itemVariantsLi}
          key={i}
          className="w-full h-full mb-4 flex last:mb-0 relative font-bold group/cake cursor-pointer"
          onClick={() => {
            handleInputChange({
              name: "",
              delay: 0,
              setCakeName,
              debounceTimer,
              setDebounceTimer,
              setDebounceRequestName,
            });
          }}
        >
          <Image src={cake.image} alt={"cake image"} className="w-16 mr-2" />
          <div className="flex items-center justify-between w-full">
            <div className="w-24">
              <span className="text-neutral-500 text-sm font-normal">
                {cake.taste}
              </span>
              <h2 className="first-letter:uppercase truncate">{cake.name}</h2>
            </div>
            <h4 className="text-sm">{cake.price}$</h4>
            <button
              className="group/buy w-fit h-fit relative z-50 mr-2"
              onClick={(e) => {
                e.stopPropagation();
                //#code
              }}
            >
              <Image
                src={shoppingCart}
                alt="buy now"
                className="relative z-10"
              />
              <span className="scale-150 block bg-yellow-300 w-full h-full rounded-full absolute -translate-y-full" />
              <span className="group-hover/buy:scale-150 scale-0 block bg-black/10 w-full h-full rounded-full duration-300 absolute -translate-y-full" />
            </button>
          </div>
          <span className="group-hover/cake:scale-x-105 group-hover/cake:scale-y-125 group-hover/cake:opacity-100 opacity-0 bg-black/10 w-full h-full duration-300 absolute" />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default memo(SearchedCakesList);
