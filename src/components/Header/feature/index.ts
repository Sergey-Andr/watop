import React, { useMemo } from "react";
import { cakes } from "@/app/tempInfo";
import {
  TCakeName,
  TDebounceRequestName,
  TDebounceTimer,
} from "@/components/Header/components/SearchCakes";
import { IUseSearchCakesActions } from "@/components/Header/components/SearchCakes/store/useSearchCakesStore";

interface IHandleInputChange {
  name: string;
  delay?: number;
}

type TProps = {
  setCakeName: React.Dispatch<React.SetStateAction<TCakeName>>;
  debounceTimer: TDebounceTimer;
  setDebounceRequestName: React.Dispatch<
    React.SetStateAction<TDebounceRequestName>
  >;
  setDebounceTimer: React.Dispatch<React.SetStateAction<TDebounceTimer>>;
};

export const handleInputChange = ({
  name,
  delay = 600,
  ...props
}: IHandleInputChange & TProps) => {
  props.setCakeName(name);
  if (props.debounceTimer) clearTimeout(props.debounceTimer);
  const timer = setTimeout(() => {
    props.setDebounceRequestName(name);
  }, delay);
  props.setDebounceTimer(timer);
};

interface IUseGetSortedCakes extends IUseSearchCakesActions {
  debounceRequestName: TDebounceRequestName;
}

export const useGetSortedCakes = ({
  debounceRequestName,
  setSearchCakes,
}: IUseGetSortedCakes) => {
  return useMemo(() => {
    if (debounceRequestName) {
      const result = cakes.filter((cake) =>
        cake.name.toLowerCase().includes(debounceRequestName),
      );
      setSearchCakes(result);
      return result;
    }
    return [];
  }, [debounceRequestName]);
};
