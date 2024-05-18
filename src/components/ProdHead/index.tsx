"use client";
import { memo, ReactElement, useEffect } from "react";
import { useParams } from "next/navigation";
import { cakes } from "@/app/tempInfo";

const ProdHead = (): ReactElement => {
  const { id } = useParams();
  const name = cakes.find((cake) => cake.id === +id)?.name as string;

  useEffect(() => {
    document.title = `${name ?? "WATOP"} | Cakes shop`;
    document.textContent = `delicious ${name} cakes and much more. The widest selection and fast delivery`;
    scrollTo({ top: 0, behavior: "instant" });
  }, [name]);

  useEffect(() => {
    const handleClick = (e: Event) => {
      try {
        const target = e.target as HTMLLinkElement;
        const targetId = (target.getAttribute("href") as string).split("/#")[1];
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          e.preventDefault();

          const targetHeight = targetElement.getBoundingClientRect().top;
          scrollTo({ top: targetHeight, behavior: "smooth" });
        } else {
          setTimeout(() => {
            const targetId = (target.getAttribute("href") as string).split(
              "/#",
            )[1];
            const targetElement = document.getElementById(
              targetId,
            ) as HTMLElement;
            const targetHeight = targetElement.offsetTop;

            scrollTo({ top: targetHeight, behavior: "smooth" });
          }, 300);
        }
      } catch (e) {
        if (e instanceof Error) {
          throw new Error(e.message);
        } else {
          throw new Error("An unknown error occurred");
        }
      }
    };
    const links = document.querySelectorAll("a.smooth-scroll");
    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  });

  return <></>;
};

export default memo(ProdHead);
