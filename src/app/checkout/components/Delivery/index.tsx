"use client";
import React, { memo, ReactElement, useEffect } from "react";
import "moment/locale/bg";
import { fetchAllPersonalData } from "@/app/utils/profile/get/apihAllPersonalData";
import { getEmail } from "@/features/getEmail";
import { useSetCheckoutActions } from "@/app/checkout/store/useCheckoutStore";
import AddressInputs from "@/app/checkout/components/Delivery/components/AddressInputs";
import DeliveryTime from "@/app/checkout/components/Delivery/components/DeliveryTime";

export const DELIVERY_COST = 5;

const Delivery = (): ReactElement => {
  const { setOrder } = useSetCheckoutActions();

  useEffect(() => {
    (async () => {
      const { status, data } = await fetchAllPersonalData(getEmail());
      if (status === 200 && data) {
        const temp = {
          delivery: {
            city: data.deliveryAddress.city,
            street: data.deliveryAddress.street,
            house: data.deliveryAddress.house,
            floor: data.deliveryAddress.floor,
          },
        };

        setOrder(temp);
      }
    })();
  }, []);

  return (
    <section className="mb-16">
      <h3 className="text-2xl font-medium mb-4">Доставка</h3>
      <div className="p-4 border border-rose-600 rounded-lg relative">
        <input
          type="radio"
          className="mr-4 w-4 h-4 accent-rose-600"
          defaultChecked
        />
        <label className="text-lg">Куриер до вашия адрес</label>
        <span className="font-semibold font-sans absolute text-lg top-4 right-4">
          {DELIVERY_COST} лв
        </span>
        <AddressInputs />
        <DeliveryTime />
      </div>
    </section>
  );
};

export default memo(Delivery);
