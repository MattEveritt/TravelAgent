import React, {useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {TripButton, ScreenContainer} from '../components/travelUI';
import {setSignOut} from '../redux/auth/authSlice';

export const SettingsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const onPressHandler = useCallback(value => {
    navigation.navigate(value);
    console.log('hey');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(setSignOut());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderSettingsScreen = useCallback(
    () => (
      <>
        <Text style={styles.titleText}>SettingsScreen</Text>
        <View style={styles.tripButtonContainer}>
          <TripButton
            title="Profile"
            onPress={() => onPressHandler('ProfileScreen')}
            iconName="chevron-right"
            iconType="material"
          />
          <TripButton
            title="Travellers"
            onPress={() => onPressHandler('TravellersScreen')}
            iconName="chevron-right"
            iconType="material"
          />
          <TripButton
            title="Account"
            onPress={() => onPressHandler('AccountScreen')}
            iconName="chevron-right"
            iconType="material"
          />
          <TripButton
            title="Notifications"
            onPress={() => onPressHandler('NotificationsSettings')}
            iconName="chevron-right"
            iconType="material"
          />
          <TripButton
            title="Reminders"
            onPress={() => onPressHandler('RemindersSettings')}
            iconName="chevron-right"
            iconType="material"
          />
          <TripButton
            title="Accomodation"
            onPress={() => onPressHandler('AccomodationSettings')}
            iconName="chevron-right"
            iconType="material"
          />
          <TripButton
            title="Flights"
            onPress={() => onPressHandler('FlightsSettings')}
            iconName="chevron-right"
            iconType="material"
          />
          <TripButton
            title="Logout"
            onPress={handleLogout}
            iconName="chevron-right"
            iconType="material"
          />
        </View>
      </>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return <ScreenContainer renderContent={renderSettingsScreen} />;
};

const styles = StyleSheet.create({
  tripButtonContainer: {
    width: '100%',
  },
  titleText: {
    alignSelf: 'center',
  },
});
