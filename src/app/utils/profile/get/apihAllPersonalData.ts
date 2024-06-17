"use server";

import { customInterceptor, IResponse } from "@/app/utils/api";

interface IData {
  firstName: string;
  secondName: string;
  birthDate: Date;
  gender: string;
  phone: string;
  recipientEmail: string;
  telegram: string;
  deliveryAddress: {
    city: string;
    street: string;
    house: string;
    floor: string;
  };
  card: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}

export async function fetchAllPersonalData(
  email: string | null,
): Promise<IResponse<IData | null>> {
  try {
    if (!email) {
      return { status: 401, message: "User is now authorized", data: null };
    }

    const response = await customInterceptor({
      url: `/profile/allPersonalData?email=${encodeURIComponent(email)}`,
      method: "GET",
    });

    if (!response.ok) {
      const error = await response.text();
      return { status: response.status, errors: error, data: null };
    }

    const data = await response.json();
    return {
      status: 200,
      data: data,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Internal Server Error",
      data: null,
      errors: error as string,
    };
  }
}
