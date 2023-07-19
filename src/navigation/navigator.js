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

const BottomTabNavigator = () => {
  return (
    <topTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInActiveTintColor: 'orange',
        tabBarIndicatorStyle: {
          height: 0,
        },
        tabBarShowIcon: true,
      })}
      tabBarPosition="bottom">
      <topTab.Screen name="Home" component={HomeScreen} />
      <topTab.Screen name="Trip Plan" component={TripPlanningScreen} />
      <topTab.Screen name="Your Trip" component={YourTripScreen} />
      <topTab.Screen name="Settings" component={SettingsScreen} />
    </topTab.Navigator>
  );
};

const BookingNavigator = () => {
  return (
    <topTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInActiveTintColor: 'orange',
        tabBarIndicatorStyle: {
          height: 0,
        },
        tabBarShowIcon: true,
      })}
      tabBarPosition="bottom">
      <topTab.Screen name="Flights" component={FlightsScreen} />
      <topTab.Screen name="Accomodation" component={AccomodationScreen} />
      <topTab.Screen name="Transport" component={TransportScreen} />
      <topTab.Screen name="Confirmation" component={ConfirmationScreen} />
    </topTab.Navigator>
  );
};

export const AuthStack = () => {
  return (
    <Stack.Navigator>
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

export const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group>
        <Stack.Screen
          options={{headerShown: false}}
          name="Tab navigator"
          component={BottomTabNavigator}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Booking navigator"
          component={BookingNavigator}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Onboarding screen"
          component={OnboardingScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash screen"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ProfileScreen"
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="TravellersScreen"
          component={TravellersScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AccountScreen"
          component={AccountScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="NotificationsSettings"
          component={NotificationsSettingsScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="RemindersSettings"
          component={ReminderSettingsScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AccomodationSettings"
          component={AccomodationSettingsScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="FlightsSettings"
          component={FlightSettingsScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
