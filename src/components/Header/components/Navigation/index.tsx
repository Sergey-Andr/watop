"use client";
import { memo, useState } from "react";
import Link from "next/link";

export const navigationHash = [
  { hash: "", label: "Начало" },
  { hash: "#catalog", label: "Каталог" },
  { hash: "#order", label: "Как да поръчате" },
  { hash: "#delivery", label: "Доставка" },
  { hash: "#contacts", label: "Контакти" },
];

const Navigation = () => {
  const [hash, setHash] = useState("");
  return (
    <>
      {navigationHash.map((link) => (
        <Link
          key={link.hash}
          scroll={false}
          onClick={() => {
            setHash(link.hash);
          }}
          href={`/${link.hash}`}
          className={`smooth-scroll cursor-pointer relative text-lg hover:text-black/50 duration-300 ${hash === link.hash ? "after:absolute after:h-0.5 after:w-4/5 after:bg-red-600 after:translate-y-7 after:-translate-x-[110%]" : ""}`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default memo(Navigation);
