import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import globalStyles from '../styles/globalStyles';

const SettingsScreen = ({navigation}) => {
  const onPressHandler = value => {
    console.log(value);
  };

  return (
    <View style={globalStyles.screenContainer}>
      <Text>SettingsScreen</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => onPressHandler('Edit profile')}
          style={styles.button}
          accessibilityLabel="Edit your profile">
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressHandler('Travellers')}
          style={styles.button}
          accessibilityLabel="Travellers">
          <Text>Travellers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressHandler('Account Settings')}
          style={styles.button}
          accessibilityLabel="Account Settings">
          <Text>Account Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressHandler('Notifications Settings')}
          style={styles.button}
          accessibilityLabel="Notifications Settings">
          <Text>Notifications Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressHandler('Reminders settings')}
          style={styles.button}
          accessibilityLabel="Reminders settings">
          <Text>Reminders settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressHandler('Accomodation Settings')}
          style={styles.button}
          accessibilityLabel="Accomodation Settings">
          <Text>Accomodation Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressHandler('Flights Settings')}
          style={styles.button}
          accessibilityLabel="Flights Settings">
          <Text>Flights Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressHandler('Logout')}
          style={styles.button}
          accessibilityLabel="Logout">
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
  },
  button: {
    marginTop: 10,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
    borderRadius: 5,
  },
});
