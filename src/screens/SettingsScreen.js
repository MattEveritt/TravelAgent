import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/travelUI/Button';
import globalStyles from '../styles/globalStyles';

const SettingsScreen = ({navigation}) => {
  const onPressHandler = value => {
    console.log(value);
  };

  return (
    <View style={globalStyles.screenContainer}>
      <Text>SettingsScreen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Profile"
          onPress={onPressHandler()}
          iconName="chevron-right"
          iconType="material"
        />
        <Button
          title="Travellers"
          onPress={onPressHandler()}
          iconName="chevron-right"
          iconType="material"
        />
        <Button
          title="Account"
          onPress={onPressHandler()}
          iconName="chevron-right"
          iconType="material"
        />
        <Button
          title="Notifications"
          onPress={onPressHandler()}
          iconName="chevron-right"
          iconType="material"
        />
        <Button
          title="Reminders"
          onPress={onPressHandler()}
          iconName="chevron-right"
          iconType="material"
        />
        <Button
          title="Accomodation"
          onPress={onPressHandler()}
          iconName="chevron-right"
          iconType="material"
        />
        <Button
          title="Flights"
          onPress={onPressHandler()}
          iconName="chevron-right"
          iconType="material"
        />
        <Button
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
