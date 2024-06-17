import { Dispatch, FC, memo, ReactElement, SetStateAction } from "react";
import { TErrors } from "@/app/profile/settings/components/PersonalInfo";

interface IEditView {
  email: string;
  phone: string;
  telegram: string;
  errors: TErrors;
  setEmail: Dispatch<SetStateAction<string>>;
  setPhone: Dispatch<SetStateAction<string>>;
  setTelegram: Dispatch<SetStateAction<string>>;
}

const EditView: FC<IEditView> = ({
  email,
  phone,
  telegram,
  errors,
  setEmail,
  setPhone,
  setTelegram,
}): ReactElement => {
  return (
    <>
      <input
        className={`mr-8 text-xl p-2 px-4 rounded-full border font-sans ${errors.includes("email") ? "border-rose-600" : "border-stone-300"} max-w-96`}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        placeholder="Имайл"
        type="email"
      />
      <div className="relative inline">
        <label className="text-lg absolute font-sans text-black/60 left-4 top-2.5">
          +359
        </label>
        <input
          className={`text-xl mr-8 p-2 px-4 pl-16 rounded-full border font-sans ${errors.includes("phone") ? "border-rose-600" : "border-stone-300"} max-w-96`}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          value={phone}
          placeholder="Телефонен номер"
          type="tel"
          maxLength={10}
        />
      </div>
      <input
        className={`mr-8 text-xl p-2 px-4 rounded-full border font-sans ${errors.includes("telegram") ? "border-rose-600" : "border-stone-300"} max-w-96`}
        onChange={(e) => {
          setTelegram(e.target.value);
        }}
        value={telegram}
        placeholder="Телеграм"
        type="text"
      />
    </>
  );
};

export default memo(EditView);
