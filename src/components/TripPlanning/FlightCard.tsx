import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {TripButton} from '../travelUI/index';

export const FlightCard = ({
  flight
}: any) => {
  const airline = useSelector(state => (state as any).flights.dictionaries.carriers);
  return (
    <View style={styles.container}>
      <Text>{flight.id}</Text>
      <Text>{flight.price.grandTotal}</Text>
      {flight.itineraries.map((itinerary: any) => <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '50%',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          {itinerary.segments.map((segment: any, index: any) => {
            if (index === 0 && index === itinerary.segments.length - 1) {
              return (
                <>
                  <Text>{segment.departure.at.substring(11, 16)} - </Text>
                  <Text>{segment.arrival.at.substring(11, 16)}</Text>
                </>
              );
            } else if (index === 0) {
              return <Text>{segment.departure.at.substring(11, 16)} - </Text>;
            } else if (index === itinerary.segments.length - 1) {
              return <Text>{segment.arrival.at.substring(11, 16)}</Text>;
            } else {
              return null
            }
          })}
        </View>
        <Text>
          {itinerary.segments.length === 1
            ? 'direct'
            : `${itinerary.segments.length} stops`}
        </Text>
        <Text>{itinerary.duration.substring(2, 7).toLowerCase()}</Text>
      </View>)}
      <TripButton title="View Details" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '17%',
    marginBottom: 5,
    backgroundColor: 'lightyellow',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 1,
  },
});
