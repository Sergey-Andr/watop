"use client";
import { memo, ReactElement, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchCakeById } from "@/app/utils/cakes/fetchCakeById";
import { ICake } from "@/app/utils/cakes/fetchAllCakes";
import BreadCrumb from "@/app/cake/[id]/components/Cake/components/BreadCrumb";
import {
  useSelectShoppingCart,
  useSetShoppingCartActions,
} from "@/app/cake/[id]/store/useShoppingCartStore";
import Popover from "@/app/cake/[id]/components/Cake/components/Popover";
import { TbShoppingCartCopy } from "react-icons/tb";

const Cake = (): ReactElement => {
  const { id } = useParams();
  const shoppingCart = useSelectShoppingCart();
  const { setShoppingCart } = useSetShoppingCartActions();

  const [cake, setCake] = useState<ICake | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await fetchCakeById(+id);
      setCake(data.data);
    })();
  }, []);

  useEffect(() => {
    if (isClicked) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isClicked]);

  const handleClicked = (e: any) => {
    e.preventDefault();
    setIsClicked(!isClicked);
    if (shoppingCart.find((product) => product.id === +id)) {
      setShoppingCart(shoppingCart.filter((product) => product.id !== +id));
    } else {
      setShoppingCart([...shoppingCart, { id: +id, quantity: 1 }]);
    }
  };

  if (!cake) {
    return <></>;
  }

  return (
    <section className="mb-40">
      <BreadCrumb name={cake.name} />
      <div
        itemScope
        itemType="http://schema.org/Product"
        className="flex justify-center"
      >
        <img
          itemProp="image"
          width={576}
          height={928}
          src={`${process.env.NEXT_API_URL}/${cake.image}`}
          alt={`${cake.name} cake`}
          className="mr-40"
        />
        <div>
          <h1 itemProp="name" className="text-5xl font-medium mb-6">
            {cake.name}
          </h1>
          <strong itemProp="offers" className="font-sans">
            <span itemProp="price">{cake.price} лв</span>
            <meta itemProp="priceCurrency" content="USD" />
          </strong>
          <p
            itemProp="description"
            className="mt-8 max-w-xl w-full text-lg tracking-wide leading-8 font-medium text-black/80 mb-14"
          >
            {cake.description}
          </p>
          {shoppingCart.find((product) => product.id === +id) ? (
            <button
              onClick={() => setIsClicked(!isClicked)}
              className="py-4 text-rose-700 flex items-end text-lg"
            >
              <TbShoppingCartCopy className="w-6 h-6 mr-4 text-rose-600 duration-300" />
              <p className="border border-dashed border-rose-600 border-t-transparent border-r-transparent border-l-transparent">
                In the cart
              </p>
            </button>
          ) : (
            <button
              aria-label="Buy now"
              className="py-4 px-14 bg-rose-700 text-white rounded-full text-sm font-sans"
              onClick={handleClicked}
            >
              Buy now
            </button>
          )}
        </div>
      </div>
      <Popover isClicked={isClicked} setIsClicked={setIsClicked} />
    </section>
  );
};

export default memo(Cake);
