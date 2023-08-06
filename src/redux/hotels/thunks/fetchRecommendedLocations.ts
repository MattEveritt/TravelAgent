import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosHotelsService } from '../../../api';

const fetchRecommendedLocationReq = (cityCodes: string, travelerCountryCode: string) =>
  axiosHotelsService({
    url: '/recommendedlocation',
    method: 'get',
    data: {
        cityCodes,
        travelerCountryCode
    },
  });

interface ActionPayload {
    cityCodes: string,
    travelerCountryCode: string
}

export const fetchRecommendedLocation = createAsyncThunk(
  'hotels/fetchRecommendedLocation',
  async (action: ActionPayload) => {
    const {cityCodes, travelerCountryCode} = action;

    try {
      const res = await fetchRecommendedLocationReq(cityCodes, travelerCountryCode);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);