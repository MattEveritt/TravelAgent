import React, {useState, useCallback, useMemo} from 'react';
import {StyleSheet, Text, ScrollView, View, Dimensions} from 'react-native';
import {saveTrip} from '../redux/trips/thunks/saveTrip';
import {ListItem, Icon, Avatar} from '@rneui/themed';
import globalStyles from '../styles/globalStyles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {TripInfo, TripButton, TripModal, TripText} from '../components';
import {useDispatch, useSelector} from 'react-redux';

const WINDOW_HEIGHT = Dimensions.get('window').height;

const tripPlanning1 = [
  {
    name: 'South Africa',
    subtitle: 'Cheap flights now available!',
    icon_name: 'globe',
  },
  {
    name: 'New York',
    subtitle: 'Prices are about to go up',
    icon_name: 'globe',
  },
  {
    name: 'Perth',
    subtitle: 'Wait a month for cheaper tickets',
    icon_name: 'globe',
  },
  {
    name: 'Barcelona',
    subtitle: 'Barcelona festival on during your dates',
    iconName: 'globe',
  },
];
export const TripPlanningScreen = () => {
  const dispatch = useDispatch();
  const trips = useSelector(state => state.trips);
  const [expanded, setExpanded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [destination, setDestination] = useState();

  console.log('trips: ', trips);
  const handleAddTrip = useCallback(() => {
    setModalVisible(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSaveTrip = useCallback(() => {
    dispatch(saveTrip({destination: destination}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderTrips = useMemo(
    () =>
      trips.map((trip, i) => (
        <ListItem.Accordion
          content={
            <ListItem.Title style={{flex: 9, color: 'black'}}>
              {trip.name}
            </ListItem.Title>
          }
          key={i}
          isExpanded={expanded === trip.name ? true : false}
          onPress={() => {
            setExpanded(expanded === trip.name ? false : trip.name);
          }}
          containerStyle={styles.accordion}>
          <TripInfo l={trip} i={i} />
        </ListItem.Accordion>
      )),
    [trips, expanded],
  );

  if (trips.length) {
    return (
      <View style={globalStyles.screenContainer}>
        <ScrollView style={{width: '100%'}}>
          <Text>TripPlanningScreen</Text>
          <View style={{width: '100%'}}>{renderTrips()}</View>
        </ScrollView>
        <TripButton
          title="Add new trip"
          onPress={handleAddTrip}
          iconName="plus-circle-outline"
          iconType="material-community"
        />
        <TripModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          modalContent={
            <View style={{height: WINDOW_HEIGHT / 2}}>
              <View style={{height: '80%'}}>
                <GooglePlacesAutocomplete
                  placeholder={destination ? destination : 'Search'}
                  onPress={(data, details) => {
                    setDestination(data.description);
                    // setModalVisible(!modalVisible);
                  }}
                  query={{
                    key: 'AIzaSyANUA6WMry0OJax7qCOyZlaUHaMs8aV-7o',
                    language: 'en',
                    types: '(cities)',
                  }}
                  enablePoweredByContainer={false}
                  listUnderlayColor="blue"
                  keepResultsAfterBlur={false}
                  listEmptyComponent={() => {
                    return (
                      <View style={{flex: 1, width: '100%', height: '100%'}}>
                        <TripText text="No results found" />
                      </View>
                    );
                  }}
                />
              </View>
              <TripButton title="save" onPress={handleSaveTrip} />
            </View>
          }
        />
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  accordion: {
    width: '100%',
    backgroundColor: 'orange',
    borderRadius: 1,
    marginTop: 5,
  },
});
