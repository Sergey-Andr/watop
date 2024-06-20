"use client";
import { memo, ReactElement, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "./custom-arrows.css";
import { fetchCakeById } from "@/service/fetchCakeById";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import { ICake } from "@/service/fetchAllCakes";
import PagesLoader from "@/components/Loader";

const CakesSwiper = (): ReactElement => {
  const { id } = useParams();
  const [cake, setCake] = useState<ICake | null>(null);
  const [relatedCakes, setRelatedCakes] = useState<ICake[] | []>([]);

  useEffect(() => {
    (async () => {
      const { data } = await fetchCakeById(+id);
      setCake(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (cake) {
        const abc = cake.related.map((id) => fetchCakeById(id));
        const results = await Promise.all(abc);

        setRelatedCakes(results.map((res) => res.data));
      }
    })();
  }, [cake]);

  if (!cake) {
    return (
      <section className="max-w-6xl w-full m-auto mb-40 relative">
        <PagesLoader />
      </section>
    );
  }

  return (
    <section className="max-w-6xl w-full m-auto mb-40">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 3000 }}
      >
        {relatedCakes.map((cake) => (
          <SwiperSlide
            key={cake.id}
            itemScope
            itemType="http://schema.org/Product"
            className="w-fit h-full flex flex-col items-start justify-center relative"
          >
            <div className="w-72 h-fit">
              <Link role="link" href={`/cake/${cake.id}`}>
                <img
                  src={`${process.env.NEXT_API_URL}/${cake.image}`}
                  alt={`${cake.name} cake`}
                  className="mb-4 w-72 h-96 overflow-hidden select-none"
                />
              </Link>
              <div className="font-sans w-full h-fit flex items-center justify-between px-2 select-none">
                <div>
                  <h3 itemProp="name" className="font-bold">
                    {cake.name}
                  </h3>
                  <p>{cake.taste}</p>
                </div>
                <strong itemProp="offers" className="font-sans">
                  <span itemProp="price">{cake.price} лв</span>
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

export default memo(CakesSwiper);
