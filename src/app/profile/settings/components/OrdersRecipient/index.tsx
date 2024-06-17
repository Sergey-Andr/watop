"use client";
import { useEffect, useState } from "react";
import { fetchAllPersonalData } from "@/app/utils/profile/get/apihAllPersonalData";
import { getEmail } from "@/features/getEmail";
import { TErrors } from "@/app/profile/components/settings/components/PersonalInfo";
import EditView from "@/app/profile/components/settings/components/OrdersRecipient/components/EditView";
import StaticView from "@/app/profile/components/settings/components/OrdersRecipient/components/StaticView";
import { formatPhoneNumber } from "@/features/formatPhoneNumber";
import { submitPersonalInfo } from "@/features/submitPersonalInfo";

const OrdersRecipient = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<TErrors>([]);

  useEffect(() => {
    (async () => {
      const { status, data } = await fetchAllPersonalData(getEmail());
      if (status === 200 && data) {
        setFullName(data.firstName + " " + data.secondName);
        setPhone(data.phone);
      }
    })();
  }, []);

  return (
    <section>
      {fullName.length === 0 ? (
        <>
          {isEdit ? (
            <EditView
              fullName={fullName}
              phone={phone}
              errors={errors}
              setPhone={setPhone}
              setFullName={setFullName}
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          {isEdit ? (
            <EditView
              fullName={fullName}
              phone={phone}
              errors={errors}
              setPhone={setPhone}
              setFullName={setFullName}
            />
          ) : (
            <StaticView fullName={fullName} phone={phone} />
          )}
        </>
      )}
      <div className="flex">
        <button
          onClick={(e) => {
            e.preventDefault();

            const phoneNumber =
              formatPhoneNumber(`+359${phone}`)?.slice(5) ?? "error";

            submitPersonalInfo({
              errors,
              setErrors,
              fields: [
                {
                  name: "firstName",
                  value: fullName.split(" ")[0],
                },
                {
                  name: "secondName",
                  value: fullName.split(" ")[1],
                },
                { name: "phone", value: phoneNumber },
              ],
            });
            setIsEdit(false);
          }}
          className={`py-2 px-10 ${isEdit ? "block" : "hidden"} bg-rose-700 text-white text-base rounded-full`}
        >
          Save
        </button>
        <button
          onClick={() => {
            setIsEdit(!isEdit);
          }}
          className={`py-2 px-10 ${isEdit ? "text-lg hover:underline" : "bg-rose-700 text-white"} rounded-full`}
        >
          {isEdit ? "Cancel" : "Edit"}
        </button>
      </div>
    </section>
  );
};

export default OrdersRecipient;
