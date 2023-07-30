import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet} from 'react-native';
import {selectAllTrips} from '../../redux';
import {TripInfo} from './TripInfo';
import {ListItem} from '@rneui/themed';

export const Trips = () => {
  const [expanded, setExpanded] = useState(false);
  const trips = useSelector(selectAllTrips());

  return (
    <>
      {trips.map((trip, i) => (
        <ListItem.Accordion 
      content={<ListItem.Title style={{ flex: 9, color: 'black' }}>{(trip as any).destination}</ListItem.Title>} 
      key={i} 
      isExpanded={expanded === (trip as any).id ? true : false} 
      onPress={() => {
        // @ts-expect-error TS(2339): Property 'id' does not exist on type 'never'.
        setExpanded(expanded === trip.id ? false : trip.id);
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
