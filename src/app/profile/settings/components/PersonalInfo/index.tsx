"use client";
import { memo, ReactElement, useEffect, useState } from "react";
import { getEmail } from "@/features/getEmail";
import { fetchAllPersonalData } from "@/app/utils/profile/get/apihAllPersonalData";
import StaticView from "src/app/profile/settings/components/PersonalInfo/components/StaticView";
import EditView from "@/app/profile/settings/components/PersonalInfo/components/EditView";
import { submitPersonalInfo } from "@/features/submitPersonalInfo";

export type TErrors = (
  | "firstName"
  | "secondName"
  | "gender"
  | "birthDate"
  | "fullName"
  | "phone"
  | "city"
  | "street"
  | "house"
  | "floor"
  | "email"
  | "recipientEmail"
  | "telegram"
  | "cardNumber"
  | "expirationDate"
  | "cvv"
)[];

const PersonalInfo = (): ReactElement => {
  const [isEdit, setIsEdit] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [gender, setGender] = useState("Не посочвайте");
  const [birthDate, setBirthDate] = useState<Date | undefined>();
  const [errors, setErrors] = useState<TErrors>([]);

  useEffect(() => {
    (async () => {
      const { status, data } = await fetchAllPersonalData(getEmail());
      if (status === 200 && data) {
        setFirstName(data.firstName);
        setSecondName(data.secondName);
        setGender(data.gender);
        setBirthDate(data.birthDate);
      }
    })();
  }, []);

  return (
    <section>
      {firstName.length === 0 ? (
        <>
          {isEdit ? (
            <EditView
              firstName={firstName}
              secondName={secondName}
              birthDate={birthDate}
              gender={gender}
              errors={errors}
              setFirstName={setFirstName}
              setSecondName={setSecondName}
              setBirthDate={setBirthDate}
              setGender={setGender}
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          {isEdit ? (
            <EditView
              firstName={firstName}
              secondName={secondName}
              birthDate={birthDate}
              gender={gender}
              errors={errors}
              setFirstName={setFirstName}
              setSecondName={setSecondName}
              setBirthDate={setBirthDate}
              setGender={setGender}
            />
          ) : (
            <StaticView
              gender={gender}
              secondName={secondName}
              firstName={firstName}
              birthDate={birthDate}
            />
          )}
        </>
      )}
      <div className="flex">
        <button
          onClick={(e) => {
            e.preventDefault();

            submitPersonalInfo({
              errors,
              setErrors,
              fields: [
                { name: "firstName", value: firstName },
                { name: "secondName", value: secondName },
                { name: "birthDate", value: birthDate },
                { name: "gender", value: gender },
              ],
            });
            setIsEdit(false);
          }}
          className={`py-2 px-10 ${isEdit ? "block" : "hidden"} bg-rose-700 text-white text-base rounded-full`}
        >
          Запази
        </button>
        <button
          onClick={() => {
            setIsEdit(!isEdit);
          }}
          className={`py-2 px-10 ${isEdit ? "text-lg hover:underline" : "bg-rose-700 text-white"} rounded-full`}
        >
          {isEdit ? "Отмени" : "Редактирай"}
        </button>
      </div>
    </section>
  );
};

export default memo(PersonalInfo);
