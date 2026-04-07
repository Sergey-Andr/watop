import { Dispatch, memo, ReactElement, SetStateAction } from "react";
import BirthDate from "@/app/profile/settings/components/PersonalInfo/components/EditView/components/BirthDate";
import Select from "@/app/profile/settings/components/PersonalInfo/components/EditView/components/Select";
import { TErrors } from "@/app/profile/settings/components/PersonalInfo";

interface IEditView {
  firstName: string;
  secondName: string;
  birthDate: Date | undefined;
  gender: string;
  errors: TErrors;
  setFirstName: Dispatch<SetStateAction<string>>;
  setSecondName: Dispatch<SetStateAction<string>>;
  setBirthDate: Dispatch<SetStateAction<Date | undefined>>;
  setGender: Dispatch<SetStateAction<string>>;
}

const EditView = ({
  firstName,
  secondName,
  birthDate,
  gender,
  errors,
  setFirstName,
  setSecondName,
  setBirthDate,
  setGender,
}: IEditView): ReactElement => {
  return (
    <ul className="grid grid-cols-2 mb-8">
      <li className="max-w-96 w-full mb-8">
        <input
          type="text"
          aria-label="введіть своє ім'я"
          className={`mt-2 text-xl p-2 px-4 rounded-full border max-w-96 w-full ${errors.includes("firstName") ? "border-rose-600" : "border-stone-300"}`}
          value={firstName}
          placeholder="Ім'я"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </li>
      <li className="max-w-96 w-full mb-8">
        <BirthDate
          birthDate={birthDate}
          setBirthDate={setBirthDate}
          errors={errors}
        />
      </li>
      <li className="max-w-96 w-full ">
        <input
          type="text"
          aria-label="введіть своє прізвище"
          className={`mt-2 text-xl p-2 px-4 rounded-full border max-w-96 w-full ${errors.includes("secondName") ? "border-rose-600" : "border-stone-300"}`}
          value={secondName}
          placeholder="Прізвище"
          onChange={(e) => {
            setSecondName(e.target.value);
          }}
        />
      </li>
      <li className="max-w-96 w-full">
        <Select gender={gender} setGender={setGender} errors={errors} />
      </li>
    </ul>
  );
};

export default memo(EditView);
