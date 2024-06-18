import { memo, ReactElement, useEffect, useState } from "react";
import EditView from "@/app/checkout/components/ContactsInfo/components/СontactInfo/components/EditView";
import StaticView from "@/app/checkout/components/ContactsInfo/components/СontactInfo/components/StaticView";
import {
  IOrder,
  useSetCheckoutActions,
} from "@/app/checkout/store/useCheckoutStore";
import { fetchAllPersonalData } from "@/app/utils/profile/get/apihAllPersonalData";
import { getEmail } from "@/features/getEmail";

const ContactsInfo = (): ReactElement => {
  const { setOrder } = useSetCheckoutActions();

  const [isInfoClicked, setIsInfoClicked] = useState(false);

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
      }
    })();
  }, []);

  return (
    <div
      onClick={() => {
        setIsInfoClicked(!isInfoClicked);
      }}
      className={`flex items-center justify-between border rounded-xl p-4 mb-4 cursor-pointer align-text-top ${isInfoClicked ? "h-60 border-rose-600" : "h-16"} overflow-hidden transition-all duration-300`}
    >
      {isInfoClicked ? (
        <EditView setIsInfoClicked={setIsInfoClicked} />
      ) : (
        <StaticView setIsInfoClicked={setIsInfoClicked} />
      )}
    </div>
  );
};

export default memo(ContactsInfo);
