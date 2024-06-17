"use client";

import { memo, ReactElement, useEffect, useState } from "react";
import { selectWishList } from "@/components/CatalogBlock/store/useWishListStore";
import { fetchCakeById } from "@/service/fetchCakeById";
import Link from "next/link";
import Heart from "@/components/CatalogBlock/components/Catalog/component/Heart";
import EmptyWishList from "@/app/profile/wish-list/components/EmptyWishList";

type TCake = { name: string; image: string; id: number };

const WishList = (): ReactElement => {
  const wishList = selectWishList();
  const [cakes, setCakes] = useState<TCake[]>([]);

  useEffect(() => {
    (async () => {
      const cakesArr: TCake[] = [];
      for (const id of wishList) {
        const { data } = await fetchCakeById(id);
        cakesArr.push({ name: data.name, image: data.image, id: data.id });
      }
      setCakes(cakesArr);
    })();
  }, [wishList]);

  if (cakes.length === 0) {
    return <EmptyWishList />;
  }

  return (
    <section>
      <ul className="flex flex-wrap">
        {cakes.map((cake) => (
          <li key={cake.id} className="mb-8 mr-4">
            <div className="w-fit h-fit overflow-hidden group">
              <Link href={`/cake/${cake.id}`} className="relative">
                <img
                  src={`${process.env.NEXT_API_URL}/${cake.image}`}
                  alt={`${cake.name} торта`}
                  className="hover:scale-110 duration-300 w-52 h-72"
                />
                <Heart
                  fill={`${wishList.includes(cake.id) ? "#e11d48" : "transparent"}`}
                  stroke={`${wishList.includes(cake.id) ? "transparent" : "#000"}`}
                  className={`absolute top-4 right-4 w-8 h-8 group-hover:opacity-100 opacity-0 duration-300`}
                  id={cake.id}
                />
              </Link>
            </div>
            <h3 className="text-2xl text-center line-clamp-2 text-sans">
              {cake.name}
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default memo(WishList);
