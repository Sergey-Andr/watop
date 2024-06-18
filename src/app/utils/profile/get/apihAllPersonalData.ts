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

    const responseText = await response.text();

    if (!response.ok) {
      return { status: response.status, errors: responseText, data: null };
    }

    if (!responseText) {
      return { status: 404, data: null };
    }

    const data = await JSON.parse(responseText);

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
