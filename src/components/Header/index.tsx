"use server";
import Image from "next/image";
import icon from "@/../public/logo.jpg";
import search from "@/../public/zoom.svg";
import account from "@/../public/account.svg";
import shoppingCart from "@/../public/shoppingCart.svg";
import Navigation from "src/components/Header/components/Navigation";

export default async function Header() {
  return (
    <header className="w-full z-50 h-24 py-3 mt-6 relative">
      <section className="flex justify-between items-center w-full relative z-50">
        <section className="flex w-fit items-center">
          <Image
            src={icon}
            alt="logo"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full mr-4"
          />
          <h1 className="text-3xl font-semibold">WATOP</h1>
        </section>
        <section className="flex justify-between max-w-xl w-full">
          <Navigation />
        </section>
        <section className="flex w-fit">
          <div className="relative mr-4 group/search">
            <Image
              src={search}
              alt="search cake"
              className="w-7 h-7 cursor-pointer"
            />
            <span className="w-full h-7 absolute bg-black/10 rounded-full scale-125 opacity-0 group-hover/search:opacity-100 duration-300 -translate-y-full" />
          </div>
          <div className="relative mr-4 group/account">
            <Image
              src={account}
              alt="sign in"
              className="w-7 h-7 cursor-pointer hover:bg-black/10 rounded-full duration-300"
            />
            <span className="w-full h-7 absolute bg-black/10 rounded-full scale-125 opacity-0 group-hover/account:opacity-100 duration-300 -translate-y-full" />
          </div>
          <div className="relative group/cart">
            <Image
              src={shoppingCart}
              alt="orders"
              className="w-8 h-8 cursor-pointer hover:bg-black/10 rounded-full duration-300 relative -top-1"
            />
            <span className="w-full h-7 absolute bg-black/10 rounded-full scale-125 opacity-0 group-hover/cart:opacity-100 duration-300 -translate-y-[120%]" />
          </div>
        </section>
      </section>
    </header>
  );
}
