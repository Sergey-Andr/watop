"use server";

import { customInterceptor, IPersonalInfo } from "@/app/utils/api";

export async function fetchPersonalInfo(
  personalInfo: Omit<IPersonalInfo, "password">,
) {
  try {
    if (!personalInfo.email) {
      return { status: 401, message: "User is now authorized" };
    }

    const response = await customInterceptor({
      url: "/profile/personalInfo",
      method: "POST",
      body: personalInfo,
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
