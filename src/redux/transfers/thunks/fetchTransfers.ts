import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosTransfersService } from '../../../api';

const getTransfers = (body: {}) =>
  axiosTransfersService({
    url: '/gettransfers',
    method: 'post',
    data: {
        ...body
    },
  });

export const fetchTransfers = createAsyncThunk(
  'transfers/fetchTransfers',
  async (body: {}) => {
    try {
      const res = await getTransfers(body);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);

// body =JSON.stringify({
//   "startLocationCode": "CDG",
//   "endAddressLine": "Avenue Anatole France, 5",
//   "endCityName": "Paris",
//   "endZipCode": "75007",
//   "endCountryCode": "FR",
//   "endName": "Souvenirs De La Tour",
//   "endGeoCode": "48.859466,2.2976965",
//   "transferType": "PRIVATE",
//   "startDateTime": "2023-11-10T10:30:00",
//   "providerCodes": "TXO",
//   "passengers": 2,
//   "stopOvers": [
//     {
//       "duration": "PT2H30M",
//       "sequenceNumber": 1,
//       "addressLine": "Avenue de la Bourdonnais, 19",
//       "countryCode": "FR",
//       "cityName": "Paris",
//       "zipCode": "75007",
//       "name": "De La Tours",
//       "geoCode": "48.859477,2.2976985",
//       "stateCode": "FR"
//     }
//   ],
//   "startConnectedSegment": {
//     "transportationType": "FLIGHT",
//     "transportationNumber": "AF380",
//     "departure": {
//       "localDateTime": "2023-11-10T09:00:00",
//       "iataCode": "NCE"
//     },
//     "arrival": {
//       "localDateTime": "2023-11-10T10:00:00",
//       "iataCode": "CDG"
//     }
//   },
//   "passengerCharacteristics": [
//     {
//       "passengerTypeCode": "ADT",
//       "age": 20
//     },
//     {
//       "passengerTypeCode": "CHD",
//       "age": 10
//     }
//   ]
// })
