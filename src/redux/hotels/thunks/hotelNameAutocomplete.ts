import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosHotelsService } from '../../../api';

const hotelNameAutocompleteRequest = (searchString: string, subType: string) =>
  axiosHotelsService({
    url: '/hotelnameautocomplete',
    method: 'get',
    data: {
        searchString,
        subType
    },
  });

interface ActionPayload {
    searchString: string,
    subType: string
}

export const hotelNameAutocomplete = createAsyncThunk(
  'hotels/hotelNameAutocomplete',
  async (action: ActionPayload) => {
    const {searchString, subType} = action;

    try {
      const res = await hotelNameAutocompleteRequest(searchString, subType);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);