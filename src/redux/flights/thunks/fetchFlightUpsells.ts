import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosFlightsService } from '../../../api';

const getFlightUpsells = (flightOffer: {}, binNumber: number, flightOfferId: number) =>
  axiosFlightsService({
    url: '/flightupsell',
    method: 'post',
    data: {
        flightOffer,
        binNumber,
        flightOfferId,
    },
  });

interface ActionPayload {
    flightOffer: {},
    binNumber: number,
    flightOfferId: number,
}

export const fetchFlightUpsells = createAsyncThunk(
  'flights/fetchFlightUpsells',
  async (action: ActionPayload) => {
    const {flightOffer, binNumber, flightOfferId} = action;
    try {
      const res = await getFlightUpsells(flightOffer, binNumber, flightOfferId);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);