"use server";
import Image from "next/image";
import icon from "../../../public/logo.jpg";
import Navigation from "src/components/Header/components/Navigation";
import SearchCakes from "@/components/Header/components/SearchCakes";
import ShoppingCart from "@/components/Header/components/ShoppingCart";
import Link from "next/link";
import { GoPerson } from "react-icons/go";
import { cookies } from "next/headers";
import WishList from "@/components/Header/components/WishList";

export default async function Header() {
  const accessToken = cookies().get("accessToken")?.value;
  return (
    <header className="w-full z-40 h-24 py-3 mt-6 relative flex justify-between items-center">
      <Link href="/" className="flex w-fit items-center">
        <Image
          src={icon}
          alt="WATOP logo"
          width={48}
          height={48}
          className="w-12 h-12 rounded-full mr-4"
        />
        <h2 className="text-3xl font-semibold">WATOP</h2>
      </Link>
      <nav
        aria-label="Main navigation"
        role="navigation"
        className="flex justify-between max-w-xl w-full"
      >
        <Navigation />
      </nav>
      <nav className="flex w-fit">
        <SearchCakes />
        <Link
          role="link"
          aria-label="Sign in to your account"
          href="/profile/my-orders"
          className="relative mr-4 group/account cursor-pointer"
        >
          <GoPerson
            aria-label="Sign in to your account"
            className="w-7 h-7 cursor-pointer hover:bg-black/10 rounded-full duration-300"
          />
          <span className="w-full h-7 absolute bg-black/10 rounded-full scale-125 opacity-0 group-hover/account:opacity-100 duration-300 -translate-y-full" />
        </Link>
        {accessToken ? <WishList /> : <></>}
        <ShoppingCart />
      </nav>
    </header>
  );
}
