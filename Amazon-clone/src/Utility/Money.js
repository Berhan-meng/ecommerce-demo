export const formatMoney = (price) => {
  return `$${(price / 100).toFixed(2)}`;
};
