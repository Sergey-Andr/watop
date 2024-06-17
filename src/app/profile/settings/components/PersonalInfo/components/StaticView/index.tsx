import { FC, memo, ReactElement } from "react";
import moment from "moment/moment";

interface IStaticView {
  firstName: string;
  secondName: string;
  birthDate: Date | undefined;
  gender: string;
}

const StaticView: FC<IStaticView> = ({
  firstName,
  secondName,
  birthDate,
  gender,
}): ReactElement => {
  const date = moment(birthDate).format("YY.MM.DD");
  return (
    <ul className="grid grid-cols-2 font-sans mb-8">
      <li className="max-w-96 w-full mb-8">
        <h4 className="flex flex-col">
          Име
          <sub className="text-xl">{firstName}</sub>
        </h4>
      </li>
      <li className="max-w-96 w-full mb-8">
        <h4 className="flex flex-col">
          Дата на раждане
          <sub className="text-xl">{birthDate ? date : ""}</sub>
        </h4>
      </li>
      <li className="max-w-96 w-full ">
        <h4 className="flex flex-col">
          Фамилия
          <sub className="text-xl">{secondName}</sub>
        </h4>
      </li>
      <li className="max-w-96 w-full">
        <h4 className="flex flex-col">
          Пол
          <sub className="text-xl">{gender}</sub>
        </h4>
      </li>
    </ul>
  );
};

export default memo(StaticView);
