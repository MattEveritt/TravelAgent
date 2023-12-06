import React, { Dispatch, SetStateAction } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { TripModal, TripText } from '../travelUI';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { FCLocalized } from '../../localization/FCLocalized';
import { theme } from '../../styles/theme';
import { Icon } from '@rneui/base';
import Config from 'react-native-config';

const windowHeight = Dimensions.get('window').height;

type HeaderComponentProps = {
  setDestination: (destination: string, googlePlaceId: string) => void;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
};

const HeaderComponent = React.memo(
  ({ setDestination, setModalVisible }: HeaderComponentProps) => (
    <GooglePlacesAutocomplete
      placeholder={FCLocalized('Search')}
      onPress={(data, details) => {
        setModalVisible(false);
        setDestination(data.description, data.place_id);
      }}
      query={{
        key: Config.GOOGLE_API_KEY,
        language: 'en',
        types: '(cities)',
      }}
      enablePoweredByContainer={false}
      listUnderlayColor="blue"
      keepResultsAfterBlur={true}
      styles={googlePlacesStyles}
      renderLeftButton={() => (
        <View style={styles.searchIconWrapper}>
          <Icon name="search" />
        </View>
      )}
      textInputProps={{ selectionColor: theme.BLACK }}
      listEmptyComponent={
        <View style={styles.listEmptyComponentContainer}>
          <TripText text={FCLocalized('No results found')} />
        </View>
      }
    />
  ),
);

type SetDestination = () => void;
type SetModalVisible = () => void;

const getHeaderComponent = (
  setDestination: SetDestination,
  setModalVisible: SetModalVisible,
) => {
  return (
    <HeaderComponent
      setDestination={setDestination}
      setModalVisible={setModalVisible}
    />
  );
};

export const DestinationSearchModal = ({
  modalVisible,
  setModalVisible,
  setDestination,
}: any) => {
  const onCancelPress = () => {
    setModalVisible(false);
  };
  return (
    <TripModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title={FCLocalized('Search your destination')}
      onCancelPress={onCancelPress}
      headerContent={() => getHeaderComponent(setDestination, setModalVisible)}
    />
  );
};

const googlePlacesStyles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  textInputContainer: {
    height: '100%',
    width: '90%',
    alignSelf: 'center',
    borderBottomColor: theme.BLACK,
    borderBottomWidth: 1,
  },
  textInput: {
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
    paddingTop: 20,
  },
  listView: {
    height: 500,
    width: '100%',
    top: (windowHeight / 100) * 12,
    position: 'absolute',
  },
});

const styles = StyleSheet.create({
  searchIconWrapper: {
    paddingTop: 28,
  },
  listEmptyComponentContainer: { flex: 1, width: '100%', height: '100%' },
});
