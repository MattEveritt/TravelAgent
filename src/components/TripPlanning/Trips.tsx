import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet} from 'react-native';
import {selectAllTrips} from '../../redux';
import {TripInfo} from './TripInfo';
import {ListItem} from '@rneui/themed';

interface Trip {
  destination: string,
  id: string,
};

export const Trips = () => {
  const [expanded, setExpanded] = useState('');
  const trips = useSelector(selectAllTrips());

  return (
    <>
      {trips.map((trip: Trip, i) => (
        <ListItem.Accordion 
      content={<ListItem.Title style={{ flex: 9, color: 'black' }}>{trip.destination}</ListItem.Title>} 
      key={i} 
      isExpanded={expanded === trip.id ? true : false} 
      onPress={() => {
        setExpanded(expanded === trip.id ? '' : trip.id);
      }} 
      containerStyle={styles.accordion}>
      <TripInfo trip={trip} index={i}/>
        </ListItem.Accordion>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  accordion: {
    width: '100%',
    backgroundColor: 'orange',
    borderRadius: 1,
    marginTop: 5,
  },
});
