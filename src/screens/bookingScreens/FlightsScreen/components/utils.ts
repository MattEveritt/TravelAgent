import { TripsType } from '../../../../redux/trips/trips';

export const getCityNames = (tripObj: TripsType) => {
  const cityNames = [
    {
      departure: tripObj.departureAirport.cityName,
      destination: tripObj.destinations[0].destination,
    },
  ];

  if (tripObj.type === 'Round-trip') {
    cityNames.push({
      departure: tripObj.destinations[0].destination,
      destination: tripObj.departureAirport.cityName,
    });
  }

  if (tripObj.type === 'Multi-city') {
    tripObj.destinations.forEach((destination, index) => {
      if (index < tripObj.destinations.length - 1) {
        cityNames.push({
          departure: destination.destination,
          destination: tripObj.destinations[index + 1].destination,
        });
      }
    });
  }
  return cityNames;
};
