import React, { memo, ReactElement } from "react";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import {
  useSelectCheckout,
  useSetCheckoutActions,
} from "@/app/checkout/store/useCheckoutStore";

const AddressInputs = (): ReactElement => {
  const order = useSelectCheckout();
  const { setOrder } = useSetCheckoutActions();

  return (
    <div className="flex my-4 border-b pb-4 border-gray-300">
      <div className="flex flex-col w-1/2 mr-8">
        <label className="text-gray-600">Улица</label>
        <ReactGoogleAutocomplete
          libraries={["places"]}
          apiKey={process.env.NEXT_GOOGLE_KEY}
          onPlaceSelected={(places) => {
            if (places.formatted_address) {
              setOrder(places.formatted_address.split(",")[0], "delivery");
            }
          }}
          options={{
            types: ["address"],
            componentRestrictions: {
              country: "bg",
            },
          }}
          defaultValue={order?.delivery?.street}
          className="text-xl p-2 px-4 rounded-full border border-stone-300 placeholder:text-white"
        />
      </div>
      <div className="flex flex-col w-1/4 mr-4">
        <label className="text-gray-600">Къща</label>
        <input
          type="text"
          value={order?.delivery?.house ?? ""}
          onChange={(e) => {
            setOrder({
              delivery: {
                ...order?.delivery,
                house: e.target.value,
              },
            });
          }}
          maxLength={3}
          className="text-xl p-2 px-4 rounded-full border border-stone-300"
        />
      </div>
      <div className="flex flex-col w-1/4">
        <label className="text-gray-600">Етаж</label>
        <input
          type="text"
          value={order?.delivery?.floor ?? ""}
          onChange={(e) => {
            setOrder({
              delivery: {
                ...order?.delivery,
                floor: e.target.value,
              },
            });
          }}
          maxLength={2}
          className="text-xl p-2 px-4 rounded-full border border-stone-300"
        />
      </div>
    </div>
  );
};

export default memo(AddressInputs);
