import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { TripButton, ScreenContainer } from '../components/travelUI';
import { setSignOut } from '../redux/auth/authSlice';
import { TripModal } from '../components/travelUI';
import { FCLocalized } from '../localization/FCLocalized';
import {
  selectIsLoggedIn,
  setIsInApp,
  useAppSelector,
  useResetStore,
} from '../redux';

export const SettingsScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { resetStore } = useResetStore();
  const isLoggedIn = useAppSelector(selectIsLoggedIn());
  const [modalVisible, setModalVisible] = useState(false);

  const onPressHandler = (value: any) => {
    navigation.navigate(value);
  };

  const handleSignOut = () => {
    setModalVisible(true);
    resetStore();
  };

  const handleSignIn = () => {
    dispatch(setIsInApp(false));
  };
  const onModalCancelPress = () => {
    setModalVisible(false);
  };

  const onModalOkPress = () => {
    setModalVisible(false);
    dispatch(setSignOut());
  };

  return (
    <ScreenContainer headerDisabled>
      <Text style={styles.titleText}>SettingsScreen</Text>
      <View style={styles.tripButtonContainer}>
        <TripButton
          title="Account"
          onPress={() => onPressHandler('AccountScreen')}
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
        {isLoggedIn ? (
          <TripButton
            title={FCLocalized('Sign out')}
            onPress={() => handleSignOut()}
            iconName="chevron-right"
            iconType="material"
          />
        ) : (
          <TripButton
            title={FCLocalized('Sign in')}
            onPress={() => handleSignIn()}
            iconName="chevron-right"
            iconType="material"
          />
        )}
      </View>
      <TripModal
        modalVisible={modalVisible}
        title={FCLocalized('Sign out')}
        onCancelPress={onModalCancelPress}
        alertText={FCLocalized(
          'If you sign out now you will not get info about current or saved trips. Are you sure you would like to sign out?',
        )}
        onOkPress={onModalOkPress}
        isAlert
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  tripButtonContainer: {
    width: '100%',
  },
  titleText: {
    alignSelf: 'center',
  },
});
