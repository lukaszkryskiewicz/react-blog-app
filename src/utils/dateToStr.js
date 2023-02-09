export const dateToStr = (date) => {
  const d = new Date(date)

  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let days = d.getDate();

  if (month < 10) month = '0' + month;
  if (days < 10) days = '0' + days;

  const stringDate = month + '/' + days + '/' + year;

  return stringDate
}