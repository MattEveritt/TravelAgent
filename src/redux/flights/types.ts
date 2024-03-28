export type FetchFlightsAction = {
  departureAirport: {
    iataCode: string;
  };
  dates: {
    startDate: string;
    untilDate: string;
  }[];
  destinations: {
    iataCode: string;
  }[];
  type: 'Round-trip' | 'One-way' | 'Multi-city';
  signedOutTravellers: {
    adults: number;
    youth: number;
    infants: number;
    infantsOnLap: number;
  };
};

export type FlightCriteria = {
  originLocationCodes: string[];
  destinationLocationCodes: string[];
  departureDates: string[];
  adults: number;
  children: number;
  seniors: number;
  young: number;
  heldInfants: number;
  associatedAdultIds: number[];
  seatedInfants: number;
  students: number;
  currencyCode: string;
};
