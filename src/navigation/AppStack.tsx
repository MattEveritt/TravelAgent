import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  OnboardingScreen,
  SplashScreen,
  AccomodationSettingsScreen,
  AccountScreen,
  FlightSettingsScreen,
  NotificationsSettingsScreen,
  ReminderSettingsScreen,
  TravellersScreen,
  CreateTripScreen,
  SeatMapScreen,
} from '../screens';
import { FlightsTabNavigator } from './FlightsTabNavigator';
import { MainTabNavigator } from './MainTabNavigator';
import { BookingTabNavigator } from './BookingTabNavigator';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Tab navigator"
          component={MainTabNavigator}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Booking navigator"
          component={BookingTabNavigator}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Onboarding screen"
          component={OnboardingScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash screen"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CreateTripScreen"
          component={CreateTripScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TravellersScreen"
          component={TravellersScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AccountScreen"
          component={AccountScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="NotificationsSettings"
          component={NotificationsSettingsScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RemindersSettings"
          component={ReminderSettingsScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AccomodationSettings"
          component={AccomodationSettingsScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="FlightsSettings"
          component={FlightSettingsScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="FlightsTabNavigator"
          component={FlightsTabNavigator}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SeatMapScreen"
          component={SeatMapScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
