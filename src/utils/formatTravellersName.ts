import { capitalizeFirstLetter } from "./capitalizeFirstLetter";

export const formatTravellersName = (traveller: {name: string, surname: string}) => {
  const firstName = capitalizeFirstLetter(traveller.name);
  const surname = capitalizeFirstLetter(traveller.surname);
  return `${firstName} ${surname}`;
};