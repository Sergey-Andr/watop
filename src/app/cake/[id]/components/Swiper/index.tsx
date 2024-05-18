"use client";
import { memo, ReactElement } from "react";
import { useParams } from "next/navigation";
import { cakes, ICake } from "@/app/tempInfo";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./custom-arrows.css";

const CakesSwiper = (): ReactElement => {
  const { id } = useParams();
  const relatedCakes = cakes
    .find((cake) => cake.id === +id)
    ?.related.map((id) => cakes.find((cake) => cake.id === id)) as ICake[];

  return (
    <section className="max-w-6xl w-full m-auto">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={3}
        loop
        navigation
        autoplay={{ delay: 3000 }}
      >
        {relatedCakes.map((cake) => (
          <SwiperSlide
            className="w-fit h-full flex flex-col items-start justify-center relative"
            key={cake.name}
          >
            <div className="w-72 h-fit">
              <Link href={`/cake/${cake.id}`}>
                <Image
                  width={288}
                  height={360}
                  src={cake.image}
                  alt={cake.name}
                  className="mb-4 w-72 h-96 overflow-hidden select-none"
                />
              </Link>
              <div className="font-sans w-full h-fit flex items-center justify-between px-2 select-none">
                <div>
                  <p className="first-letter:uppercase font-bold">
                    {cake.name}
                  </p>
                  <p className="first-letter:uppercase">{cake.taste}</p>
                </div>
                <strong>{cake.price}$</strong>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default memo(CakesSwiper);
