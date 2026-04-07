"use client";
import { memo, ReactElement } from "react";
import Image from "next/image";
import mainCake from "../../../public/main-cake.webp";
import SocialMedia from "@/components/IntroBlock/components/SocialMedia";
import Link from "next/link";

const IntroBlock = (): ReactElement => {
  return (
    <section className="mb-96">
      <Image
        width={950}
        src={mainCake}
        alt="Chocolate cake with flowers on top"
        className="absolute right-0 top-0"
      />
      <div className="mt-24 ml-12 relative z-10">
        <h1 className="text-6xl flex flex-col mb-12">
          Confectionery
          <br />& bakery shop
          <sub className="text-2xl text-black/60 mt-6">
            Доставка торта в Софію того ж дня
          </sub>
        </h1>
        <Link
          aria-label="Купуйте зараз"
          href="/#catalog"
          className="py-4 px-12 bg-rose-700 hover:bg-rose-800 duration-300 text-white rounded-full text-base"
        >
          Купуйте зараз
        </Link>
        <SocialMedia />
      </div>
    </section>
  );
};

export default memo(IntroBlock);
