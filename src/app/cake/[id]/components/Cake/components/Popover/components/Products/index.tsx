import { memo, ReactElement, useEffect, useMemo, useState } from "react";
import process from "process";
import { selectWishList } from "@/app/cake/[id]/store/useWishListStore";
import { ICake } from "@/service/fetchAllCakes";
import { fetchCakeById } from "@/service/fetchCakeById";

const Products = (): ReactElement => {
  const wishList = selectWishList();
  const [cakes, setCakes] = useState<ICake[]>([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    wishList.map(async (cakeId) => {
      const { data } = await fetchCakeById(cakeId);
      setCakes([...cakes, data]);
    });
  }, []);

  const totalPrice = useMemo(() => {
    let total = 0;
    cakes.map((cake) => {
      total += cake.price;
    });
    return total;
  }, [cakes]);

  if (cakes.length === 0) {
    return <></>;
  }

  return (
    <>
      <div className="mb-16">
        {cakes.map((cake) => (
          <div className="flex justify-between items-end">
            <div className="flex">
              <img
                src={`${process.env.NEXT_API_URL}/${cake.image}`}
                alt={`${cake.name} cake`}
                itemProp="image"
                className="w-40 h-56 overflow-hidden mr-8"
              />
              <h3 className="text-3xl">{cake.name}</h3>
            </div>
            <div className="flex items-center">
              <span
                onClick={() => {
                  if (counter !== 1) setCounter(counter - 1);
                }}
                className={`text-5xl mr-3 pb-2 ${counter === 1 ? "text-gray-300" : "cursor-pointer"} select-none`}
              >
                -
              </span>
              <input
                type="text"
                value={counter}
                onChange={(e) => {
                  if (+e.target.value <= 10 && +e.target.value >= 1)
                    setCounter(+e.target.value);
                }}
                max={10}
                maxLength={2}
                className="w-14 h-10 rounded-xl outline outline-1 outline-black text-center mr-2 text-xl font-sans"
              />
              <span
                onClick={() => {
                  if (counter !== 10) setCounter(counter + 1);
                }}
                className={`text-5xl pb-2 ${counter === 10 ? "text-gray-300" : "cursor-pointer"} select-none`}
              >
                +
              </span>
            </div>
            <span className="text-3xl text-rose-600 text-end pb-4">
              {cake.price} лв
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={() => setIsClicked(false)}
          className="py-2 px-4 h-fit text-sky-600 border rounded-xl font-sans"
        >
          Продължи с пазаруването
        </button>
        <nav className="px-8 py-4 flex items-center border border-rose-500 bg-rose-200 w-fit">
          <span className="text-2xl pb-1 mr-4 font-sans">{totalPrice} лв</span>
          <a className="bg-rose-600 text-xl text-white rounded-xl py-2 px-4 font-sans">
            Оформи поръчката
          </a>
        </nav>
      </div>
    </>
  );
};

export default memo(Products);
