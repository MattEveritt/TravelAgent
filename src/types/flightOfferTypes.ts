interface Co2Emissions {
  weight: number;
  weightUnit: string;
  cabin: string;
}

interface FlightEndPoint {
  iataCode: string;
  terminal?: string;
  at: string;
}

interface FlightStop {
  iataCode: string;
  duration: string;
  arrivalAt: string;
  departureAt: string;
}

export interface Segment {
  co2Emissions?: Co2Emissions[];
  id?: string;
  numberOfStops: number;
  blacklistedInEU?: boolean;
  departure: FlightEndPoint;
  arrival: FlightEndPoint;
  carrierCode: string;
  number: string;
  aircraft?: {
    code: string;
  };
  operating?: {
    carrierCode: string;
  };
  duration: string;
  stops?: FlightStop[];
}

export interface Itinerary {
  duration: string;
  segments: Segment[];
}

type FeeType = 'TICKETING' | 'SUPPLIER' | 'FORM_OF_PAYMENT';

type AdditionalServicesType =
  | 'CHECKED_BAGS'
  | 'MEALS'
  | 'SEATS'
  | 'OTHER_SERVICES';

type PricingOptionsFareType = 'PUBLISHED' | 'NEGOTIATED' | 'CORPORATE';

type TravelerPricingFareOption =
  | 'STANDARD'
  | 'INCLUSIVE_TOUR'
  | 'SPANISH_MELILLA_RESIDENT'
  | 'SPANISH_CEUTA_RESIDENT'
  | 'SPANISH_CANARY_RESIDENT'
  | 'SPANISH_BALEARIC_RESIDENT'
  | 'AIR_FRANCE_METROPOLITAN_DISCOUNT_PASS'
  | 'AIR_FRANCE_DOM_DISCOUNT_PASS'
  | 'AIR_FRANCE_COMBINED_DISCOUNT_PASS'
  | 'AIR_FRANCE_FAMILY'
  | 'ADULT_WITH_COMPANION'
  | 'COMPANION';

type TravelerType =
  | 'ADULT'
  | 'CHILD'
  | 'SENIOR'
  | 'YOUNG'
  | 'HELD_INFANT'
  | 'SEATED_INFANT'
  | 'STUDENT';

type TravelClass = 'ECONOMY' | 'PREMIUM_ECONOMY' | 'BUSINESS' | 'FIRST';

type SliceDiceIndicatorType =
  | 'LOCAL_AVAILABILITY'
  | 'SUB_OD_AVAILABILITY_1'
  | 'SUB_OD_AVAILABILITY_2';

type ServiceNameType = 'PRIORITY_CHECKIN' | 'PRIORITY_BOARDING';

export type IncludedCheckedBags = {
  quantity: number;
  weight: number;
  weightUnit: string;
};

export type FareDetailsBySegment = {
  segmentId: string;
  cabin: TravelClass;
  fareBasis: string;
  brandedFare: string;
  class: string;
  isAllotment: boolean;
  allotmentDetails: {
    tourName: string;
    tourReference: string;
  };
  sliceDiceIndicator: SliceDiceIndicatorType;
  includedCheckedBags: IncludedCheckedBags;
  additionalServices: {
    chargeableCheckedBags: {
      quantity: number;
      weight: number;
      weightUnit: string;
      id: string;
    };
    chargeableSeat: {
      id: string;
      number: string;
    };
    otherServices: ServiceNameType;
  }[];
};

export type Price = {
  grandTotal: string;
  billingCurrency: string;
  additionalServices: {
    type: AdditionalServicesType;
    amount: string;
  }[];
  currency: string;
  total: string;
  base: string;
  fees: {
    amount: string;
    type: FeeType;
  }[];
  taxes: {
    amount: string;
    code: string;
  }[];
  refundableTaxes: string;
};

export interface FlightOffer {
  type: string;
  id: string;
  source: string;
  instantTicketingRequired: boolean;
  disablePricing: boolean;
  nonHomogeneous: boolean;
  oneWay: boolean;
  paymentCardRequired: boolean;
  lastTicketingDate: string;
  lastTicketingDateTime: string;
  numberOfBookableSeats: number;
  itineraries: Itinerary[];
  price: Price;
  pricingOptions: {
    fareType: PricingOptionsFareType[];
    includedCheckedBagsOnly: boolean;
    refundableFare: boolean;
    noRestrictionFare: boolean;
    noPenaltyFare: boolean;
  };
  validatingAirlineCodes: string[];
  travelerPricings: {
    travelerId: string;
    fareOption: TravelerPricingFareOption;
    travelerType: TravelerType;
    associatedAdultId: string;
    price: {
      total: string;
      base: string;
      fees: {
        amount: string;
        type: FeeType;
      }[];
      currency: string;
      taxes: {
        amount: string;
        code: string;
      }[];
      refundableTaxes: string;
    };
    fareDetailsBySegment: FareDetailsBySegment[];
  }[];
}
