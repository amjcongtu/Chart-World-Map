export const formatNumber = (number: number) => {
  if (isNaN(number) || !number) {
    return "0";
  }
  return Math.round(number)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
