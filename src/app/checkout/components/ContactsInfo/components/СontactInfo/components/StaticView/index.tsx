import { Dispatch, FC, memo, ReactElement, SetStateAction } from "react";
import { GoPerson } from "react-icons/go";
import { useSelectCheckout } from "@/app/checkout/store/useCheckoutStore";

interface IStaticView {
  setIsInfoClicked: Dispatch<SetStateAction<boolean>>;
}

const StaticView: FC<IStaticView> = ({ setIsInfoClicked }): ReactElement => {
  const order = useSelectCheckout();
  return (
    <>
      <div className="flex items-center align-text-top">
        <GoPerson className="w-7 h-7 mr-4" />
        <h4 className="text-lg flex flex-col">
          {order?.firstName} {order?.secondName}
          <sub className="font-sans leading-4 text-gray-600">
            <span>+359 {order?.phone}</span>{" "}
            <span>{order?.recipientEmail}</span>
          </sub>
        </h4>
      </div>
      <button
        onClick={() => {
          setIsInfoClicked(true);
        }}
        className="hover:text-rose-600 duration-300 hover:underline"
      >
        Промяна
      </button>
    </>
  );
};

export default memo(StaticView);
