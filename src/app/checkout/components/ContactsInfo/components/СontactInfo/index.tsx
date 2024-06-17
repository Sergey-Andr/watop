import { memo, ReactElement, useEffect, useState } from "react";
import EditView from "src/app/checkout/components/ContactsInfo/components/ContactsInfo/components/EditView";
import StaticView from "src/app/checkout/components/ContactsInfo/components/ContactsInfo/components/StaticView";
import {
  IOrder,
  useSetCheckoutActions,
} from "@/app/checkout/store/useCheckoutStore";
import { fetchAllPersonalData } from "@/app/utils/profile/get/apihAllPersonalData";
import { getEmail } from "@/features/getEmail";

const ContactsInfo = (): ReactElement => {
  const { setOrder } = useSetCheckoutActions();

  const [isInfoClicked, setIsInfoClicked] = useState(false);
  const [isContactsFetched, setIsContactsFetched] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await fetchAllPersonalData(getEmail());
      if (data) {
        const temp: IOrder = {
          firstName: data.firstName,
          secondName: data.secondName,
          phone: data.phone,
          recipientEmail: data.recipientEmail,
        };

        setOrder(temp);

        setIsContactsFetched(data.firstName.length === 0);
      }
    })();
  }, []);

  return (
    <div
      onClick={() => {
        setIsInfoClicked(!isInfoClicked);
      }}
      className={`flex items-center justify-between border rounded-xl p-4 mb-4 cursor-pointer align-text-top ${isInfoClicked || isContactsFetched ? "h-60 border-rose-600" : "h-16"} overflow-hidden transition-all duration-300`}
    >
      {isInfoClicked || isContactsFetched ? (
        <EditView setIsInfoClicked={setIsInfoClicked} />
      ) : (
        <StaticView setIsInfoClicked={setIsInfoClicked} />
      )}
    </div>
  );
};

export default memo(ContactsInfo);
