"use server";
import { cookies } from "next/headers";
import { customInterceptor } from "@/app/utils/api";
import { EMAIL } from "@/features/getEmail";

export async function fetchRegistration({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const response = await customInterceptor({
      url: "/auth/registration",
      method: "POST",
      body: { password, email },
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
      path: "/",
    });
    cookies().set("accessToken", data.accessToken, {
      secure: false,
      httpOnly: false,
      maxAge: 60 * 60,
      path: "/",
    });
    cookies().set(EMAIL, data.user.email, {
      secure: false,
      httpOnly: false,
      path: "/",
    });

    return { status: 200 };
  } catch (error) {
    return { status: 500, message: error };
  }
}
