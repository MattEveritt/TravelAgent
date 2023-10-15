import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {
  HomeScreen,
  LoadingScreen,
  RegisterScreen,
  LoginScreen,
  OnboardingScreen,
  SettingsScreen,
  SplashScreen,
  TripPlanningScreen,
  YourTripScreen,
  AccomodationSettingsScreen,
  AccountScreen,
  FlightSettingsScreen,
  NotificationsSettingsScreen,
  ProfileScreen,
  ReminderSettingsScreen,
  TravellersScreen,
  FlightsScreen,
  ConfirmationScreen,
  AccomodationScreen,
  TransportScreen,
  ForgotPasswordScreen,
} from '../screens';

const topTab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();


export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Onboarding"
        component={OnboardingScreen}
      />
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="Loading screen"
        component={LoadingScreen}
      /> */}
      <Stack.Group>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Forgot Password"
          component={ForgotPasswordScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

