import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteTrip} from '../../redux/trips/thunks/deleteTrip';
import {ListItem} from '@rneui/themed';
import Constants from '../../constants';
import * as tripPlanningComponents from './index';
import {useNavigation} from '@react-navigation/native';

export const TripInfo = ({trip, i}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(false);

  const handleDeleteTrip = useCallback(() => {
    dispatch(deleteTrip(trip.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={{width: '100%'}}>
      {Object.values(Constants.PLANNING_CATEGORIES).map((l, i) => {
        const Component = tripPlanningComponents[l];
        return (
          <ListItem.Accordion
            content={
              <ListItem.Title style={{width: '100%', color: 'black'}}>
                {l}
              </ListItem.Title>
            }
            key={i}
            isExpanded={expanded === l ? true : false}
            onPress={() => {
              setExpanded(expanded === l ? false : l);
            }}
            style={styles.accordion}
            containerStyle={styles.accordion}>
            <ListItem bottomDivider style={{width: '100%'}}>
              <Component trip={trip} />
            </ListItem>
          </ListItem.Accordion>
        );
      })}
      <ListItem
        onPress={() => console.log('pressed')}
        bottomDivider
        containerStyle={{backgroundColor: '#FFD580'}}>
        <View style={styles.TripButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Booking navigator')}>
            <Text>OPEN</Text>
          </TouchableOpacity>
          <Text>|</Text>
          <TouchableOpacity onPress={handleDeleteTrip}>
            <Text>DELETE</Text>
          </TouchableOpacity>
        </View>
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  accordion: {
    width: '100%',
    backgroundColor: '#FFD580',
  },
  TripButtonContainer: {
    backgroundColor: '#FFD580',
    flexDirection: 'row',
    // alignItems: 'center',
    // alignContent: 'space-between',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 10,
  },
  TripButtons: {
    width: '45%',
  },
});
