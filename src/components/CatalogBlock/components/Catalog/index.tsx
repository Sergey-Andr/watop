"use client";
import {
  Fragment,
  memo,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useAnimation } from "framer-motion";
import { selectCategory } from "@/components/CatalogBlock/store/useCategoriesStore";
import { sortCakes } from "@/components/CatalogBlock/feature";
import { fetchAllCakes, ICake } from "@/service/fetchAllCakes";
import Arrows from "@/components/CatalogBlock/components/Catalog/component/Arrows";
import BigCart from "@/components/CatalogBlock/components/Catalog/component/BigCart";
import SmallCart from "@/components/CatalogBlock/components/Catalog/component/SmallCart";

export const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0.2, transition: { duration: 0.5 } },
};

const Catalog = (): ReactElement => {
  const [headAndTail, setHeadAndTail] = useState<number[]>([0, 4]);
  const [cakes, setCakes] = useState<ICake[]>([]);

  const category = selectCategory();
  const animation = useAnimation();

  useEffect(() => {
    (async () => {
      const { data } = await fetchAllCakes();
      setCakes(data);
    })();
  }, []);

  useEffect(() => {
    animation.start("visible");
  }, [headAndTail, category, cakes]);

  const sortedCakes = useMemo(() => {
    setHeadAndTail(() => [0, 4]);
    return sortCakes(cakes, category);
  }, [category, cakes]);

  const animationStart = useCallback(animation.start, [animation]);

  if (!cakes) {
    return <></>;
  }

  return (
    <section className="w-full h-full mb-40">
      <ul className="flex w-full justify-center relative">
        <ul className="flex flex-wrap max-w-2xl w-full overflow-hidden">
          {sortedCakes.slice(headAndTail[0], headAndTail[1]).map((cake) => (
            <Fragment key={cake.id}>
              <SmallCart cake={cake} animation={animation} />
            </Fragment>
          ))}
        </ul>
        <li
          itemScope
          itemType="http://schema.org/Product"
          className="max-w-xl w-full h-fit flex flex-col items-start justify-center relative"
        >
          {sortedCakes.slice(headAndTail[1], headAndTail[1] + 1).map((cake) => (
            <Fragment key={cake.id}>
              <BigCart cake={cake} animation={animation} />
            </Fragment>
          ))}
          <Arrows
            head={headAndTail[0]}
            tail={headAndTail[1]}
            sortedCakesLength={sortedCakes.length}
            setHeadAndTail={setHeadAndTail}
            animationStart={animationStart}
          />
        </li>
      </ul>
    </section>
  );
};

export default memo(Catalog);
