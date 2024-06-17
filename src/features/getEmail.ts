export const EMAIL = "email";

export const getEmail = (): string | null => {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(`${EMAIL}=`) === 0) {
      let email = decodeURIComponent(
        cookie.substring(`${EMAIL}=`.length, cookie.length),
      );
      if (email.startsWith('"') && email.endsWith('"')) {
        email = email.substring(1, email.length - 1);
      }
      return email;
    }
  }
  return null;
};
