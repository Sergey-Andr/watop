"use client";
import { Fragment, memo, ReactElement, useState } from "react";
import { cakes } from "@/app/tempInfo";
import Image from "next/image";

const Catalog = (): ReactElement => {
  const [headAndTail, setHeadAndTail] = useState([0, 4]);
  return (
    <section className="w-full h-full mb-40">
      <ul className="flex w-full justify-center">
        <ul className="flex flex-wrap max-w-2xl w-full">
          {cakes.slice(headAndTail[0], headAndTail[1]).map((cake) => (
            <li
              key={cake.name}
              className="w-72 h-fit flex flex-col items-start justify-center odd:mr-8 first:mb-8"
            >
              <Image
                width={288}
                src={cake.image}
                alt={cake.name}
                className="h-96 overflow-hidden mb-4"
              />
              <div className="font-sans w-full h-fit flex items-center justify-between px-2">
                <div>
                  <p className="first-letter:uppercase font-bold">
                    {cake.name}
                  </p>
                  <p>{cake.taste}</p>
                </div>
                <p className="font-bold">{cake.price}$</p>
              </div>
            </li>
          ))}
        </ul>

        <li className="max-w-xl w-full h-fit flex flex-col items-start justify-center relative">
          {cakes.slice(headAndTail[1], headAndTail[1] + 1).map((cake) => (
            <Fragment key={cake.name}>
              <Image
                width={576}
                height={928}
                src={cake.image}
                alt={cake.name}
                className="mb-4 h-full"
              />
              <div className="font-sans w-full h-fit flex items-center justify-between px-2">
                <div>
                  <p className="first-letter:uppercase font-bold">
                    {cake.name}
                  </p>
                  <p className="first-letter:uppercase ">{cake.taste}</p>
                </div>
                <p className="font-bold">{cake.price}$</p>
              </div>
            </Fragment>
          ))}
        </li>
      </ul>
    </section>
  );
};

export default memo(Catalog);
