export type FlightEndPoint = {
  iataCode: string;
  terminal: string;
  at: string;
};

type OperatingFlight = {
  carrierCode: string;
  number: string;
  suffix: string;
};

type AircraftEquipment = {
  code: string;
};

export type DeckConfiguration = {
  width: number;
  length: number;
  startSeatRow: number;
  endSeatRow: number;
  startWingsX: number;
  endWingsX: number;
  startWingsRow: number;
  endWingsRow: number;
  exitRowsX: number[];
};

export type Coordinates = {
  x: number;
  y: number;
};

export type Facility = {
  code: string;
  column: string;
  row: string;
  position: 'FRONT' | 'REAR' | 'SEAT';
  coordinates: Coordinates;
};

type FeeType = 'TICKETING' | 'SUPPLIER' | 'FORM_OF_PAYMENT';

type Fee = {
  amount: string;
  type: FeeType;
};

type Tax = {
  amount: string;
  code: string;
};

export type Price = {
  currency: string;
  total: string;
  base: string;
  fees: Fee[];
  taxes: Tax[];
};

export type SeatmapTravelerPricing = {
  travelerId: string;
  seatAvailabilityStatus: 'AVAILABLE' | 'BLOCKED' | 'OCCUPIED';
  price: Price;
};

export type Seat = {
  cabin: string;
  number: string;
  characteristicsCodes: string[];
  travelerPricing: SeatmapTravelerPricing[];
  coordinates: Coordinates;
};
export type Deck = {
  deckType: 'UPPER' | 'MAIN' | 'LOWER';
  deckConfiguration: DeckConfiguration;
  facilities: Facility[];
  seats: Seat[];
};

type AircraftCabinAmenities_Power = {
  isChargeable: boolean;
  power: 'PLUG' | 'USB_PORT' | 'ADAPTOR' | 'PLUG_OR_USB_PORT';
  usbType: 'USB_A' | 'USB_C' | 'USB_A_AND_USB_C';
};

type AircraftCabinAmenities_Wifi = {
  isChargeable: boolean;
  wifiCoverage: 'FULL' | 'PARTIAL';
};

type AircraftCabinAmenities_Entertainment = {
  isChargeable: boolean;
  entertainmentType:
    | 'LIVE_TV'
    | 'MOVIES'
    | 'AUDIO_VIDEO_ON_DEMAND'
    | 'TV_SHOWS'
    | 'IP_TV';
};

type AircraftCabinAmenities_Food = {
  isChargeable: boolean;
  foodType: 'MEAL' | 'FRESH_MEAL' | 'SNACK' | 'FRESH_SNACK';
};

type AircraftCabinAmenities_Beverage = {
  isChargeable: boolean;
  beverageType: 'ALCOHOLIC' | 'NON_ALCOHOLIC' | 'ALCOHOLIC_AND_NON_ALCOHOLIC';
};

type QualifiedFreeText = {
  text: string;
  lang: string;
};

type Amenity_Media = {
  title: string;
  href: string;
  description: QualifiedFreeText;
  mediaType:
    | 'application'
    | 'audio'
    | 'font'
    | 'example'
    | 'image'
    | 'message'
    | 'model'
    | 'multipart'
    | 'text'
    | 'video';
};

type Amenity_Seat = {
  legSpace: number;
  spaceUnit: 'CENTIMETERS' | 'INCHES';
  tilt: 'FULL_FLAT' | 'ANGLE_FLAT' | 'NORMAL';
  amenityType: 'SEAT';
  medias: Amenity_Media[];
};

type AircraftCabinAmenities = {
  power: AircraftCabinAmenities_Power;
  seat: Amenity_Seat;
  wifi: AircraftCabinAmenities_Wifi;
  entertainment: AircraftCabinAmenities_Entertainment[];
  food: AircraftCabinAmenities_Food;
  beverage: AircraftCabinAmenities_Beverage;
};

type AvailableSeatsCounters = {
  travelerId: string;
  value: number; // number of available seats
};

export type SeatMap = {
  type: string;
  id: string;
  departure: FlightEndPoint;
  arrival: FlightEndPoint;
  carrierCode: string;
  number: string; // flight number
  operating: OperatingFlight;
  aircraft: AircraftEquipment;
  class: string;
  flightOfferId: string;
  segmentId: string;
  decks: Deck[];
  aircraftCabinAmenities: AircraftCabinAmenities;
  availableSeatsCounters: AvailableSeatsCounters[];
}[];
