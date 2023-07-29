import React, {useState, useCallback} from 'react';
import {Text, ScrollView, View} from 'react-native';
import globalStyles from '../styles/globalStyles';
import {saveTrip} from '../redux/trips/thunks/saveTrip';
import {DestinationSearchModal} from '../components/TripPlanning/DestinationSearchModal';
import {Trips, TripButton} from '../components';
import {useDispatch} from 'react-redux';

export const TripPlanningScreen = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [destination, setDestination] = useState();

  const handleAddTrip = useCallback(() => {
    setModalVisible(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSaveTrip = useCallback(() => {
    // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<any, void, Asyn... Remove this comment to see the full error message
    dispatch(saveTrip({destination: destination}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destination]);

  return (
    <View style={globalStyles.screenContainer}>
      <ScrollView keyboardShouldPersistTaps="always" style={{width: '100%'}}>
        <Text>TripPlanningScreen</Text>
        <View style={{width: '100%'}}>
          {/* @ts-expect-error TS(2786): 'Trips' cannot be used as a JSX component. */}
          <Trips />
        </View>
      </ScrollView>
      <TripButton
        title="Add new trip"
        onPress={handleAddTrip}
        iconName="plus-circle-outline"
        iconType="material-community"
      />
      <DestinationSearchModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        destination={destination}
        setDestination={setDestination}
        onPress={handleSaveTrip}
      />
    </View>
  );
};
