"use client";
import React, { memo, ReactElement, useEffect, useState } from "react";
import { fetchAllPersonalData } from "@/app/utils/profile/get/apihAllPersonalData";
import { getEmail } from "@/features/getEmail";
import { TErrors } from "@/app/profile/settings/components/PersonalInfo";
import StaticView from "@/app/profile/settings/components/LinkCard/components/StaticView";
import EditView from "@/app/profile/settings/components/LinkCard/components/EditView";
import { submitPersonalInfo } from "@/features/submitPersonalInfo";

const LinkCard = (): ReactElement => {
  const [isEdit, setIsEdit] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState<TErrors>([]);

  useEffect(() => {
    (async () => {
      const { status, data } = await fetchAllPersonalData(getEmail());

      if (status === 200 && data?.card) {
        setCardNumber(data?.card?.cardNumber);
        setExpirationYear(data?.card?.expirationDate.split("/")[0]);
        setExpirationMonth(data?.card?.expirationDate.split("/")[1]);
        setCvv(data?.card?.cvv);
      }
    })();
  }, []);

  return (
    <section>
      {cardNumber.length === 0 ? (
        <>
          {isEdit ? (
            <EditView
              cardNumber={cardNumber}
              expirationYear={expirationYear}
              expirationMonth={expirationMonth}
              cvv={cvv}
              errors={errors}
              setCardNumber={setCardNumber}
              setExpirationYear={setExpirationYear}
              setExpirationMonth={setExpirationMonth}
              setCvv={setCvv}
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          {isEdit ? (
            <EditView
              cardNumber={cardNumber}
              expirationYear={expirationYear}
              expirationMonth={expirationMonth}
              cvv={cvv}
              errors={errors}
              setCardNumber={setCardNumber}
              setExpirationYear={setExpirationYear}
              setExpirationMonth={setExpirationMonth}
              setCvv={setCvv}
            />
          ) : (
            <StaticView cardNumber={cardNumber} />
          )}
        </>
      )}
      <div className="flex">
        <button
          onClick={(e) => {
            e.preventDefault();
            const expirationDate = `${expirationYear}/${expirationMonth}`;

            submitPersonalInfo({
              errors,
              setErrors,
              fields: [
                {
                  name: "cardNumber",
                  value: cardNumber,
                  parent: "card",
                },
                {
                  name: "expirationDate",
                  value: expirationDate,
                  parent: "card",
                },
                {
                  name: "cvv",
                  value: cvv,
                  parent: "card",
                },
              ],
            });
            setIsEdit(false);
          }}
          className={`py-2 px-10 ${isEdit ? "block" : "hidden"} bg-rose-700 text-white text-base rounded-full relative`}
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

export default memo(LinkCard);
