import { capitalizeFirstLetter } from './capitalizeFirstLetter';

export const formatTravellersName = (traveller: {
  firstName: string;
  lastName: string;
}) => {
  const firstName = capitalizeFirstLetter(traveller.firstName);
  const lastName = capitalizeFirstLetter(traveller.lastName);
  return `${firstName} ${lastName}`;
};
