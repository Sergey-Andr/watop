"use client";
import { memo, ReactElement, useEffect, useState } from "react";
import {
  useSelectShoppingCart,
  useSetShoppingCartActions,
} from "@/app/cake/[id]/store/useShoppingCartStore";
import { ICake } from "@/service/fetchAllCakes";
import { fetchCakeById } from "@/service/fetchCakeById";
import { DELIVERY_COST } from "@/app/checkout/components/Delivery";
import { fetchOrder } from "@/app/utils/profile/set/apiOrder";
import { useSelectCheckout } from "@/app/checkout/store/useCheckoutStore";
import { getEmail } from "@/features/getEmail";

const Summary = (): ReactElement => {
  const shoppingCart = useSelectShoppingCart();
  const order = useSelectCheckout();
  const { setShoppingCart } = useSetShoppingCartActions();

  const [cost, setTotalCost] = useState<number>(0);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    (async () => {
      const fetchedCakes: ICake[] = [];
      for (const product of shoppingCart) {
        const { data } = await fetchCakeById(product.id);
        fetchedCakes.push(data);
      }

      setTotalCost(
        fetchedCakes.reduce(
          (sum, item, currentIndex) =>
            sum + item.price * shoppingCart[currentIndex].quantity,
          0,
        ),
      );
    })();
  }, [shoppingCart]);

  const isBtnDisabled =
    order?.delivery?.city &&
    order?.delivery?.street &&
    order?.delivery?.house &&
    order?.delivery?.floor &&
    order?.delivery?.time &&
    order?.cakes &&
    order?.payment &&
    order?.firstName &&
    order?.secondName &&
    order?.phone &&
    order?.recipientEmail;

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold">Общо</h2>
      <div className="my-4 pb-4 border-b border-b-gray-300 outline-gray-300">
        <span className="text-lg flex justify-between mb-4 text-gray-600">
          {shoppingCart.length} стока на обща стойност
          <span className="font-sans font-medium">{cost} лв</span>
        </span>
        <span className="text-lg flex justify-between text-gray-600">
          Цена на доставка
          <span className="font-sans font-medium">{DELIVERY_COST} лв</span>
        </span>
      </div>
      <span className="my-4 mb-8 pb-4 border-b border-b-gray-300 outline-gray-300 text-lg flex justify-between">
        Дължима сума
        <span className="font-sans font-medium text-2xl">
          {cost + DELIVERY_COST} лв
        </span>
      </span>
      <div className="relative">
        {isClicked ? (
          <p className="text-rose-600 leading-none mb-4 font-sans">
            Вие не сте попълнили всички полета!
          </p>
        ) : (
          <></>
        )}

        <button
          onClick={async () => {
            setIsClicked(!isClicked);
            if (isBtnDisabled) {
              const email = getEmail();
              if (email) {
                const { status } = await fetchOrder({
                  recipientFullName: `${order?.firstName} ${order?.secondName}`,
                  recipientPhone: order?.phone,
                  recipientEmail: order?.recipientEmail,
                  deliveryAddress: order?.delivery,
                  id: order?.cakes,
                  payment: order?.payment,
                  email: getEmail(),
                });
                if (status === 200) {
                  typeof window !== "undefined"
                    ? (window.location.href = "/")
                    : "";
                  setShoppingCart([]);
                }
              } else {
                typeof window !== "undefined"
                  ? (window.location.href = "/")
                  : "";
                setShoppingCart([]);
              }
            }
          }}
          // disabled={!isBtnDisabled}
          className={`w-full py-4 px-8 mb-4 rounded-full ${!isBtnDisabled ? "cursor-default" : "hover:bg-rose-700"} hover:bg-rose-700 cursor-pointer bg-rose-600 duration-300 text-white text-xl text-nowrap`}
        >
          Потвърждавам поръчката
        </button>
      </div>
      <p className="mb-2 text-sm text-gray-600 ">
        Потвърждавайки поръчката, аз приемам условията:
      </p>
      <ul className="text-sm text-gray-600 list-disc text-wrap pl-4">
        <li className="mb-2 underline underline-offset-2 cursor-pointer">
          положението за обработка и защита на личните данни
        </li>
        <li className=" underline underline-offset-2 cursor-pointer">
          потребителското споразумение
        </li>
      </ul>
    </div>
  );
};

export default memo(Summary);
