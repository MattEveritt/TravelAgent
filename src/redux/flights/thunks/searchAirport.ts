import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosFlightsService } from '../../../api';

type SearchResults = {
  iataCode: string;
  name: string;
  address: {
    cityName: string;
  };
};
const searchAirportRequest = (searchString: string) => {
  return axiosFlightsService({
    url: '/searchairport',
    params: {
      searchString,
    },
  });
};

export const searchAirport = createAsyncThunk(
  'flights/searchAirport',
  async (action: { searchString: string }) => {
    try {
      const res = await searchAirportRequest(action.searchString);
      const searchResults: {}[] = [];
      JSON.parse(res.data).data.map((airport: SearchResults, index: number) => {
        if (index >= 5) return null;
        const airportObj = {
          iataCode: airport.iataCode,
          airportName: airport.name,
          cityName: airport.address.cityName,
        };
        searchResults.push(airportObj);
      });
      // console.log(airports.length);
      return searchResults;
    } catch (e) {
      console.log('error: ', e);
      return null;
    }
  },
);
