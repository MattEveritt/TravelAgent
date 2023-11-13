import { Trip } from '../TripCard';

export const getTripCardTitle = (trip: Trip, i: number) => {
  const destinationNameArray: string[] | undefined = trip.destinations[i]?.destination.split(', ');
  const cityName = destinationNameArray && destinationNameArray[0];


  const startDate = new Date(trip.dates[i]?.startDate).toLocaleString('default', { month: 'short', day: '2-digit' });
  let untilDate = '';

  if (trip.dates[i]?.untilDate !== 'Inbound') {
    untilDate = ` - ${new Date(trip.dates[i]?.startDate).toLocaleString('default', { month: 'short', day: '2-digit' })}`;
  }

  const dates = `${startDate}${untilDate}`;
  return `${cityName} ${dates}`;
};