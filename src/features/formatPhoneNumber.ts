import { PhoneNumberFormat, PhoneNumberUtil } from "google-libphonenumber";

export function formatPhoneNumber(phoneNumber: string, format = "BG") {
  const phoneUtil = PhoneNumberUtil.getInstance();
  const parsedNumber = phoneUtil.parse(phoneNumber, format);
  return phoneUtil.format(parsedNumber, PhoneNumberFormat.INTERNATIONAL);
}
