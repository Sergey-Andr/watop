import { FC, ReactElement } from "react";

interface ICity {
  name: string;
  city?: string;
}

const City: FC<ICity> = ({ name, city }): ReactElement => {
  return (
    <li
      data-value={name}
      className={`cursor-pointer hover:text-rose-600 text-center ${city === name ? "outline outline-1 outline-rose-600 rounded-lg" : ""}`}
    >
      {name}
    </li>
  );
};

export default City;
