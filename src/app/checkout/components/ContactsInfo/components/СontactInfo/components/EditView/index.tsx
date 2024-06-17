import {
  Dispatch,
  FC,
  memo,
  ReactElement,
  SetStateAction,
  useState,
} from "react";
import { TErrors } from "@/app/profile/settings/components/PersonalInfo";
import { submitPersonalInfo } from "@/features/submitPersonalInfo";
import {
  selectCheckout,
  useSetCheckoutActions,
} from "@/app/checkout/store/useCheckoutStore";

interface IEditView {
  setIsInfoClicked: Dispatch<SetStateAction<boolean>>;
}

const EditView: FC<IEditView> = ({ setIsInfoClicked }): ReactElement => {
  const [errors, setErrors] = useState<TErrors>([]);
  const order = selectCheckout();
  const { setOrder } = useSetCheckoutActions();
  return (
    <div
      className="flex flex-col items-start w-full cursor-default"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="grid grid-cols-2 gap-4 mb-8 w-full">
        <input
          type="text"
          placeholder="Име"
          onChange={(e) => {
            setOrder({ ...order, firstName: e.target.value });
          }}
          value={order?.firstName}
          className={`mt-2 text-xl p-2 px-4 rounded-full border border-stone-300 w-full ${errors.includes("firstName") ? "border-rose-600" : "border-stone-300"}`}
        />
        <input
          type="text"
          placeholder="Фимилия"
          onChange={(e) => {
            setOrder({ ...order, secondName: e.target.value });
          }}
          value={order?.secondName}
          className={`mt-2 text-xl p-2 px-4 rounded-full border border-stone-300 w-full ${errors.includes("secondName") ? "border-rose-600" : "border-stone-300"}`}
        />
        <div className="relative inline w-full">
          <label className="text-lg absolute font-sans text-black/60 left-4 top-2.5">
            +359
          </label>
          <input
            className={`text-xl p-2 px-4 pl-16 rounded-full border font-sans w-full ${errors.includes("phone") ? "border-rose-600" : "border-stone-300"}`}
            onChange={(e) => {
              setOrder({ ...order, phone: e.target.value });
            }}
            value={order?.phone}
            placeholder="Телефонен номер"
            type="tel"
            maxLength={10}
          />
        </div>
        <input
          type="email"
          placeholder="Електронна поща"
          onChange={(e) => {
            setOrder({ ...order, recipientEmail: e.target.value });
          }}
          value={order?.recipientEmail}
          className={`mt-2 text-xl p-2 px-4 rounded-full border border-stone-300 w-full ${errors.includes("recipientEmail") ? "border-rose-600" : "border-stone-300"}`}
        />
      </div>
      <button
        onClick={async () => {
          setIsInfoClicked(false);
          await submitPersonalInfo({
            errors,
            setErrors,
            fields: [
              { name: "firstName", value: order?.firstName },
              { name: "secondName", value: order?.secondName },
              { name: "phone", value: order?.phone },
              { name: "recipientEmail", value: order?.recipientEmail },
            ],
          });
        }}
        className={`py-2 px-8 bg-rose-700 text-white rounded-full font-sans`}
      >
        Запази
      </button>
    </div>
  );
};

export default memo(EditView);
