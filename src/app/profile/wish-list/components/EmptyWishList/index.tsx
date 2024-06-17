"use client";
import heart from "@/../public/heart-empty-wish-list.png";
import Image from "next/image";

export default function EmptyWishList() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Image src={heart} alt="cake" className="w-60 mb-8" />
      <p className="text-2xl">Тук все още няма нищо.</p>
    </div>
  );
}
