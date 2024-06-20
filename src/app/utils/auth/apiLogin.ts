"use server";

import { cookies } from "next/headers";
import { customInterceptor } from "@/app/utils/api";
import { EMAIL } from "@/features/getEmail";

export async function fetchLogin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const response = await customInterceptor({
      url: "/auth/login",
      method: "POST",
      body: { email, password },
    });

    if (!response.ok) {
      const error = await response.text();
      return { status: response.status, errors: error };
    }

    const data = await response.json();

    cookies().set("refreshToken", data.refreshToken, {
      secure: true,
      httpOnly: false,
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
    cookies().set("accessToken", data.accessToken, {
      secure: true,
      httpOnly: false,
      maxAge: 60 * 60,
      path: "/",
    });

    cookies().set(EMAIL, data.user.email, {
      secure: false,
      httpOnly: false,
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    return { status: response.status };
  } catch (error) {
    return { status: 500, message: error };
  }
}
