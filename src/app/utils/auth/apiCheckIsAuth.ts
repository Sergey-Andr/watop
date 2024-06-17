"use server";

import { customInterceptor } from "@/app/utils/api";

export async function fetchCheckAuth(token: string) {
  try {
    const response = await customInterceptor({
      url: "/auth/refresh",
      method: "POST",
      body: { refreshToken: token },
    });

    if (!response.ok) {
      const error = await response.text();
      return { status: response.status, errors: error };
    }

    const data = await response.json();

    // cookies().set("refreshToken", data.refreshToken, {
    //   secure: true,
    //   httpOnly: false,
    //   maxAge: 30 * 24 * 60 * 60,
    //   path: "/",
    // });
    // cookies().set("accessToken", data.accessToken, {
    //   secure: true,
    //   httpOnly: false,
    //   maxAge: 60 * 60,
    //   path: "/",
    // });

    return { status: 200, message: "User login successfully", data: data };
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
}
