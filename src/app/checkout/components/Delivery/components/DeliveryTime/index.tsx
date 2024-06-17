import React, { memo, ReactElement, useEffect, useState } from "react";
import moment from "moment/moment";
import {
  selectCheckout,
  useSetCheckoutActions,
} from "@/app/checkout/store/useCheckoutStore";
import { fetchAllPersonalData } from "@/app/utils/profile/get/apihAllPersonalData";
import { getEmail } from "@/features/getEmail";

type TFiveDays = { date: string; month: string; dayOfWeek: string }[];

const time = ["10:00-15:00", "15:00-23:00"];
const MAX_TIMEOUT = 5;
const MULTIPLIER = 2;

const DeliveryTime = (): ReactElement => {
  const order = selectCheckout();
  const { setOrder } = useSetCheckoutActions();

  const [fiveDays, setFiveDays] = useState<TFiveDays>([]);

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

        moment.locale("bg");
        const tempFiveDays = [];
        for (let i = 0; i < 5; i++) {
          const dayParts = moment()
            .add(isSameDay ? i : i + MULTIPLIER, "days")
            .format("D-MMMM-dd")
            .split("-");
          const day = {
            date: dayParts[0],
            month: dayParts[1].charAt(0).toUpperCase() + dayParts[1].slice(1),
            dayOfWeek:
              dayParts[2].charAt(0).toUpperCase() + dayParts[2].slice(1),
          };
          tempFiveDays.push(day);
        }
        setFiveDays(tempFiveDays);
      }
    })();
  }, []);

  const isTimePass =
    Math.abs(moment().diff(moment("15:00", "HH:mm"), "hours")) < MAX_TIMEOUT;
  const currentDay = moment().format("D");
  const currentHours = moment().format("HH:mm");
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
            {time.map((time, timeIndex) => (
              <td
                key={timeIndex}
                onClick={() => {
                  setOrder({
                    delivery: {
                      ...order?.delivery,
                      time: day.date + " " + time,
                    },
                  });
                }}
                className={`cursor-pointer leading-8 text-lg hover:text-rose-600 duration-300 rounded-md p-1 ${currentDay === day.date && isTimePass ? (Math.abs(moment().diff(moment(time, "HH:mm"), "hours")) < MAX_TIMEOUT || currentHours > time ? "text-black/60 cursor-default hover:none pointer-events-none" : "") : ""} ${order?.delivery?.time === day.date + time ? "outline outline-1 outline-rose-600 text-rose-600" : ""}`}
              >
                {time}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default memo(DeliveryTime);
