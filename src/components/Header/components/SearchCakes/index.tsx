"use client";
import {
  memo,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import search from "../../../../../public/zoom.svg";
import { fetchCakesByName } from "@/service/fetchCakesByName";
import { fetchAllCakes, ICake } from "@/service/fetchAllCakes";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { debounce as _debaunce } from "lodash";

const SearchCakes = (): ReactElement => {
  const [cakes, setCakes] = useState<ICake[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [cakeName, setCakeName] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      const { data } = await fetchAllCakes();
      setCakes(data);
    })();
  }, []);

  const debounceFetchCakes = useCallback(
    _debaunce(async (name: string) => {
      if (name.length >= 3) {
        const { data } = await fetchCakesByName(name);
        setCakes(data);
      }
      if (name.length === 0) {
        const { data } = await fetchAllCakes();
        setCakes(data);
      }
    }, 300),
    [],
  );

  return (
    <div className="mr-4">
      <Drawer
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);

          setTimeout(() => {
            const drawer = document.getElementById("radix-:r3:");

            if (drawer) drawer.removeAttribute("vaul-drawer-direction");
            document.body.removeAttribute("data-scroll-locked");

            if (open) {
              document.body.style.position = "static";
              document.body.style.overflow = "hidden";

              if (ref.current) ref.current.removeAttribute("vaul-drawer");
            } else {
              document.body.style.overflow = "scroll";
              debounceFetchCakes("");
              setCakeName("");
            }
          }, 0);
        }}
      >
        <DrawerTrigger
          role="search"
          className="relative group/search cursor-pointer"
        >
          <Image
            src={search}
            alt="Search cakes"
            className="w-7 h-7 cursor-pointer"
          />
          <span className="w-full h-7 absolute bg-black/10 rounded-full scale-125 opacity-0 group-hover/search:opacity-100 duration-300 -translate-y-full -translate-x-1/2" />
        </DrawerTrigger>
        <DrawerContent ref={ref} className="h-4/5 overflow-y-auto">
          <DrawerHeader className="max-w-7xl w-full mx-auto top-0">
            <div className="relative w-full h-fit">
              <input
                type="text"
                placeholder="Cake name"
                aria-label="Enter a wanted name cake"
                className="placeholder:text-black placeholder:font-sans w-full p-4 bg-black/5 rounded-full mb-4 border border-black"
                onChange={(e) => {
                  setCakeName(e.target.value);
                  debounceFetchCakes(e.target.value);
                }}
                value={cakeName}
              />
              <Image
                src={search}
                alt="Search for a cakes"
                className="absolute top-1/4 right-5 w-6 h-6"
              />
            </div>
          </DrawerHeader>
          <div className="max-w-7xl w-full mx-auto h-full">
            <ul className="grid grid-cols-6 gap-8">
              {cakes.map((cake) => (
                <li key={cake.id} className="mb-8">
                  <div className="w-fit h-fit overflow-hidden">
                    <Link
                      href={`/cake/${cake.id}`}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      <img
                        src={`${process.env.NEXT_API_URL}/${cake.image}`}
                        alt={`${cake.name} торта`}
                        className="hover:scale-110 duration-300 w-52 h-64"
                      />
                    </Link>
                  </div>
                  <h3 className="text-2xl text-center line-clamp-2 text-sans">
                    {cake.name}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default memo(SearchCakes);
