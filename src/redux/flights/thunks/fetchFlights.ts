import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosFlightsService } from '../../../api';
import {
  getDepartureDates,
  getOriginLocationCodes,
  getDestinationLocationCodes,
} from './utils';
import { FlightCriteria, FetchFlightsAction } from '../types';

const getFlights = (flightCriteria: FlightCriteria) =>
  axiosFlightsService({
    url: '/getflights',
    params: { ...flightCriteria },
  });

export const fetchFlights = createAsyncThunk(
  'flights/fetchFlights',
  async ({
    departureAirport,
    destinations,
    dates,
    signedOutTravellers,
    type,
  }: FetchFlightsAction) => {
    const originLocationCodes = getOriginLocationCodes(
      departureAirport,
      destinations,
      type,
    );

    const destinationLocationCodes = getDestinationLocationCodes(
      destinations,
      departureAirport,
      type,
    );

    const departureDates = getDepartureDates(dates, type);

    const flightCriteria = {
      originLocationCodes,
      destinationLocationCodes,
      departureDates,
      adults: signedOutTravellers.adults,
      children: signedOutTravellers.youth,
      seniors: 0,
      young: 0,
      heldInfants: signedOutTravellers.infants,
      associatedAdultIds: [],
      seatedInfants: signedOutTravellers.infantsOnLap,
      students: 0,
      currencyCode: 'USD',
    };

    try {
      const res = await getFlights(flightCriteria);
      const parsedData = JSON.parse(res.data);
      return parsedData.data;
    } catch (e) {
      console.log('FetchFlights, error: ', e);
    }
  },
);
