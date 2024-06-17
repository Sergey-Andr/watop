import React, { memo, ReactElement, useEffect, useState } from "react";
import Card from "src/app/profile/settings/components/LinkCard/components/EditView";
import { submitPersonalInfo } from "@/features/submitPersonalInfo";
import { TErrors } from "@/app/profile/settings/components/PersonalInfo";
import { fetchAllPersonalData } from "@/app/utils/profile/get/apihAllPersonalData";
import { getEmail } from "@/features/getEmail";
import { formatCardNumber } from "@/features/formatCardNumber";
import {
  selectCheckout,
  useSetCheckoutActions,
} from "@/app/checkout/store/useCheckoutStore";

const PayNow = (): ReactElement => {
  const order = selectCheckout();
  const { setOrder } = useSetCheckoutActions();

  const [cardNumber, setCardNumber] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState<TErrors>([]);
  const [currentCard, setCurrentCard] = useState("");

  useEffect(() => {
    (async () => {
      const { status, data } = await fetchAllPersonalData(getEmail());
      if (status === 200 && data) {
        setCurrentCard(formatCardNumber(data.card.cardNumber));
      }
    })();
  }, []);

  return (
    <div className="p-4 pl-8 flex flex-col">
      <div className="mb-4">
        <input
          type="radio"
          name="onlinePayment"
          checked={order?.payment?.includes("current")}
          onChange={(e) => {
            e.stopPropagation();
            setOrder({ payment: "online-current" });
          }}
          className="mr-4 w-4 h-4 accent-rose-600"
        />
        <label className="text-lg font-sans">{currentCard}</label>
      </div>
      <div className="mb-8">
        <input
          type="radio"
          name="onlinePayment"
          checked={order?.payment?.includes("new")}
          onChange={(e) => {
            e.stopPropagation();
            setOrder({ payment: "online-new" });
          }}
          className="mr-4 w-4 h-4 accent-rose-600"
        />
        <label className="text-lg">Добавяне на карта</label>
      </div>
      {order?.payment?.includes("new") ? (
        <div>
          <Card
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
          <button
            onClick={() => {
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
                    value: `${expirationYear}/${expirationMonth}`,
                    parent: "card",
                  },
                  { name: "cvv", value: cvv, parent: "card" },
                ],
              });
            }}
            className={`py-2 px-10 text-lg bg-rose-700 text-white rounded-full`}
          >
            Добави
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default memo(PayNow);
