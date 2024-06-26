import { memo, ReactElement, useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Popover from "@/app/checkout/components/ContactsInfo/components/CityInfo/components/Popover";
import {
  IOrder,
  useSelectCheckout,
  useSetCheckoutActions,
} from "@/app/checkout/store/useCheckoutStore";
import { fetchAllPersonalData } from "@/app/utils/profile/get/apihAllPersonalData";
import { getEmail } from "@/features/getEmail";

const CityInfo = (): ReactElement => {
  const order = useSelectCheckout();
  const { setOrder } = useSetCheckoutActions();

  const [isCityClicked, setIsCityClicked] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await fetchAllPersonalData(getEmail());
      if (data) {
        const temp: IOrder = {
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
    <>
      <div
        onClick={() => {
          setIsCityClicked(!isCityClicked);
        }}
        className={`flex items-center justify-between border rounded-xl p-4 cursor-pointer ${isCityClicked || order?.delivery?.city?.length === 0 ? "border-rose-600" : ""}`}
      >
        <div className="flex items-center">
          <HiOutlineLocationMarker className="w-7 h-7 mr-4" />
          <h4
            className={`text-lg ${order?.delivery?.city ? "" : "text-rose-600"}`}
          >
            {order?.delivery?.city ?? "Въведете вашия град"}
          </h4>
        </div>
        <button
          onClick={() => {
            setIsCityClicked(!isCityClicked);
          }}
          className="hover:text-rose-600 duration-300 hover:underline"
        >
          Промяна
        </button>
      </div>
      {isCityClicked ? (
        <Popover
          isCityClicked={isCityClicked}
          setIsCityClicked={setIsCityClicked}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(CityInfo);
