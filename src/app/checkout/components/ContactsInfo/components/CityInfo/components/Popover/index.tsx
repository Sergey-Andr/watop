import React, {
  Dispatch,
  FC,
  Fragment,
  memo,
  ReactElement,
  SetStateAction,
  useState,
} from "react";
import { TbTruckDelivery } from "react-icons/tb";
import City from "@/app/checkout/components/ContactsInfo/components/Popover/components/City";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import { submitPersonalInfo } from "@/features/submitPersonalInfo";
import { TErrors } from "@/app/profile/settings/components/PersonalInfo";
import {
  selectCheckout,
  useSetCheckoutActions,
} from "@/app/checkout/store/useCheckoutStore";

interface IPopover {
  setIsCityClicked: Dispatch<SetStateAction<boolean>>;
  isCityClicked: boolean;
}

const cities = [
  "София",
  "Пловдив",
  "Варна",
  "Бургас",
  "Русе",
  "Стара-Загора",
  "Плевен",
  "Добрич",
];

const Popover: FC<IPopover> = ({
  setIsCityClicked,
  isCityClicked,
}): ReactElement => {
  const [errors, setErrors] = useState<TErrors>([]);
  const order = selectCheckout();
  const { setOrder } = useSetCheckoutActions();

  return (
    <div
      onClick={() => {
        setIsCityClicked(!isCityClicked);
      }}
      className="absolute w-full h-full bg-black/60 top-0 left-0 z-50"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-1/3 h-fit relative top-1/4 left-1/3 bg-white p-4 rounded-lg"
      >
        <h2 className="text-2xl mb-8">
          Укажете своя град.
          <sub className="flex items-center mt-8 text-lg text-black/60">
            <TbTruckDelivery className="mr-4 w-6 h-6 stroke-black/40" />
            Доставям поръчки в цялата България!
          </sub>
        </h2>
        <ul
          onClick={(e) => {
            setOrder({
              ...order,
              //@ts-ignore
              delivery: { city: e.target.dataset.value },
            });
          }}
          className="grid grid-cols-4 gap-4 text-rose-900 text-lg mb-8"
        >
          {cities.map((cityName) => (
            <Fragment key={cityName}>
              <City name={cityName} city={order?.delivery?.city} />
            </Fragment>
          ))}
        </ul>
        <div className="mb-8">
          <label className="text-black/60">
            Укажете населеното място в България
          </label>
          <ReactGoogleAutocomplete
            libraries={["places"]}
            apiKey={process.env.NEXT_GOOGLE_KEY}
            onPlaceSelected={(place) => {
              if (place.formatted_address) {
                setOrder({
                  ...order,
                  delivery: {
                    city: place.formatted_address.split(",")[0],
                    street: order?.delivery?.street,
                    house: order?.delivery?.house,
                    floor: order?.delivery?.floor,
                  },
                });
              }
            }}
            value={order?.delivery?.city}
            options={{
              types: ["(cities)"],
              componentRestrictions: { country: "bg" },
            }}
            className="mt-2 text-xl p-2 px-4 rounded-lg border border-stone-300 w-full placeholder:text-white"
          />
        </div>
        <div className="flex justify-end mb-2">
          <button
            onClick={async () => {
              setIsCityClicked(false);
              await submitPersonalInfo({
                errors,
                setErrors,
                fields: [
                  {
                    name: "city",
                    value: order?.delivery?.city,
                    parent: "deliveryAddress",
                  },
                ],
              });
            }}
            className="py-2 px-8 bg-rose-700 text-white rounded-full font-sans"
          >
            Приложи
          </button>
        </div>
        <p className="text-sm">
          Изборът на град ще ви помогне да получите актуална информация за
          наличността на стоките, техните цени и методите на доставка във вашия
          град! Това ще ви помогне да спестите повече свободно време!
        </p>
      </div>
    </div>
  );
};

export default memo(Popover);
