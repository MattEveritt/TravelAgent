import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Config from 'react-native-config';

export const getDestinationImg = createAsyncThunk(
  'trips/getDestinationImg',
  async (action: string, { getState }) => {
    try {
      const { data } = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${action}&fields=photo&key=${Config.GOOGLE_API_KEY}`
      );
      
      return data.result.photos[1].photo_reference;
    } catch (e: any) {
      console.log(e.message);
    }
  },
);