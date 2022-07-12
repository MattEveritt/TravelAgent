import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TripButton} from '../components/travelUI';
import globalStyles from '../styles/globalStyles';

const SettingsScreen = ({navigation}) => {
  const onPressHandler = value => {
    console.log(value);
  };

  return (
    <View style={globalStyles.screenContainer}>
      <Text>SettingsScreen</Text>
      <View style={styles.TripButtonContainer}>
        <TripButton
          title="Profile"
          onPress={onPressHandler()}
          iconName="chevron-right"
          iconType="material"
        />
        <TripButton
          title="Travellers"
          onPress={onPressHandler()}
          iconName="chevron-right"
          iconType="material"
        />
        <TripButton
          title="Account"
          onPress={onPressHandler()}
          iconName="chevron-right"
          iconType="material"
        />
        <TripButton
          title="Notifications"
          onPress={onPressHandler()}
          iconName="chevron-right"
          iconType="material"
        />
        <TripButton
          title="Reminders"
          onPress={onPressHandler()}
          iconName="chevron-right"
          iconType="material"
        />
        <TripButton
          title="Accomodation"
          onPress={onPressHandler()}
          iconName="chevron-right"
          iconType="material"
        />
        <TripButton
          title="Flights"
          onPress={onPressHandler()}
          iconName="chevron-right"
          iconType="material"
        />
        <TripButton
          title="Logout"
          onPress={onPressHandler()}
          iconName="chevron-right"
          iconType="material"
        />
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  TripButtonContainer: {
    width: '100%',
  },
  TripButton: {
    marginTop: 10,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
    borderRadius: 5,
  },
});
