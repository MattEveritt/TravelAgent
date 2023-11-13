import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsInApp } from '../redux';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';

export const Router = () => {
  const isInApp = useSelector(selectIsInApp());

  if (!isInApp) {
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
