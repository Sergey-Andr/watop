export const formatCardNumber = (cardNumber: string) => {
  const visibleDigits = cardNumber.slice(-4);
  const maskedSection = cardNumber.slice(0, -4).replace(/./g, "*");
  const matched = (maskedSection + visibleDigits).match(/.{1,4}/g);

  if (!matched) {
    return "";
  }

  const formattedCard = matched.join(" ").slice(0, -4).replace(/\d/g, "*");
  return formattedCard + visibleDigits;
};
