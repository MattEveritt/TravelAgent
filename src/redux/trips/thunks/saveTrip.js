import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosTripsService} from '../../../api';

export const saveTrip = createAsyncThunk(
  'trips/saveTrip',
  async (action, {getState}) => {
    try {
      const userId = getState().userAuth.userId;
      const {data} = await axiosTripsService({
        data: {
          destination: action.destination,
          budget: action.budget,
          dates: action.dates,
          travellers: action.travellers,
          users: action.users,
          userId: userId,
        },
      });
      return data;
    } catch (e) {
      console.log(e);
      return e.response.status;
    }
  },
);

export const saveTripCases = {
  fulfilled: (state, action) => {
    if (!action.payload.token) {
      if (action.payload === 401) {
        return {
          ...state,
          isLoggedIn: false,
        };
      }
    }
    if (action.payload.token) {
      return {
        ...state,
        accessToken: action.payload.token,
      };
    }
  },
};
