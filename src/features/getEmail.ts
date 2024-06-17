import { cookies } from "next/headers";

export const getEmail = () => {
  if (!document) {
    return cookies().get("user")?.value ?? "something went wrong";
  }

  const docCookies = document.cookie.split(";");
  for (let i = 0; i < docCookies.length; i++) {
    let cookie = docCookies[i];
    while (cookie.charAt(0) === " ")
      cookie = cookie.substring(1, cookie.length);
    if (cookie.indexOf("user=") === 0) {
      return decodeURIComponent(
        cookie.substring("user=".length, cookie.length),
      );
    }
  }
  return null;
};
