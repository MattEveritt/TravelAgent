import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {selectIsLoggedIn, selectIsBooking} from '../redux';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';
import {AppStack} from './AppStack';

export const Router = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default Router;
