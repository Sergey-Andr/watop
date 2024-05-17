import React, { FC, memo, ReactElement } from "react";
import { motion } from "framer-motion";
import { handleInputChange } from "@/components/Header/feature";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import zoom from "@/../public/zoom.svg";
import {
  TCakeName,
  TDebounceRequestName,
  TDebounceTimer,
} from "@/components/Header/components/SearchCakes";

interface ISearchedCakesList {
  cakeName: TCakeName;
  setCakeName: React.Dispatch<React.SetStateAction<TCakeName>>;
  debounceTimer: TDebounceTimer;
  setDebounceRequestName: React.Dispatch<
    React.SetStateAction<TDebounceRequestName>
  >;
  setDebounceTimer: React.Dispatch<React.SetStateAction<TDebounceTimer>>;
}

const SearchCakesInput: FC<ISearchedCakesList> = ({
  cakeName,
  setCakeName,
  debounceTimer,
  setDebounceTimer,
  setDebounceRequestName,
}): ReactElement => {
  return (
    <>
      <motion.input
        value={cakeName}
        onChange={(e) => {
          handleInputChange({
            name: e.target.value,
            delay: 600,
            setCakeName,
            debounceTimer,
            setDebounceTimer,
            setDebounceRequestName,
          });
        }}
        type="text"
        placeholder="ТОРТ"
        className="py-2 px-4 w-64 h-7 rounded-lg border border-orange-200 placeholder:text-yellow-900/50 focus-visible:outline-orange-200"
      />
      {cakeName ? (
        <RxCross2
          onClick={() =>
            handleInputChange({
              name: "",
              delay: 0,
              setCakeName,
              debounceTimer,
              setDebounceTimer,
              setDebounceRequestName,
            })
          }
          className="absolute right-4 top-1/4 cursor-pointer"
        />
      ) : (
        <Image src={zoom} alt="zoom" className="absolute right-4 top-1/4" />
      )}
    </>
  );
};

export default memo(SearchCakesInput);
