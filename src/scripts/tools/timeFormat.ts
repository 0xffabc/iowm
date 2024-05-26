
module.exports = function timeFormatter(num: number): string {
  return num <= 9 ? `0${num.toString()}` : num.toString();
};
