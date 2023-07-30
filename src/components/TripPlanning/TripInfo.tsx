import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteTrip} from '../../redux/trips/thunks/deleteTrip';
import {ListItem} from '@rneui/themed';
import Constants from '../../constants';
import * as tripPlanningComponents from './index';
import {useNavigation} from '@react-navigation/native';

export const TripInfo = ({
  trip,
  i
}: any) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(false);

  const handleDeleteTrip = useCallback(() => {
    // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<void, void, Asy... Remove this comment to see the full error message
    dispatch(deleteTrip(trip.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={{width: '100%'}}>
      {Object.values(Constants.PLANNING_CATEGORIES).map((l, i) => {
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        const Component = tripPlanningComponents[l];
        return (
          <ListItem.Accordion
            content={
              <ListItem.Title style={{width: '100%', color: 'black'}}>
                {l}
              </ListItem.Title>
            }
            key={i}
            // @ts-expect-error TS(2367): This condition will always return 'false' since th... Remove this comment to see the full error message
            isExpanded={expanded === l ? true : false}
            onPress={() => {
              // @ts-expect-error TS(2367): This condition will always return 'false' since th... Remove this comment to see the full error message
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
            // @ts-expect-error TS(2769): No overload matches this call.
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
