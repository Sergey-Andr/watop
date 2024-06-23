"use client";
import { memo, ReactElement, useEffect, useState } from "react";
import { useSelectShoppingCart } from "@/app/cake/[id]/store/useShoppingCartStore";
import { ICake } from "@/service/fetchAllCakes";
import { fetchCakeById } from "@/service/fetchCakeById";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";

const SwiperCakes = (): ReactElement => {
  const shoppingCart = useSelectShoppingCart();
  const [relatedCakes, setRelatedCakes] = useState<ICake[]>([]);

  useEffect(() => {
    (async () => {
      shoppingCart.map(async (product) => {
        const { data } = await fetchCakeById(product.id);
        const relatedCakesPromises = data.related.map((relatedCakeId: number) =>
          fetchCakeById(relatedCakeId).then(
            (response: { data: ICake }) => response.data,
          ),
        );
        const relatedCakesData = await Promise.all(relatedCakesPromises);
        setRelatedCakes((prevState) => {
          const newCakes = relatedCakesData.filter(
            (newCake) =>
              !prevState.some((prevCake) => prevCake.id === newCake.id),
          );
          return [...prevState, ...newCakes];
        });
      });
    })();
  }, [shoppingCart]);

  if (relatedCakes.length === 0) {
    return <></>;
  }
  return (
    <section className="">
      <h2 className="text-2xl font-medium mb-8">Също така препоръчваме</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={5}
        navigation
      >
        {relatedCakes.map((cake) => (
          <SwiperSlide
            key={cake.id}
            itemScope
            itemType="http://schema.org/Product"
            className="w-fit h-full flex flex-col items-start justify-center relative"
          >
            <div className="w-40 h-fit">
              <Link role="link" href={`/cake/${cake.id}`}>
                <div className="overflow-hidden">
                  <img
                    src={`${process.env.NEXT_API_URL}/${cake.image}`}
                    alt={`${cake.name} cake`}
                    className="mb-4 w-40 h-56 overflow-hidden select-none hover:scale-110 duration-300"
                  />
                </div>
              </Link>
              <div className="font-sans w-full h-fit flex items-center justify-between px-2 select-none  text-start">
                <div>
                  <h3 itemProp="name" className="font-bold line-clamp-2">
                    {cake.name}
                  </h3>
                  <p>{cake.taste}</p>
                </div>
                <strong itemProp="offers" className="font-sans">
                  <span itemProp="price" className="text-nowrap">
                    {cake.price} лв
                  </span>
                  <meta itemProp="priceCurrency" content="USD" />
                </strong>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default memo(SwiperCakes);
