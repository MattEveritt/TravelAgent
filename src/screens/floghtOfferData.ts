import { FlightOffer } from '../types/flightOfferTypes';

export const flightOfferData: FlightOffer[] = [
  {
    type: 'flight-offer',
    id: '1',
    source: 'GDS',
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    lastTicketingDate: '2020-01-16',
    numberOfBookableSeats: 7,
    itineraries: [
      {
        duration: 'PT15H55M',
        segments: [
          {
            departure: {
              iataCode: 'GIG',
              terminal: '2',
              at: '2020-08-01T21:50:00',
            },
            arrival: {
              iataCode: 'LHR',
              terminal: '5',
              at: '2020-08-02T13:10:00',
            },
            carrierCode: 'BA',
            number: '248',
            aircraft: {
              code: '788',
            },
            operating: {
              carrierCode: 'BA',
            },
            duration: 'PT11H20M',
            id: '1',
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: 'LHR',
              terminal: '5',
              at: '2020-08-02T15:15:00',
            },
            arrival: {
              iataCode: 'MAD',
              terminal: '4S',
              at: '2020-08-02T18:45:00',
            },
            carrierCode: 'BA',
            number: '462',
            aircraft: {
              code: '321',
            },
            operating: {
              carrierCode: 'BA',
            },
            duration: 'PT2H30M',
            id: '2',
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
      {
        duration: 'PT13H35M',
        segments: [
          {
            departure: {
              iataCode: 'MAD',
              terminal: '4S',
              at: '2020-08-05T23:55:00',
            },
            arrival: {
              iataCode: 'GRU',
              terminal: '3',
              at: '2020-08-06T05:40:00',
            },
            carrierCode: 'IB',
            number: '6827',
            aircraft: {
              code: '346',
            },
            operating: {
              carrierCode: 'IB',
            },
            duration: 'PT10H45M',
            id: '5',
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: 'GRU',
              terminal: '2',
              at: '2020-08-06T07:30:00',
            },
            arrival: {
              iataCode: 'GIG',
              terminal: '2',
              at: '2020-08-06T08:30:00',
            },
            carrierCode: 'LA',
            number: '4508',
            aircraft: {
              code: '320',
            },
            duration: 'PT1H',
            id: '6',
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: 'USD',
      total: '3842.10',
      base: '3661.00',
      fees: [
        {
          amount: '0.00',
          type: 'SUPPLIER',
        },
        {
          amount: '0.00',
          type: 'TICKETING',
        },
      ],
      grandTotal: '3842.10',
    },
    pricingOptions: {
      fareType: ['PUBLISHED'],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ['BA'],
    travelerPricings: [
      {
        travelerId: '1',
        fareOption: 'STANDARD',
        travelerType: 'ADULT',
        price: {
          currency: 'USD',
          total: '2178.55',
          base: '2088.00',
        },
        fareDetailsBySegment: [
          {
            segmentId: '1',
            cabin: 'BUSINESS',
            fareBasis: 'RNNZ60S3',
            brandedFare: 'BUSINESS',
            class: 'R',
            includedCheckedBags: {
              quantity: 2,
            },
          },
          {
            segmentId: '2',
            cabin: 'BUSINESS',
            fareBasis: 'RNNZ60S3',
            brandedFare: 'BUSINESS',
            class: 'J',
            includedCheckedBags: {
              quantity: 2,
            },
          },
          {
            segmentId: '5',
            cabin: 'ECONOMY',
            fareBasis: 'VDH0NNM3',
            brandedFare: 'BAGSEAT',
            class: 'V',
            includedCheckedBags: {
              quantity: 1,
            },
          },
          {
            segmentId: '6',
            cabin: 'ECONOMY',
            fareBasis: 'VDH0NNM3',
            brandedFare: 'BAGSEAT',
            class: 'V',
            includedCheckedBags: {
              quantity: 1,
            },
          },
        ],
      },
      {
        travelerId: '2',
        fareOption: 'STANDARD',
        travelerType: 'CHILD',
        price: {
          currency: 'USD',
          total: '1663.55',
          base: '1573.00',
        },
        fareDetailsBySegment: [
          {
            segmentId: '1',
            cabin: 'BUSINESS',
            fareBasis: 'RNNZ60S3',
            brandedFare: 'BUSINESS',
            class: 'R',
          },
          {
            segmentId: '2',
            cabin: 'BUSINESS',
            fareBasis: 'RNNZ60S3',
            brandedFare: 'BUSINESS',
            class: 'J',
          },
          {
            segmentId: '5',
            cabin: 'ECONOMY',
            fareBasis: 'VDH0NNM3',
            brandedFare: 'BAGSEAT',
            class: 'V',
          },
          {
            segmentId: '6',
            cabin: 'ECONOMY',
            fareBasis: 'VDH0NNM3',
            brandedFare: 'BAGSEAT',
            class: 'V',
          },
        ],
      },
    ],
  },
  {
    type: 'flight-offer',
    id: '2',
    source: 'GDS',
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    lastTicketingDate: '2020-01-16',
    numberOfBookableSeats: 7,
    itineraries: [
      {
        duration: 'PT15H55M',
        segments: [
          {
            departure: {
              iataCode: 'GIG',
              terminal: '2',
              at: '2020-08-01T21:50:00',
            },
            arrival: {
              iataCode: 'LHR',
              terminal: '5',
              at: '2020-08-02T13:10:00',
            },
            carrierCode: 'BA',
            number: '248',
            aircraft: {
              code: '788',
            },
            operating: {
              carrierCode: 'BA',
            },
            duration: 'PT11H20M',
            id: '1',
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: 'LHR',
              terminal: '5',
              at: '2020-08-02T15:15:00',
            },
            arrival: {
              iataCode: 'MAD',
              terminal: '4S',
              at: '2020-08-02T18:45:00',
            },
            carrierCode: 'BA',
            number: '462',
            aircraft: {
              code: '321',
            },
            operating: {
              carrierCode: 'BA',
            },
            duration: 'PT2H30M',
            id: '2',
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
      {
        duration: 'PT19H5M',
        segments: [
          {
            departure: {
              iataCode: 'MAD',
              terminal: '4S',
              at: '2020-08-05T23:55:00',
            },
            arrival: {
              iataCode: 'GRU',
              terminal: '3',
              at: '2020-08-06T05:40:00',
            },
            carrierCode: 'IB',
            number: '6827',
            aircraft: {
              code: '346',
            },
            operating: {
              carrierCode: 'IB',
            },
            duration: 'PT10H45M',
            id: '3',
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: 'GRU',
              terminal: '2',
              at: '2020-08-06T13:00:00',
            },
            arrival: {
              iataCode: 'GIG',
              terminal: '2',
              at: '2020-08-06T14:00:00',
            },
            carrierCode: 'LA',
            number: '4537',
            aircraft: {
              code: '321',
            },
            duration: 'PT1H',
            id: '4',
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: 'USD',
      total: '3842.10',
      base: '3661.00',
      fees: [
        {
          amount: '0.00',
          type: 'SUPPLIER',
        },
        {
          amount: '0.00',
          type: 'TICKETING',
        },
      ],
      grandTotal: '3842.10',
    },
    pricingOptions: {
      fareType: ['PUBLISHED'],
      includedCheckedBagsOnly: false,
    },
    validatingAirlineCodes: ['BA'],
    travelerPricings: [
      {
        travelerId: '1',
        fareOption: 'STANDARD',
        travelerType: 'ADULT',
        price: {
          currency: 'USD',
          total: '2178.55',
          base: '2088.00',
        },
        fareDetailsBySegment: [
          {
            segmentId: '1',
            cabin: 'BUSINESS',
            fareBasis: 'RNNZ60S3',
            brandedFare: 'BUSINESS',
            class: 'R',
            includedCheckedBags: {
              quantity: 2,
            },
          },
          {
            segmentId: '2',
            cabin: 'BUSINESS',
            fareBasis: 'RNNZ60S3',
            brandedFare: 'BUSINESS',
            class: 'J',
            includedCheckedBags: {
              quantity: 2,
            },
          },
          {
            segmentId: '3',
            cabin: 'ECONOMY',
            fareBasis: 'VDH0NNM3',
            brandedFare: 'BAGSEAT',
            class: 'V',
            includedCheckedBags: {
              quantity: 1,
            },
          },
          {
            segmentId: '4',
            cabin: 'ECONOMY',
            fareBasis: 'VDH0NNM3',
            brandedFare: 'BAGSEAT',
            class: 'V',
            includedCheckedBags: {
              quantity: 1,
            },
          },
        ],
      },
      {
        travelerId: '2',
        fareOption: 'STANDARD',
        travelerType: 'CHILD',
        price: {
          currency: 'USD',
          total: '1663.55',
          base: '1573.00',
        },
        fareDetailsBySegment: [
          {
            segmentId: '1',
            cabin: 'BUSINESS',
            fareBasis: 'RNNZ60S3',
            brandedFare: 'BUSINESS',
            class: 'R',
          },
          {
            segmentId: '2',
            cabin: 'BUSINESS',
            fareBasis: 'RNNZ60S3',
            brandedFare: 'BUSINESS',
            class: 'J',
          },
          {
            segmentId: '3',
            cabin: 'ECONOMY',
            fareBasis: 'VDH0NNM3',
            brandedFare: 'BAGSEAT',
            class: 'V',
          },
          {
            segmentId: '4',
            cabin: 'ECONOMY',
            fareBasis: 'VDH0NNM3',
            brandedFare: 'BAGSEAT',
            class: 'V',
          },
        ],
      },
    ],
  },
];
