import { TErrors } from "@/app/profile/settings/components/PersonalInfo";
import { Dispatch, SetStateAction } from "react";
import { fetchPersonalInfo } from "@/app/utils/profile/set/apiPersonalInfo";
import { getEmail } from "@/features/getEmail";

type TParent = "deliveryAddress" | "card";

interface IField {
  name: TErrors[number];
  value: any;
  parent?: TParent;
}

interface ISubmitPersonalInfo {
  fields: any[];
  errors: TErrors;
  setErrors: Dispatch<SetStateAction<TErrors>>;
}

export const submitPersonalInfo = async ({
  errors,
  setErrors,
  fields,
}: ISubmitPersonalInfo) => {
  setErrors([]);

  const data: any = {};

  fields.forEach((field: IField) => {
    if (field.parent) {
      if (!data[field.parent]) {
        data[field.parent] = {};
      }
      data[field.parent][field.name] = field?.value;
    } else {
      data[field.name] = field?.value;
    }

    if (!field?.value) {
      setErrors((prevState) => [...prevState, field.name]);
    }
  });

  if (errors.length === 0) {
    return await fetchPersonalInfo({ ...data, email: getEmail() });
  }
};
