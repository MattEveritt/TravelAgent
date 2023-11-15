import React from 'react';
import { RequestUserLogin, ScreenContainer, TripText } from '../components';
import { FCLocalized } from '../localization/FCLocalized';
import { selectIsLoggedIn, useAppSelector } from '../redux';

export const YourTripScreen = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn());

  return (
    <ScreenContainer headerTitle={FCLocalized('Current trip')}>
      {isLoggedIn ? (
        <TripText text={FCLocalized('Get details of your upcoming trip')} />
      ) : (
        <RequestUserLogin
          text={FCLocalized(
            'Sign in to keep track of any current trips you are about to go on',
          )}
        />
      )}
    </ScreenContainer>
  );
};
