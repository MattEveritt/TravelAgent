import React from 'react';
import { RequestUserLogin, ScreenContainer, TripText } from '../components';
import { FCLocalized } from '../localization/FCLocalized';
import { selectIsLoggedIn, useAppSelector } from '../redux';
import { StyleSheet, View } from 'react-native';

export const CurrentTripScreen = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn());

  return (
    <ScreenContainer headerTitle={FCLocalized('Current trip')}>
      {isLoggedIn ? (
        <TripText text={FCLocalized('Get details of your upcoming trip')} />
      ) : (
        <View style={styles.requestUserLoginWrapper}>
          <RequestUserLogin
            text={FCLocalized(
              'Sign in to keep track of any current trips you are about to go on',
            )}
          />
        </View>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  requestUserLoginWrapper: {
    flex: 1,
  },
});
