export const getDestinationLocationCodes = (
  destinations: { iataCode: string }[],
  departureAirport: { iataCode: string },
  type: 'Round-trip' | 'One-way' | 'Multi-city',
) => {
  let destinationLocationCodes = destinations.map(
    destination => destination.iataCode,
  );

  if (type === 'Round-trip') {
    destinationLocationCodes.push(departureAirport.iataCode);
  }
  return destinationLocationCodes;
};
