import { StyleSheet } from 'react-native';
import React, { FC, memo } from 'react';
import { Card, TripText } from '../../../../../components/travelUI/index';
import { ItineraryItem } from './components';
import { formatOutboundText } from './utils';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {
  IncludedCheckedBags,
  Itinerary,
  Price,
} from '../../../../../types/flightOfferTypes';
import { setSelectedFlightOffer, useAppDispatch } from '../../../../../redux';

type Props = {
  departureDate: string;
  cityNames: {
    departure: string;
    destination: string;
  }[];
  flightOfferID: number;
  itineraries: Itinerary[];
  price: Price;
  includedCheckedBags: IncludedCheckedBags;
  isSummary?: boolean;
};

const _FlightCard: FC<Props> = ({
  itineraries,
  departureDate,
  cityNames,
  flightOfferID,
  price,
  includedCheckedBags,
  isSummary = false,
}) => {
  const dispatch = useAppDispatch();
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const onCardPress = () => {
    dispatch(setSelectedFlightOffer({ flightOfferID, cityNames }));
    navigation.navigate('FlightsTabNavigator');
  };

  return (
    <Card pressDisabled={false} onPress={onCardPress}>
      <TripText
        text={formatOutboundText(departureDate)}
        style={styles.outboundText}
      />
      {itineraries.map((itinerary, index) => {
        return (
          <ItineraryItem
            itinerary={itinerary}
            key={index}
            price={price}
            includedCheckedBags={includedCheckedBags}
            isSummary={isSummary}
            cityNames={cityNames[index]}
          />
        );
      })}
    </Card>
  );
};

export const FlightCard = memo(_FlightCard);

const styles = StyleSheet.create({
  outboundText: {
    marginBottom: 10,
  },
});
