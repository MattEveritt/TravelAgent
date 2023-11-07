import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { TripModal, TripText } from '../travelUI';
import { FCLocalized } from '../../localization/FCLocalized';
import { theme } from '../../styles/theme';
import { Icon } from '@rneui/base';
import { searchAirport, setDepartureAirport, setDepartureAirportValidity, useAppDispatch } from '../../redux';
import debounce from 'lodash/debounce';

type DepartureSearchModalProps = {
  modalVisible: boolean,
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

type SearchResultsProps = {
  searchResults: [], 
  setModalVisible: Dispatch<SetStateAction<boolean>>
}

const SearchHeader = ({ setSearchResults }: {setSearchResults: Dispatch<SetStateAction<[]>>}) => {
  const dispatch = useAppDispatch();

  const onChangeText = debounce(async (searchString: string) => {
    if (searchString.length > 0) {
      const { payload }: {payload: []} = await dispatch(searchAirport({ searchString }));
      setSearchResults(payload);
    }
  }, 500);

  return (
    <View style={styles.container}>
      <Icon name='search' containerStyle={styles.searchIconWrapper}/>
      <View style={styles.textInputContainer}>
        <TextInput 
          style={styles.textInput} 
          cursorColor={theme.BLACK} 
          placeholder={FCLocalized('Search')}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

const SearchResults = ({ searchResults, setModalVisible }: SearchResultsProps) => {
  const dispatch = useAppDispatch();

  const onResultPress = (index: number) => {
    dispatch(setDepartureAirport(searchResults[index]));
    dispatch(setDepartureAirportValidity(true));
    setModalVisible(false);
  };
  
  return (
    <View style={{ width: '100%', height: '100%' }}>
      {searchResults.map((result: {airportName: string, iataCode: string}, index) => (
        <TouchableOpacity key={index} onPress={() => onResultPress(index)}>
          <TripText text={`${result.airportName}, ${result.iataCode}`} style={{ padding: 10 }}/>
        </TouchableOpacity>
      ))}
    </View>
  );};

export const DepartureSearchModal = ({ modalVisible, setModalVisible }: DepartureSearchModalProps) => {
  const [searchResults, setSearchResults] = useState([]);

  const onCancelPress = () => {
    setSearchResults([]);
    setModalVisible(false);
  };
  return (
    <TripModal
      modalVisible={modalVisible}
      title={FCLocalized('Search departure airport')}
      onCancelPress={onCancelPress}
      headerContent={() => <SearchHeader setSearchResults={setSearchResults}/>}
      modalContent={(
        <SearchResults 
          searchResults={searchResults} 
          setModalVisible={setModalVisible}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '75%',
    width: '100%',
  },
  textInputContainer: {
    height: '100%',
    width: '90%',
    alignSelf: 'center',
    borderBottomColor: theme.BLACK,
    borderBottomWidth: 1.3,
    marginLeft: -25
  },
  textInput: {
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
    paddingTop: 20,
    marginLeft: 30,
    marginTop: 3,
    fontSize: 16
  },
  searchIconWrapper: {
    paddingTop: 28,
    paddingLeft: 20,
  },
  // listView: {
  //   height: 500,
  //   width: '100%',
  //   top: windowHeight / 100 * 12,
  //   position: 'absolute'
  // }
});
