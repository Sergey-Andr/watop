"use client";
import { memo, ReactElement, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useGetSortedCakes } from "@/components/Header/feature";
import SearchCakesInput from "@/components/Header/components/SearchCakes/components/SearchCakesInput";
import SearchedCakesList from "@/components/Header/components/SearchedCakesList";
import { useSetSearchCakesActions } from "@/components/Header/components/SearchCakes/store/useSearchCakesStore";

export type TIsOpen = boolean;
export type TCakeName = string;
export type TDebounceRequestName = string;
export type TDebounceTimer = NodeJS.Timeout | null;

const SearchCakes = (): ReactElement => {
  const [isOpen, setIsOpen] = useState<TIsOpen>(false);
  const [cakeName, setCakeName] = useState<TCakeName>("");
  const [debounceRequestName, setDebounceRequestName] =
    useState<TDebounceRequestName>("");
  const [debounceTimer, setDebounceTimer] = useState<TDebounceTimer>(null);

  const { setSearchCakes } = useSetSearchCakesActions();

  const searchedCakes = useGetSortedCakes({
    debounceRequestName,
    setSearchCakes,
  });

  useEffect(() => {
    if (searchedCakes.length) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [searchedCakes]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="relative w-fit"
    >
      <SearchCakesInput
        cakeName={cakeName}
        debounceTimer={debounceTimer}
        setCakeName={setCakeName}
        setDebounceRequestName={setDebounceRequestName}
        setDebounceTimer={setDebounceTimer}
      />
      <SearchedCakesList
        isOpen={isOpen}
        debounceTimer={debounceTimer}
        searchedCakes={searchedCakes}
        setCakeName={setCakeName}
        setDebounceTimer={setDebounceTimer}
        setDebounceRequestName={setDebounceRequestName}
      />
    </motion.nav>
  );
};

export default memo(SearchCakes);
