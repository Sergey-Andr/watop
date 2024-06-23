"use client";
import React, { memo, ReactElement, useEffect, useState } from "react";
import EditView from "src/app/profile/settings/components/DeliveryAddress/components/EditView";
import StaticView from "src/app/profile/settings/components/DeliveryAddress/components/StaticView";
import { getEmail } from "@/features/getEmail";
import { TErrors } from "@/app/profile/settings/components/PersonalInfo";
import { fetchAllPersonalData } from "@/app/utils/profile/get/apihAllPersonalData";
import { submitPersonalInfo } from "@/features/submitPersonalInfo";

const DeliveryAddress = (): ReactElement => {
  const [isEdit, setIsEdit] = useState(false);
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [floor, setFloor] = useState("");
  const [errors, setErrors] = useState<TErrors>([]);

  useEffect(() => {
    (async () => {
      const { status, data } = await fetchAllPersonalData(getEmail());
      if (status === 200 && data) {
        setCity(data.deliveryAddress.city);
        setStreet(data.deliveryAddress.street);
        setHouse(data.deliveryAddress.house);
        setFloor(data.deliveryAddress.floor);
      }
    })();
  }, []);

  return (
    <section>
      {city.length === 0 ? (
        <>
          {isEdit ? (
            <EditView
              city={city}
              street={street}
              house={house}
              floor={floor}
              errors={errors}
              setCity={setCity}
              setFloor={setFloor}
              setHouse={setHouse}
              setStreet={setStreet}
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          {isEdit ? (
            <EditView
              city={city}
              street={street}
              house={house}
              floor={floor}
              errors={errors}
              setCity={setCity}
              setFloor={setFloor}
              setHouse={setHouse}
              setStreet={setStreet}
            />
          ) : (
            <StaticView
              city={city}
              street={street}
              house={house}
              floor={floor}
            />
          )}
        </>
      )}

      <div className="flex">
        <button
          onClick={(e) => {
            e.preventDefault();

            submitPersonalInfo({
              errors,
              setErrors,
              fields: [
                { name: "city", value: city, parent: "deliveryAddress" },
                { name: "street", value: street, parent: "deliveryAddress" },
                { name: "house", value: house, parent: "deliveryAddress" },
                { name: "floor", value: floor, parent: "deliveryAddress" },
              ],
            });
            setIsEdit(false);
          }}
          className={`py-2 px-10 ${isEdit ? "block" : "hidden"} bg-rose-700 text-white text-base rounded-full`}
        >
          Запази
        </button>
        <button
          onClick={() => {
            setIsEdit(!isEdit);
          }}
          className={`py-2 px-10 ${isEdit ? "text-lg hover:underline" : "bg-rose-700 text-white"} text-base rounded-full`}
        >
          {isEdit ? "Отмени " : "Редактирай"}
        </button>
      </div>
    </section>
  );
};

export default memo(DeliveryAddress);
