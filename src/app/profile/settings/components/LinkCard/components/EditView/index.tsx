import React, { Dispatch, FC, memo, ReactElement, SetStateAction } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { TErrors } from "@/app/profile/settings/components/PersonalInfo";

interface ICard {
  cardNumber: string;
  expirationYear: string;
  expirationMonth: string;
  cvv: string;
  errors: TErrors;
  setCardNumber: Dispatch<SetStateAction<string>>;
  setExpirationYear: Dispatch<SetStateAction<string>>;
  setExpirationMonth: Dispatch<SetStateAction<string>>;
  setCvv: Dispatch<SetStateAction<string>>;
}

const EditView: FC<ICard> = ({
  cardNumber,
  expirationYear,
  expirationMonth,
  cvv,
  errors,
  setCardNumber,
  setExpirationYear,
  setExpirationMonth,
  setCvv,
}): ReactElement => {
  const handleInputChange = (
    e: any,
    callback: Dispatch<SetStateAction<string>>,
    nextId: "expirationMonth" | "cvv" | "_",
    prevId: "expirationYear" | "expirationMonth" | "_",
  ) => {
    let value = e.target.value;

    if (
      e.key === "Backspace" ||
      (e.nativeEvent.inputType === "deleteContentBackward" &&
        value.length === 0)
    ) {
      document.getElementById(prevId)?.focus();
      callback(value);
    }

    if (nextId === "expirationMonth" && value !== "1") {
      value = +e.target.value <= 9 ? `0${e.target.value}` : e.target.value;
      if (value === "0" || value === "00" || value === "000") {
        value = "";
      }
    }

    callback(value);

    if (value.length >= 2) {
      document.getElementById(nextId)?.focus();
    }
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <InputOTP
        maxLength={16}
        onInput={(e: any) => {
          setCardNumber(e.target.value);
        }}
        value={cardNumber}
      >
        <InputOTPGroup
          className={`${errors.includes("cardNumber") ? "border-rose-600" : ""}`}
        >
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup
          className={`${errors.includes("cardNumber") ? "border-rose-600" : ""}`}
        >
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
          <InputOTPSlot index={6} />
          <InputOTPSlot index={7} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup
          className={`${errors.includes("cardNumber") ? "border-rose-600" : ""}`}
        >
          <InputOTPSlot index={8} />
          <InputOTPSlot index={9} />
          <InputOTPSlot index={10} />
          <InputOTPSlot index={11} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup
          className={`${errors.includes("cardNumber") ? "border-rose-600" : ""}`}
        >
          <InputOTPSlot index={12} />
          <InputOTPSlot index={13} />
          <InputOTPSlot index={14} />
          <InputOTPSlot index={15} />
        </InputOTPGroup>
      </InputOTP>
      <div className="flex my-8">
        <div
          className={`flex mr-12 font-sans border w-fit rounded-lg ${errors.includes("expirationDate") ? "border-rose-600" : ""}`}
        >
          <input
            id="expirationYear"
            type="text"
            className="p-1 rounded-lg border border-stone-300 w-12 h-9 text-center text-base border-none focus-visible:outline-0"
            maxLength={2}
            onChange={(e) =>
              handleInputChange(e, setExpirationYear, "expirationMonth", "_")
            }
            value={expirationYear}
            autoComplete="off"
          />
          <span className="text-2xl">/</span>
          <input
            id="expirationMonth"
            type="text"
            className="p-1 rounded-lg border border-stone-300 w-12 h-9 text-center text-base border-none focus-visible:outline-0"
            maxLength={2}
            onChange={(e) =>
              handleInputChange(e, setExpirationMonth, "cvv", "expirationYear")
            }
            value={expirationMonth}
            autoComplete="off"
          />
        </div>
        <InputOTP
          id="cvv"
          value={cvv}
          onInput={(e) => {
            handleInputChange(e, setCvv, "_", "expirationMonth");
          }}
          maxLength={3}
        >
          <InputOTPGroup
            className={`${errors.includes("cvv") ? "border-rose-600" : ""}`}
          >
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  );
};

export default memo(EditView);
