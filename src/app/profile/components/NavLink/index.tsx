"use client";
import { memo, ReactElement } from "react";
import { usePathname } from "next/navigation";
import { FaRegListAlt } from "react-icons/fa";
import Link from "next/link";
import { GoPerson } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa6";

const NavLink = ({
  text,
  path,
}: {
  text: string;
  path: string;
}): ReactElement => {
  const pathname = usePathname();

  if (path === "my-orders") {
    return (
      <>
        <FaRegListAlt
          className={`w-6 h-6 mr-4 group-hover/orders:text-rose-600 duration-300 ${pathname.includes(path) ? "text-rose-600" : ""}`}
        />
        <Link
          href="/profile/my-orders"
          className={`group-hover/orders:text-rose-600 duration-300 ${pathname.includes(path) ? "text-rose-600" : ""}`}
        >
          {text}
        </Link>
      </>
    );
  }
  if (path === "settings") {
    return (
      <>
        <GoPerson
          className={`w-8 h-8 mr-2 group-hover/account:fill-rose-600 duration-300 ${pathname.includes(path) ? "fill-rose-600" : ""}`}
        />
        <Link
          href="/profile/settings"
          className={`group-hover/account:text-rose-600 duration-300 text-base ${pathname.includes(path) ? "text-rose-600" : ""}`}
        >
          <h2>{text}</h2>
        </Link>
      </>
    );
  }
  if (path === "wish-list") {
    return (
      <>
        <FaRegHeart
          className={`w-6 h-6 mr-4 group-hover/wish:text-rose-600 duration-300 text ${pathname.includes(path) ? "text-rose-600" : ""}`}
        />
        <Link
          href="/profile/wish-list"
          className={`group-hover/wish:text-rose-600 duration-300 ${pathname.includes(path) ? "text-rose-600" : ""}`}
        >
          {text}
        </Link>
      </>
    );
  }

  return <></>;
};

export default memo(NavLink);
