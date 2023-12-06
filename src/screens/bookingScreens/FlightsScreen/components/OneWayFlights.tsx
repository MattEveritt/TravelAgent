import { FlatList } from 'react-native';
import React, { FC, memo, useEffect } from 'react';
import {
  fetchFlights,
  selectFlightOffers,
  useAppDispatch,
  useAppSelector,
} from '../../../../redux';
import { TripsType } from '../../../../redux/trips/trips';
import { FlightCard } from '../../../../components/createTripComponents';

type FlightOffersType = {
  price: { grandTotal: string };
  itineraries: {
    duration: string;
    segments: {
      departure: { at: string; iataCode: string };
      arrival: { at: string; iataCode: string };
      carrierCode: string;
    }[];
  }[];
  travelerPricings: {
    fareDetailsBySegment: {
      includedCheckedBags: { quantity: number };
    }[];
  }[];
  departureDate: string;
  duration: string;
  departureIataCode: string;
  destinationIataCode: string;
  departureAirportName: string;
  destinationAirportName: string;
  departureTime: string;
  arrivalTime: string;
  grandTotal: string;
  airlineCode: string;
};

type OneWayFlightsProps = {
  tripObj: TripsType;
};

const renderFlights = (
  item: { item: FlightOffersType },
  index: number,
  departureCityName: string,
  destinationCityName: string,
) => {
  const { itineraries, travelerPricings } = item.item;
  if (!itineraries && !itineraries[0] && !itineraries[0]) return null;
  const { segments, duration } = itineraries[0];
  const { departure, arrival, carrierCode } = segments[segments.length - 1];
  const departureDate = itineraries[0].segments[0].departure.at.substring(
    0,
    10,
  );

  const stops = itineraries[0].segments.length - 1;
  return (
    <FlightCard
      key={index}
      departureDate={departureDate}
      duration={duration}
      departureIataCode={departure.iataCode}
      destinationIataCode={arrival.iataCode}
      departureCityName={departureCityName}
      destinationCityName={destinationCityName}
      departureTime={departure.at.substring(11, 16)}
      arrivalTime={arrival.at.substring(11, 16)}
      grandTotal={item.item.price.grandTotal}
      airlineCode={carrierCode}
      stops={stops}
      includedCheckedBags={
        travelerPricings[0].fareDetailsBySegment[0].includedCheckedBags.quantity
      }
    />
  );
};

const _OneWayFlights: FC<OneWayFlightsProps> = ({ tripObj }) => {
  const dispatch = useAppDispatch();
  const flightOffers = useAppSelector(selectFlightOffers);

  useEffect(() => {
    dispatch(fetchFlights(tripObj));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!flightOffers) {
    return null;
  }

  const departureCityName = tripObj.departureAirport.cityName;
  const destinationCityName = tripObj.destinations[0].destination;
  return (
    <FlatList
      data={flightOffers[0]}
      renderItem={({ item, index }) =>
        renderFlights({ item }, index, departureCityName, destinationCityName)
      }
    />
  );
};

export const OneWayFlights = memo(_OneWayFlights);
