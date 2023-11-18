export const bookingFormValidator = (
  tripObj: {
    dates: {
      startDate: string;
      untilDate: string;
    }[];
    destinations: {
      destination: string;
      googlePlaceId?: string | undefined;
    }[];
    departureAirport: { airportName: string };
    type: string;
    travellers: [];
    signedOutTravellers: {
      adults: number;
      youth: number;
      infants: number;
      infantsOnLap: number;
    };
  },
  isLoggedIn: boolean,
) => {
  const tripType = tripObj.type;

  const dates: boolean = !tripObj.dates.find(
    (dateObj: { startDate: string; untilDate: string }) =>
      dateObj.startDate === 'Outbound' ||
      (tripType === 'Round-trip' && dateObj.untilDate === 'Inbound'),
  );

  const destinations: boolean = !tripObj.destinations.find(
    (destinationObj: { destination: string }) =>
      destinationObj.destination === 'Search',
  );
  const departureAirport: boolean =
    tripObj.departureAirport.airportName !== 'Search';

  const checkSignedOutTravellers = () => {
    const { adults, youth, infants, infantsOnLap } =
      tripObj.signedOutTravellers;
    return adults + youth + infants + infantsOnLap > 0;
  };

  const travellers: boolean = isLoggedIn
    ? tripObj.travellers.length > 0
    : checkSignedOutTravellers();
  return { dates, destinations, departureAirport, travellers };
};
