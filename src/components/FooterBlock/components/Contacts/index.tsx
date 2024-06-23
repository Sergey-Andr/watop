import { memo, ReactElement } from "react";

const Contacts = (): ReactElement => {
  return (
    <ul>
      <li
        aria-label="Телефонен номер"
        className="mb-4 text-lg mr-4 font-medium text-black/80"
      >
        +(359)-00-000-00-00
      </li>
      <li aria-label="Емайл" className="text-lg mr-4 font-medium text-black/80">
        sweet@cake.com
      </li>
    </ul>
  );
};

export default memo(Contacts);
