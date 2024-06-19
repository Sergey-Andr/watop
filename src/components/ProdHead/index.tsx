"use client";
import { memo, useEffect } from "react";
import { useParams } from "next/navigation";
import { fetchCakeById } from "@/service/fetchCakeById";
import { fetchCheckAuth } from "@/app/utils/auth/apiCheckIsAuth";

const ProdHead = (): null => {
  const { id } = useParams();
  let cake = (async () => {
    if (id) {
      return await fetchCakeById(+id);
    }
    return null;
  })();

  useEffect(() => {
    cake.then(() => {
      scrollTo({ top: 0, behavior: "instant" });
    });
  }, [cake]);

  useEffect(() => {
    (async () => {
      const cookies = document.cookie?.split("; ");
      const refreshToken = cookies
        ?.find((cookie) => {
          return cookie.slice(0, 12) === "refreshToken";
        })
        ?.slice(13);

      if (refreshToken) {
        const response = await fetchCheckAuth(refreshToken);

        if (response.data) {
          const month = new Date().setTime(
            new Date().getTime() + 30 * 24 * 60 * 60 * 1000,
          );
          const hour = new Date().setTime(
            new Date().getTime() + 60 * 60 * 1000,
          );
          document.cookie = `refreshToken=${response.data.refreshToken}; expires=${new Date(month).toUTCString()}; path=/; SameSite=Strict"`;
          document.cookie = `accessToken=${response.data.accessToken}; expires=${new Date(hour).toUTCString()}; path=/; SameSite=Strict"`;
        }
      }
    })();

    const handleClick = (e: Event) => {
      try {
        const target = e.target as HTMLLinkElement;
        const targetId = (target.getAttribute("href") as string).split("#")[1];
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          e.preventDefault();

          const targetHeight = targetElement.getBoundingClientRect().top;
          scrollTo({ top: targetHeight, behavior: "smooth" });
        } else {
          setTimeout(() => {
            const targetId = (target.getAttribute("href") as string).split(
              "#",
            )[1];
            const targetElement = document.getElementById(
              targetId,
            ) as HTMLElement;

            if (targetElement) {
              const targetHeight = targetElement.offsetTop;
              scrollTo({ top: targetHeight, behavior: "smooth" });
            }
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

  return null;
};

export default memo(ProdHead);
