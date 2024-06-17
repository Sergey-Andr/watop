import { FC, memo, ReactElement } from "react";
import { formatCardNumber } from "@/features/formatCardNumber";

interface IStaticView {
  cardNumber: string;
}

const StaticView: FC<IStaticView> = ({ cardNumber }): ReactElement => {
  return (
    <h3 className="flex flex-col text-xl mb-8 font-sans">
      <sub className="mb-4 text-black/60 font-playfair">Карта</sub>
      {formatCardNumber(cardNumber)}
    </h3>
  );
};

export default memo(StaticView);
