import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {selectIsLoggedIn} from '../redux/auth/authSlice';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack, AuthStack} from './navigator';

export const Router = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return (
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    );
  }
};

export default Router;
