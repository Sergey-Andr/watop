"use client";
import { memo, useState } from "react";

const navigation = [
  { label: "Popular cakes" },
  { label: "Celebration cakes" },
  { label: "Baby cakes" },
  { label: "Wedding cakes" },
  { label: "Special cakes" },
];

const Navigation = () => {
  const [hash, setHash] = useState("");

  return (
    <ul className="flex justify-between max-w-3xl w-full font-sans text-xl mb-16">
      {navigation.map((nav) => (
        <li
          id={`nav_${nav.label}`}
          key={nav.label}
          onClick={() => setHash(nav.label)}
          className={`cursor-pointer relative text-lg hover:text-black/50 duration-300 ${hash === nav.label ? "after:absolute after:h-0.5 after:w-full after:bg-red-600 after:translate-y-10 after:-translate-x-full" : ""}`}
        >
          {nav.label}
        </li>
      ))}
    </ul>
  );
};

export default memo(Navigation);
