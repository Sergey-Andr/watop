import { Dispatch, FC, memo, ReactElement, SetStateAction } from "react";
import { TErrors } from "@/app/profile/settings/components/PersonalInfo";

interface IEditView {
  fullName: string;
  phone: string;
  errors: TErrors;
  setFullName: Dispatch<SetStateAction<string>>;
  setPhone: Dispatch<SetStateAction<string>>;
}

const EditView: FC<IEditView> = ({
  fullName,
  phone,
  errors,
  setFullName,
  setPhone,
}): ReactElement => {
  return (
    <>
      <input
        className={`mb-8 mr-8 text-xl p-2 px-4 rounded-full border ${errors.includes("fullName") ? "border-rose-600" : "border-stone-300"} max-w-96`}
        onChange={(e) => {
          setFullName(e.target.value);
        }}
        value={fullName}
        placeholder="Пълно име"
        type="text"
      />
      <div className="relative inline">
        <label className="text-lg absolute font-sans text-black/60 left-4 -top-1.5">
          +359
        </label>
        <input
          className={`mt-2 text-xl p-2 px-4 pl-16 rounded-full border font-sans ${errors.includes("phone") ? "border-rose-600" : "border-stone-300"} max-w-96`}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          value={phone}
          placeholder="Телефонен номер"
          type="tel"
          maxLength={10}
        />
      </div>
    </>
  );
};

export default memo(EditView);
