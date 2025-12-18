import numeral from "numeral";

export const formatMoney = (price) => {
  const forattedAmount = numeral(price).format("$0,0.00");
  return forattedAmount;
};
