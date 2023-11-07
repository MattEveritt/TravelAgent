export const bookingFormValidator = (tripObj: {dates: [], destinations: [], departureAirport: {airportName: string}, type: string}) => {
  const tripType = tripObj.type;

  const dates: boolean = !tripObj.dates.find((dateObj: {startDate: string, untilDate: string}) => 
    dateObj.startDate === 'Outbound' || (tripType === 'Round-trip' && dateObj.untilDate === 'Inbound')
  );
  
  const destinations: boolean = !tripObj.destinations.find((destinationObj: {destination: string}) => destinationObj.destination === 'Search');
  const departureAirport: boolean = tripObj.departureAirport.airportName !== 'Search';
  return { dates, destinations, departureAirport };
};