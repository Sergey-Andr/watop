"use client";
import { memo, ReactElement, useEffect, useState } from "react";
import { getEmail } from "@/features/getEmail";
import EditView from "@/app/profile/components/settings/components/Contacts/components/EditView";
import StaticView from "@/app/profile/components/settings/components/Contacts/components/StaticView/intex";
import { fetchAllPersonalData } from "@/app/utils/profile/get/apihAllPersonalData";
import { TErrors } from "@/app/profile/components/settings/components/PersonalInfo";
import { formatPhoneNumber } from "@/features/formatPhoneNumber";
import { submitPersonalInfo } from "@/features/submitPersonalInfo";

const Contacts = (): ReactElement => {
  const [isEdit, setIsEdit] = useState(false);
  const [email, setEmail] = useState(getEmail() ?? "");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
  const [errors, setErrors] = useState<TErrors>([]);

  useEffect(() => {
    (async () => {
      const { status, data } = await fetchAllPersonalData(getEmail());
      if (status === 200 && data) {
        setEmail(data.recipientEmail);
        setPhone(data.phone);
        setTelegram(data.telegram);
      }
    })();
  }, []);

  return (
    <section className="w-full text-xl">
      <div className="flex mb-8">
        {email?.length === 0 || !email ? (
          <>
            {isEdit ? (
              <EditView
                email={email}
                phone={phone}
                telegram={telegram}
                errors={errors}
                setEmail={setEmail}
                setPhone={setPhone}
                setTelegram={setTelegram}
              />
            ) : (
              <></>
            )}
          </>
        ) : (
          <>
            {isEdit ? (
              <EditView
                email={email}
                phone={phone}
                telegram={telegram}
                errors={errors}
                setEmail={setEmail}
                setPhone={setPhone}
                setTelegram={setTelegram}
              />
            ) : (
              <StaticView email={email} phone={phone} telegram={telegram} />
            )}
          </>
        )}
      </div>
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
                { name: "recipientEmail", value: email },
                { name: "phone", value: phoneNumber },
                { name: "telegram", value: telegram },
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
          className={`py-2 px-10 ${isEdit ? "text-lg hover:underline" : "bg-rose-700 text-white"} text-base rounded-full`}
        >
          {isEdit ? "Cancel" : "Edit"}
        </button>
      </div>
    </section>
  );
};

export default memo(Contacts);
