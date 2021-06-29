/**
 * 每三位加一个,
 * @param {*} number
 */
export const numberToCurrency = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
