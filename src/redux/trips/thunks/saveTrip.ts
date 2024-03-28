import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosTripsService } from '../../../api';
import { TravellerType } from '../../../components/createTripComponents/travellersCard/SelectSavedTravellers';
import { fetchClosestAirport } from '../../flights';
import Config from 'react-native-config';
import axios from 'axios';

interface ActionPayload {
  type: string;
  departureAirport: {};
  destinations: {
    iataCode: string;
  }[];
  dates: {}[];
  travellers: [];
  signedOutTravellers: {
    adults: number;
    children: number;
    seniors: number;
    youth: number;
    infants: number;
    infantsOnLap: number;
    students: number;
  };
  transport: string[];
  includeAccomodation: boolean;
}

export const saveTrip = createAsyncThunk(
  'trips/saveTrip',
  async (action: ActionPayload, { getState, dispatch }) => {
    try {
      const { userId, isLoggedIn } = (getState as any)().userAuth;
      const travellersIds = action.travellers.map(
        (traveller: TravellerType) => traveller.id,
      );

      const destinations = [...action.destinations];
      await Promise.all(
        destinations.map(async (destination: any, index: number) => {
          const { data } = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?place_id=${destination.googlePlaceId}&key=${Config.GOOGLE_API_KEY}`,
          );

          const { lat, lng } = data.results[0].geometry.location;
          const { payload } = await dispatch(fetchClosestAirport({ lat, lng }));
          destinations[index] = {
            ...destinations[index],
            iataCode: payload.iataCode,
          };
        }),
      );
      let res;

      const tripData = {
        type: action.type,
        departureAirport: action.departureAirport,
        destinations: destinations,
        dates: action.dates,
        travellers: travellersIds,
        signedOutTravellers: action.signedOutTravellers,
        transport: action.transport,
        includeAccomodation: action.includeAccomodation,
        userId: userId,
      };

      if (isLoggedIn) {
        const { data } = await axiosTripsService({
          url: '/saveTrip',
          data: tripData,
        });
        res = data;
      } else {
        res = tripData;
      }

      return res;
    } catch (e: any) {
      console.log('saveTrip error', e);
      return e;
    }
  },
);

export const saveTripCases = {
  fulfilled: (state: any, action: any) => {
    const newState = [action.payload];
    state.trips = newState;
  },
  rejected: () => {
    console.log('saveTrip rejected');
  },
};
