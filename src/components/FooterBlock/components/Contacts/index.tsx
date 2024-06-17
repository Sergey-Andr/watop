import { memo, ReactElement } from "react";

const Contacts = (): ReactElement => {
  return (
    <ul>
      <li
        aria-label="Phone number"
        className="mb-4 text-lg mr-4 font-medium text-black/80"
      >
        +(380)-00-000-00-00
      </li>
      <li aria-label="Email" className="text-lg mr-4 font-medium text-black/80">
        sweet@cake.ua
      </li>
    </ul>
  );
};

export default memo(Contacts);
