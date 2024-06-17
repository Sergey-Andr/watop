import { Dispatch, memo, ReactElement, SetStateAction, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import moment from "moment";
import "./style.css";
import { IoCalendarOutline } from "react-icons/io5";

interface IBirthDate {
  birthDate: Date | undefined;
  setBirthDate: Dispatch<SetStateAction<Date | undefined>>;
  errors: string[];
}

const BirthDate = ({
  birthDate,
  setBirthDate,
  errors,
}: IBirthDate): ReactElement => {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const currentYear = +moment().format("YYYY");
  const date = moment(birthDate).format("YY.MM.DD");
  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsOpenCalendar(!isOpenCalendar);
        }}
        className={`w-full text-left mt-2 text-xl font-sans py-2 px-4 rounded-full border ${errors.includes("birthDate") ? "border-rose-600" : "border-stone-300"} cursor-pointer appearance-none`}
      >
        {birthDate ? (
          date
        ) : (
          <sub className="text-zinc-500 relative top-0 font-playfair">
            Дата на раждане
          </sub>
        )}
      </button>
      <Calendar
        captionLayout="dropdown-buttons"
        fromYear={1980}
        toYear={currentYear}
        mode="single"
        toMonth={new Date()}
        toDate={new Date()}
        selected={birthDate ?? new Date()}
        onSelect={setBirthDate}
        className={`rounded-md border absolute z-50 bg-white ${isOpenCalendar ? "block" : "hidden"}`}
      />
      <IoCalendarOutline className="absolute right-4 top-[40%] w-5 h-5" />
    </div>
  );
};

export default memo(BirthDate);
