"use client";
import React, { memo, ReactElement, useEffect } from "react";
import { getEmail } from "@/features/getEmail";
import { fetchAllPersonalData } from "@/app/utils/profile/get/apihAllPersonalData";
import {
  IOrder,
  useSelectCheckout,
  useSetCheckoutActions,
} from "@/app/checkout/store/useCheckoutStore";
import PayNow from "@/app/checkout/components/Payment/components/PayNow";

const Payment = (): ReactElement => {
  const order = useSelectCheckout();
  const { setOrder } = useSetCheckoutActions();

  useEffect(() => {
    (async () => {
      const { status, data } = await fetchAllPersonalData(getEmail());
      if (status === 200 && data) {
        const temp: IOrder = {
          card: {
            cardNumber: data?.card?.cardNumber,
            expirationDate: data?.card?.expirationDate,
            cvv: data?.card?.cvv,
          },
          payment: "receive",
        };
        setOrder(temp);
      }
    })();
  }, []);

  return (
    <section className="mb-16">
      <h3 className="text-2xl font-medium mb-4">Плащане</h3>
      <div>
        <div
          className={`py-2 px-4 mb-4 cursor-pointer ${order?.payment === "receive" ? "outline outline-1 outline-rose-600 rounded-xl" : ""}`}
        >
          <input
            type="radio"
            name="paymentMethod"
            defaultChecked
            onChange={() => {
              setOrder({ payment: "receive" });
            }}
            className="mr-4 w-4 h-4 accent-rose-600"
          />
          <label className="text-lg">Плащане при получаване на стоката</label>
        </div>
        <div
          className={`py-2 px-4 cursor-pointer ${order?.payment?.includes("online") ? "outline outline-1 outline-rose-600 rounded-xl" : ""}`}
        >
          <input
            type="radio"
            name="paymentMethod"
            onChange={() => {
              setOrder({ payment: "online-current" });
            }}
            className="mr-4 w-4 h-4 accent-rose-600"
          />
          <label className="text-lg">Плати сега</label>
          {order?.payment?.includes("online") ? <PayNow /> : <></>}
        </div>
      </div>
    </section>
  );
};

export default memo(Payment);
