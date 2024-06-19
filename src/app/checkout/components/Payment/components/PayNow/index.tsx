import React, { memo, ReactElement, useEffect, useState } from "react";
import Card from "src/app/profile/settings/components/LinkCard/components/EditView";
import { submitPersonalInfo } from "@/features/submitPersonalInfo";
import { TErrors } from "@/app/profile/settings/components/PersonalInfo";
import { fetchAllPersonalData } from "@/app/utils/profile/get/apihAllPersonalData";
import { getEmail } from "@/features/getEmail";
import { formatCardNumber } from "@/features/formatCardNumber";
import {
  useSelectCheckout,
  useSetCheckoutActions,
} from "@/app/checkout/store/useCheckoutStore";

const PayNow = (): ReactElement => {
  const order = useSelectCheckout();
  const { setOrder } = useSetCheckoutActions();

  const [cardNumber, setCardNumber] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState<TErrors>([]);
  const [currentCard, setCurrentCard] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status, data } = await fetchAllPersonalData(getEmail());
      if (status === 200 && data?.card) {
        setCurrentCard(formatCardNumber(data?.card?.cardNumber));
      } else {
        setOrder({ payment: "online-new" });
      }
    })();
  }, []);

  return (
    <div className="p-4 pl-8 flex flex-col">
      <div className="mb-4">
        <input
          disabled={!order?.card?.cardNumber}
          type="radio"
          name="onlinePayment"
          checked={order?.payment?.includes("current")}
          onChange={(e) => {
            e.stopPropagation();
            setOrder({ payment: "online-current" });
          }}
          className="mr-4 w-4 h-4 accent-rose-600"
        />
        <label className="text-lg font-sans">
          {currentCard ?? "Няма карта"}
        </label>
      </div>
      <div className="mb-8">
        <input
          type="radio"
          name="onlinePayment"
          defaultChecked={!order?.card?.cardNumber}
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
            onClick={async (e) => {
              e.preventDefault();
              const response = await submitPersonalInfo({
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
                    value: `${expirationYear}${expirationMonth}`,
                    parent: "card",
                  },
                  {
                    name: "cvv",
                    value: cvv,
                    parent: "card",
                  },
                ],
              });

              if (response?.status === 200) {
                setOrder({ payment: "online-current" });
              }
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
