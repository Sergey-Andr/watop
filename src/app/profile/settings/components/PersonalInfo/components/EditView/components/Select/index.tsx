import { Dispatch, memo, ReactElement, SetStateAction, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

interface ISelect {
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
  errors: string[];
}

const Select = ({ gender, setGender, errors }: ISelect): ReactElement => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  return (
    <div className="w-full h-fit relative">
      <button
        onClick={() => {
          setIsOpenSelect(!isOpenSelect);
        }}
        className={`w-full text-left mt-2 text-xl py-2 px-4 rounded-full border ${errors.includes("gender") ? "border-rose-600" : "border-stone-300"} cursor-pointer appearance-none`}
      >
        {gender.charAt(0).toUpperCase() + gender.slice(1)}
      </button>
      <ul
        aria-label="choose your gender"
        className={`w-full mt-2 text-xl absolute z-50 rounded-xl border border-stone-300 cursor-pointer appearance-none ${isOpenSelect ? "block" : "hidden"}`}
      >
        <li
          onClick={(e: any) => {
            setGender(e.target.dataset.option);
            setIsOpenSelect(false);
          }}
          data-option="Мъжки"
          className="cursor-pointer hover:bg-black hover:text-white rounded-t-xl p-2 px-4"
        >
          Мъжки
        </li>
        <li
          onClick={(e: any) => {
            setGender(e.target.dataset.option);
            setIsOpenSelect(false);
          }}
          data-option="Женски"
          className="cursor-pointer hover:bg-black hover:text-white p-2 px-4"
        >
          Женски
        </li>
        <li
          onClick={(e: any) => {
            setGender(e.target.dataset.option);
            setIsOpenSelect(false);
          }}
          data-option="Не посочвайте"
          className="cursor-pointer hover:bg-black hover:text-white rounded-b-xl p-2 px-4"
        >
          Не посочвайте
        </li>
      </ul>
      <FaAngleDown
        className={`absolute w-3 h-3 right-4 top-1/2 ${isOpenSelect ? "rotate-180" : ""} duration-300`}
      />
    </div>
  );
};

export default memo(Select);
