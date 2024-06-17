"use server";

import { customInterceptor } from "@/app/utils/api";

interface IFetchPersonalInfo {
  email: string | null;
}

export async function fetchAllPersonalData({ email }: IFetchPersonalInfo) {
  try {
    if (!email) {
      return { status: 401, message: "User is now authorized" };
    }

    const response = await customInterceptor({
      url: "/auth/refresh",
      method: "GET",
    });

    if (!response.ok) {
      const error = await response.text();
      return { status: response.status, errors: error };
    }

    const data = await response.json();
    return {
      status: 200,
      data: data,
    };
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
}
