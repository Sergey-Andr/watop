import { FC, memo, ReactElement } from "react";

interface IStaticView {
  fullName: string;
  phone: string;
}

const StaticView: FC<IStaticView> = ({ fullName, phone }): ReactElement => {
  return (
    <div className="flex">
      <h3 className="text-xl flex flex-col justify-center font-sans mb-8 mr-8">
        <sub className="mb-4 text-black/60">Пълно име</sub>
        {fullName}
      </h3>
      <h3 className="text-xl flex flex-col justify-center font-sans mb-8">
        <sub className="mb-4 text-black/60 font-playfair">Телефонен номер</sub>
        +359 {phone}
      </h3>
    </div>
  );
};

export default memo(StaticView);
