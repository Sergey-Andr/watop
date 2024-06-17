"use client";
import { memo, ReactElement, useEffect, useState } from "react";
import { selectShoppingCart } from "@/app/cake/[id]/store/useShoppingCartStore";
import { fetchCakeById } from "@/service/fetchCakeById";
import { ICake } from "@/service/fetchAllCakes";
import process from "process";
import Popover from "@/app/cake/[id]/components/Cake/components/Popover";
import {
  selectCheckout,
  useSetCheckoutActions,
} from "@/app/checkout/store/useCheckoutStore";

const Orders = (): ReactElement => {
  const shoppingCart = selectShoppingCart();
  const order = selectCheckout();
  const { setOrder } = useSetCheckoutActions();

  const [cakes, setCakes] = useState<ICake[]>([]);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [isEdit, setIsEdit] = useState(false);

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

      setOrder({ cakes: shoppingCart });
      setCakes(fetchedCakes);
    })();
  }, [shoppingCart]);

  if (cakes.length === 0) {
    return <></>;
  }

  return (
    <section className="mb-16">
      <h3 className="text-2xl font-medium mb-4 flex justify-between">
        Поръчка
        <sub>
          На стойност: <strong className="font-sans">{totalCost} лв</strong>
        </sub>
      </h3>
      <ul>
        {cakes.map((cake, i) => (
          <li
            key={cake.id}
            className="flex items-center justify-between border border-gray-300 rounded-xl p-4 mb-4 relative"
          >
            <div className="flex relative">
              <img
                src={`${process.env.NEXT_API_URL}/${cake.image}`}
                alt={`${cake.name} cake`}
                itemProp="image"
                className="w-40 h-56 overflow-hidden mr-8"
              />
              <h3 className="text-xl font-medium absolute left-48 w-full text-nowrap">
                {cake.name}
              </h3>
            </div>
            <div>
              <span className="text-xl w-28 mr-40">
                {cake.price} лв <small>x</small> {shoppingCart[i].quantity} ед.
              </span>
              <strong className="font-sans text-xl mr-4">
                {cake.price * shoppingCart[i].quantity} лв
              </strong>
            </div>
            <button
              onClick={() => {
                setIsEdit(!isEdit);
              }}
              className="absolute right-4 bottom-4 text-lg hover:text-rose-600 hover:underline duration-300"
            >
              Редактиране на продукти
            </button>
            {isEdit ? (
              <Popover isClicked={isEdit} setIsClicked={setIsEdit} />
            ) : (
              <></>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default memo(Orders);
