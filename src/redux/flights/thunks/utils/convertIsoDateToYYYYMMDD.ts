export function convertIsoDateToYYYYMMDD(isoDateString: string) {
  const date = new Date(isoDateString);
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are 0 indexed so +1 and pad with 0 if necessary
  const day = ('0' + date.getDate()).slice(-2); // Pad with 0 if necessary
  return `${year}-${month}-${day}`;
}
