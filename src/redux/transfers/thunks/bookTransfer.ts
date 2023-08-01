import {createAsyncThunk} from '@reduxjs/toolkit';
import { axiosTransfersService } from '../../../api';

const bookTransferRequest = (offerBody: {}, offerId: string) =>
  axiosTransfersService({
    url: '/booktransfer',
    method: 'post',
    data: {
        offerBody,
        offerId
    },
  });

interface ActionPayload {
    offerBody: {},
    offerId: string,
}

export const bookTransfer = createAsyncThunk(
  'transfers/bookTransfer',
  async (action: ActionPayload) => {
    const {offerBody, offerId} = action;
    try {
      const res = await bookTransferRequest(offerBody, offerId);
      console.log('res: ', res.data);
      return res.data;
    } catch (e) {
      console.log('error: ', e);
    }
  },
);

// var offerBody = JSON.stringify({
//     "data": {
//       "note": "Note to driver",
//       "passengers": [
//         {
//           "firstName": "John",
//           "lastName": "Doe",
//           "title": "MR",
//           "contacts": {
//             "phoneNumber": "+33123456789",
//             "email": "user@email.com"
//           },
//           "billingAddress": {
//             "line": "Avenue de la Bourdonnais, 19",
//             "zip": "75007",
//             "countryCode": "FR",
//             "cityName": "Paris"
//           }
//         }
//       ],
//       "agency": {
//         "contacts": [
//           {
//             "email": {
//               "address": "abc@test.com"
//             }
//           }
//         ]
//       },
//       "payment": {
//         "methodOfPayment": "CREDIT_CARD",
//         "creditCard": {
//           "number": "4111111111111111",
//           "holderName": "JOHN DOE",
//           "vendorCode": "VI",
//           "expiryDate": "0928",
//           "cvv": "111"
//         }
//       },
//       "extraServices": [
//         {
//           "code": "EWT",
//           "itemId": "EWT0291"
//         }
//       ],
//       "equipment": [
//         {
//           "code": "BBS"
//         }
//       ],
//       "corporation": {
//         "address": {
//           "line": "5 Avenue Anatole France",
//           "zip": "75007",
//           "countryCode": "FR",
//           "cityName": "Paris"
//         },
//         "info": {
//           "AU": "FHOWMD024",
//           "CE": "280421GH"
//         }
//       },
//       "startConnectedSegment": {
//         "transportationType": "FLIGHT",
//         "transportationNumber": "AF380",
//         "departure": {
//           "uicCode": "7400001",
//           "iataCode": "CDG",
//           "localDateTime": "2023-03-27T20:03:00"
//         },
//         "arrival": {
//           "uicCode": "7400001",
//           "iataCode": "CDG",
//           "localDateTime": "2023-03-27T20:03:00"
//         }
//       },
//       "endConnectedSegment": {
//         "transportationType": "FLIGHT",
//         "transportationNumber": "AF380",
//         "departure": {
//           "uicCode": "7400001",
//           "iataCode": "CDG",
//           "localDateTime": "2023-03-27T20:03:00"
//         },
//         "arrival": {
//           "uicCode": "7400001",
//           "iataCode": "CDG",
//           "localDateTime": "2023-03-27T20:03:00"
//         }
//       }
//     }
//   })