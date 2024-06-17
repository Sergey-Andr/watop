"use server";

import { cookies } from "next/headers";
import { customInterceptor } from "@/app/utils/api";

export async function fetchCheckAuth() {
  try {
    const response = await customInterceptor({
      url: "/auth/refresh",
      method: "POST",
    });

    if (!response.ok) {
      const error = await response.text();
      return { status: response.status, errors: error };
    }

    const data = await response.json();

    cookies().set("refreshToken", data.refreshToken, {
      secure: true,
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60,
    });
    cookies().set("accessToken", data.accessToken, {
      secure: false,
      httpOnly: false,
      maxAge: 60 * 60,
    });

    return { status: 200, message: "User login successfully", data: data };
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
}
