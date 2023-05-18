import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '@rneui/themed';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {TripModal, TripText, TripTextInput} from '../travelUI';

export const Destination = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [destination, setDestination] = useState();
  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <TripText text={destination} />
          </View>
          <View style={styles.iconContainer}>
            <Icon name="edit" />
          </View>
        </View>
      </TouchableOpacity>
      <TripModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalContent={
          <GooglePlacesAutocomplete
            placeholder={destination ? destination : 'Search'}
            onPress={(data, details) => {
              setDestination(data.description);
              setModalVisible(!modalVisible);
            }}
            query={{
              key: 'AIzaSyANUA6WMry0OJax7qCOyZlaUHaMs8aV-7o',
              language: 'en',
              types: '(cities)',
            }}
            enablePoweredByContainer={false}
            listUnderlayColor="blue"
            keepResultsAfterBlur={true}
            listEmptyComponent={() => {
              return (
                <View style={{flex: 1, width: '100%', height: '100%'}}>
                  <TripText text="No results found" />
                </View>
              );
            }}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    width: '90%',
  },
  iconContainer: {
    width: '10%',
  },
});
