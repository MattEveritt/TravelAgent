export const getOriginLocationCodes = (
  departureAirport: { iataCode: string },
  destinations: { iataCode: string }[],
  type: 'Round-trip' | 'One-way' | 'Multi-city',
) => {
  let originLocationCodes = [
    departureAirport.iataCode,
    ...destinations.map(destination => destination.iataCode),
  ];

  if (type !== 'Round-trip') {
    originLocationCodes.pop();
  }
  return originLocationCodes;
};
