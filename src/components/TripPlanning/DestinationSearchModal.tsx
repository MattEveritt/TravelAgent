import React, {useCallback} from 'react';
import {View, Dimensions} from 'react-native';
import {TripModal, TripText, TripButton} from '../travelUI';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const WINDOW_HEIGHT = Dimensions.get('window').height;

export const DestinationSearchModal = ({
  modalVisible,
  setModalVisible,
  destination,
  setDestination,
  onPress
}: any) => {
  return (
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
          <TripButton title="save" onPress={onPress} />
        </View>
      }
    />
  );
};
