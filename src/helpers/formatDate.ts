// For example, accepts "2019-03-16T09:59:51.935Z" and return "Sat Mar 16 2019 at 10:59"
function formatDate(stringDate: string) {
  const date = new Date(stringDate);
  const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  const minutes =
    date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
  return `${date.toDateString()} at ${hours}:${minutes}`;
}

export default formatDate;
