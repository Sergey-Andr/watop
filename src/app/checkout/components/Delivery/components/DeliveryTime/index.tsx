import React, {
  Dispatch,
  memo,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import moment from "moment/moment";
import {
  useSelectCheckout,
  useSetCheckoutActions,
} from "@/app/checkout/store/useCheckoutStore";
import { fetchAllPersonalData } from "@/app/utils/profile/get/apihAllPersonalData";
import { getEmail } from "@/features/getEmail";

type TFiveDays = { date: string; month: string; dayOfWeek: string }[];

const time = ["10:00-15:00", "15:00-23:00"];
const MAX_TIMEOUT = 5;
const MULTIPLIER = 2;

const generateDeliveryDates = ({
  isSameDay,
  setFiveDays,
}: {
  isSameDay: boolean;
  setFiveDays: Dispatch<SetStateAction<TFiveDays>>;
}) => {
  const tempFiveDays = [];
  for (let i = 0; i < 5; i++) {
    const dayParts = moment()
      .add(isSameDay ? i : i + MULTIPLIER, "days")
      .format("D-MMMM-dd")
      .split("-");
    const day = {
      date: dayParts[0],
      month: dayParts[1].charAt(0).toUpperCase() + dayParts[1].slice(1),
      dayOfWeek: dayParts[2].charAt(0).toUpperCase() + dayParts[2].slice(1),
    };
    tempFiveDays.push(day);
  }

  setFiveDays(tempFiveDays);
};

const DeliveryTime = (): ReactElement => {
  const order = useSelectCheckout();
  const { setOrder } = useSetCheckoutActions();

  const [fiveDays, setFiveDays] = useState<TFiveDays>([]);

  moment.locale("bg");

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

        const isSameDay = data.deliveryAddress.city
          .split(" ")
          .includes("София");
        generateDeliveryDates({ isSameDay, setFiveDays });
      } else {
        generateDeliveryDates({ isSameDay: false, setFiveDays });
      }
    })();
  }, []);

  const isTimePass = moment().hour() >= 15;
  const currentDay = moment().format("D");
  const currentHour = moment().hour();

  return (
    <table className="w-full">
      <thead className="flex justify-between w-full font-sans">
        {fiveDays.map((day, index) => (
          <tr key={index} className="text-lg font-semibold">
            <th>{day.date + " "}</th>
            <th>{day.month}</th>
            <th>({day.dayOfWeek})</th>
          </tr>
        ))}
      </thead>
      <tbody
        onClick={(e) => {
          e.preventDefault();
        }}
        className="flex justify-between w-full font-sans"
      >
        {fiveDays.map((day, index) => (
          <tr key={index} className="flex flex-col w-fit">
            {time.map((time, timeIndex) => {
              const timeHour = parseInt(time.split("-")[1]);
              const isDisabled =
                currentDay === day.date &&
                ((timeHour === 15 && currentHour >= 15) ||
                  (timeHour === 23 && currentHour >= 23));
              return (
                <td
                  key={timeIndex}
                  onClick={() => {
                    if (!isDisabled) {
                      setOrder({
                        delivery: {
                          ...order?.delivery,
                          time: day.date + " " + time,
                        },
                      });
                    }
                  }}
                  className={`cursor-pointer leading-8 text-lg hover:text-rose-600 duration-300 rounded-md p-1 ${
                    isDisabled
                      ? "text-black/60 cursor-default pointer-events-none"
                      : ""
                  } ${
                    order?.delivery?.time === day.date + " " + time
                      ? "outline outline-1 outline-rose-600 text-rose-600"
                      : ""
                  }`}
                >
                  {time}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default memo(DeliveryTime);
