import { FC, memo, ReactElement } from "react";

interface IStaticView {
  city: string;
  street: string;
  house: string;
  floor: string;
}

const StaticView: FC<IStaticView> = ({
  city,
  street,
  house,
  floor,
}): ReactElement => {
  return (
    <div className="flex mb-8">
      <h3 className="text-xl flex flex-col justify-center font-sans mr-8">
        <sub className="mb-4 text-black/60">Город</sub>
        {city}
      </h3>
      <h3 className="text-xl flex flex-col justify-center font-sans mr-8">
        <sub className="mb-4 text-black/60">Улица</sub>
        {street}
      </h3>
      <h3 className="text-xl flex flex-col justify-center font-sans mr-8">
        <sub className="mb-4 text-black/60">Дом</sub>
        {house}
      </h3>
      <h3 className="text-xl flex flex-col justify-center font-sans">
        <sub className="mb-4 text-black/60">Етаж</sub>
        {floor}
      </h3>
    </div>
  );
};

export default memo(StaticView);
