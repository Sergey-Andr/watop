import React, { Dispatch, FC, memo, ReactElement, SetStateAction } from "react";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import { TErrors } from "@/app/profile/settings/components/PersonalInfo";
import PlaceResult = google.maps.places.PlaceResult;

interface IEditView {
  city: string;
  street: string;
  house: string;
  floor: string;
  errors: TErrors;
  setHouse: Dispatch<SetStateAction<string>>;
  setFloor: Dispatch<SetStateAction<string>>;
  setCity: Dispatch<SetStateAction<string>>;
  setStreet: Dispatch<SetStateAction<string>>;
}

const EditView: FC<IEditView> = ({
  city,
  street,
  house,
  floor,
  errors,
  setHouse,
  setFloor,
  setCity,
  setStreet,
}): ReactElement => {
  const handleChangeInput = (
    places: PlaceResult,
    callback: Dispatch<SetStateAction<string>>,
  ) => {
    if (places.formatted_address) {
      const str = `${places.formatted_address.split(",")[0]},`;
      const str2 = places.formatted_address.split(",")[1];
      callback(str + str2);
    }
  };

  return (
    <div className="flex justify-between mb-8">
      <ReactGoogleAutocomplete
        libraries={["places"]}
        apiKey={process.env.NEXT_GOOGLE_KEY}
        onPlaceSelected={(places) => {
          handleChangeInput(places, setCity);
        }}
        options={{
          types: ["(cities)"],
          componentRestrictions: { country: "bg" },
        }}
        defaultValue={city}
        placeholder="Город"
        className={`text-xl p-2 px-4 rounded-full border ${errors.includes("city") ? "border-rose-600" : "border-stone-300"} max-w-96`}
      />
      <ReactGoogleAutocomplete
        libraries={["places"]}
        apiKey={process.env.NEXT_GOOGLE_KEY}
        onPlaceSelected={(places) => {
          handleChangeInput(places, setStreet);
        }}
        options={{
          types: ["address"],
          componentRestrictions: {
            country: "bg",
          },
        }}
        defaultValue={street}
        placeholder="Улица"
        className={`text-xl p-2 px-4 rounded-full border ${errors.includes("street") ? "border-rose-600" : "border-stone-300"} max-w-96`}
      />
      <input
        onChange={(e) => {
          setHouse(e.target.value);
        }}
        value={house}
        placeholder="Дом"
        type="text"
        maxLength={3}
        className={`text-xl p-2 px-4 rounded-full border ${errors.includes("house") ? "border-rose-600" : "border-stone-300"} max-w-96`}
      />
      <input
        onChange={(e) => {
          setFloor(e.target.value);
        }}
        value={floor}
        placeholder="Етаж"
        type="text"
        maxLength={2}
        className={`text-xl p-2 px-4 rounded-full border ${errors.includes("floor") ? "border-rose-600" : "border-stone-300"} max-w-96`}
      />
    </div>
  );
};

export default memo(EditView);
