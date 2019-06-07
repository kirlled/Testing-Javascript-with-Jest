export const convert = (date) => {
  let dateStr = `${date.getFullYear()}-`;

  dateStr += date.getMonth() < 9 ?
    `0${date.getMonth() + 1}-` : `${date.getMonth() + 1}-`;

  dateStr += date.getDate() < 10 ? 
    `0${date.getDate()}` : date.getDate();

  return dateStr;
};