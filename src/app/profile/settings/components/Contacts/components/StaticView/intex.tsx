import { FC, memo, ReactElement } from "react";

interface IStaticView {
  email: string;
  phone: string;
  telegram: string;
}

const StaticView: FC<IStaticView> = ({
  email,
  phone,
  telegram,
}): ReactElement => {
  return (
    <>
      <h3 className="mr-16 flex flex-col">
        <sub className="mb-4 text-black/60">Имайл</sub>
        {email}
      </h3>
      <h3 className="mr-16 flex flex-col font-sans">
        <sub className="mb-4 text-black/60 font-playfair">Телефонен номер</sub>
        +359 {phone}
      </h3>
      <h3 className="mr-16 flex flex-col">
        <sub className="mb-4 text-black/60">Телеграм</sub>
        {telegram}
      </h3>
    </>
  );
};

export default memo(StaticView);
