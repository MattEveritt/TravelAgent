import React, { memo } from 'react';
import { useAppSelector, selectFlightOffer } from '../../redux';
import { FCLocalized } from '../../localization/FCLocalized';
import { FlightsSummaryCard, ItinerarySeparator } from './components';
import { FlightOffer } from '../../types/flightOfferTypes';
import { View } from 'react-native';
import {
  ParamListBase,
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';
import { FlightBookingScreensContainer } from '../../components';

const _FlightsSummaryScreen = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const cityNames = useAppSelector(state => state.flights.cityNames);
  const flightOfferID = useAppSelector(
    state => state.flights.selectedFlightOfferID,
  );

  const flightOffer: FlightOffer = useAppSelector(state =>
    selectFlightOffer(state, flightOfferID),
  );

  if (!flightOffer) return null;

  const { itineraries, travelerPricings }: FlightOffer = flightOffer;

  const nightsAtDestination = itineraries.map((itinerary, index: number) => {
    const itineraryArrivalTime = itinerary.segments[0].arrival.at;
    const nextItineraryDepartureTime =
      itineraries[index + 1]?.segments[0].departure.at;

    if (itineraryArrivalTime && nextItineraryDepartureTime) {
      const timeGapInMilliseconds =
        new Date(nextItineraryDepartureTime).getTime() -
        new Date(itineraryArrivalTime).getTime();

      const timeGapInMinutes = Math.floor(timeGapInMilliseconds / 60000);
      const nights = Math.floor(timeGapInMinutes / 1440);
      // const hours = Math.floor((timeGapInMinutes - days * 1440) / 60);

      // const timeGapInDaysAndHours = ;

      return nights;
    } else {
      return 0;
    }
  });

  return (
    <FlightBookingScreensContainer
      onNextPress={() => navigation.navigate('LuggageAndInsurance')}
      screenIndex={1}
      screenTitle={FCLocalized('Flights summary')}
      onBackPress={undefined}>
      {itineraries.map((itinerary, index) => (
        <View key={index}>
          <FlightsSummaryCard
            itinerary={itinerary}
            destinationCityName={cityNames[index].destination}
            departureCityName={cityNames[index].departure}
            fareDetailsBySegment={travelerPricings[0].fareDetailsBySegment}
          />
          {index !== itineraries.length - 1 && (
            <ItinerarySeparator
              nightsAtDestination={nightsAtDestination[index]}
              city={cityNames[index].destination}
            />
          )}
        </View>
      ))}
    </FlightBookingScreensContainer>
  );
};

export const FlightsSummaryScreen = memo(_FlightsSummaryScreen);
