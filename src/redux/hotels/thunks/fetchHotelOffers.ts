import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosHotelsService } from '../../../api';

const fetchHotelOffersRequest = (
    hotelIds: string, 
    numberOfAdults: string, 
    numberOfChildren: string, 
    checkInDate: string, 
    checkOutDate: string
) =>
  axiosHotelsService({
    url: '/gethoteloffers',
    method: 'get',
    data: {
        hotelIds,
        numberOfAdults,
        numberOfChildren,
        checkInDate,
        checkOutDate,
    },
  });

interface ActionPayload {
    hotelIds: string,
    numberOfAdults: string, 
    numberOfChildren: string,
    checkInDate: string,
    checkOutDate: string,
}

export const fetchHotelOffers = createAsyncThunk(
  'hotels/fetchHotelOffers',
  async (action: ActionPayload) => {
    const {hotelIds, numberOfAdults, numberOfChildren, checkInDate, checkOutDate} = action;

    try {
      const res = await fetchHotelOffersRequest(
        hotelIds, 
        numberOfAdults, 
        numberOfChildren, 
        checkInDate, 
        checkOutDate
        );
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);
