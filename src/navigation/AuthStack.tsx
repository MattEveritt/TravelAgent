import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  RegisterScreen,
  LoginScreen,
  OnboardingScreen,
  ForgotPasswordScreen,
} from '../screens';
import { useSelector } from 'react-redux';
import { selectShowOnboarding } from '../redux';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  const showOnboarding = useSelector(selectShowOnboarding());

  return (
    <Stack.Navigator>
      {showOnboarding && (
        <Stack.Screen
          options={{ headerShown: false }}
          name="Onboarding"
          component={OnboardingScreen}
        />
      )}
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="Loading screen"
        component={LoadingScreen}
      /> */}
      <Stack.Group>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Forgot Password"
          component={ForgotPasswordScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
