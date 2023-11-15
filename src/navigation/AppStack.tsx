import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from '@rneui/base';

import {
  HomeScreen,
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
  CreateTripScreen,
} from '../screens';
import { theme } from '../styles/theme';
import { Text, View } from 'react-native';
import { FCLocalized } from '../localization/FCLocalized';

const topTab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const getMainTabScreenOptions = (iconName: string, labelText: string) => ({
  tabBarLabel: ({ focused }: { focused: boolean }) => (
    <Text style={{ color: focused ? theme.PRIMARY_COLOR : theme.BLACK }}>
      {FCLocalized(labelText)}
    </Text>
  ),
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <Icon
      name={iconName}
      type="material-community"
      color={focused ? theme.PRIMARY_COLOR : theme.BLACK}
    />
  ),
});

const BottomTabNavigator = () => {
  return (
    <topTab.Navigator
      screenOptions={() => ({
        tabBarIndicatorStyle: {
          height: 0,
        },
        tabBarActiveTintColor: theme.PRIMARY_COLOR,
        tabBarShowIcon: true,
      })}
      tabBarPosition="bottom">
      <topTab.Screen
        name="Explore"
        component={HomeScreen}
        options={getMainTabScreenOptions('compass', 'Explore')}
      />
      <topTab.Screen
        name="Book"
        component={TripPlanningScreen}
        options={getMainTabScreenOptions('book', 'Book')}
      />
      <topTab.Screen
        name="Current trip"
        component={YourTripScreen}
        options={getMainTabScreenOptions('airplane', 'Current trip')}
      />
      <topTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={getMainTabScreenOptions('account-cog', 'Settings')}
      />
    </topTab.Navigator>
  );
};

const TabBarLabel: React.FC<{
  focused: boolean;
  screen: string;
  icon: string;
}> = ({ focused, screen, icon }) => {
  return (
    <View style={{ height: '100%' }}>
      <Icon
        name={icon}
        type="material-community"
        color={focused ? theme.BLACK : theme.SECONDARY_COLOR}
      />
      <Text style={{ color: focused ? theme.BLACK : theme.SECONDARY_COLOR }}>
        {FCLocalized(screen)}
      </Text>
    </View>
  );
};

const getBookingTabLabelOptions = (screen: string, icon: string) => ({
  tabBarLabel: ({ focused }: { focused: boolean }) => (
    <TabBarLabel focused={focused} screen={screen} icon={icon} />
  ),
});

const BookingNavigator = () => {
  return (
    <topTab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarIndicatorStyle: {
          height: 0,
        },
        tabBarShowIcon: true,
      })}
      tabBarPosition="bottom">
      <topTab.Screen
        name="Flights"
        component={FlightsScreen}
        options={getBookingTabLabelOptions('Flights', 'airplane')}
      />
      <topTab.Screen
        name="Hotels"
        component={AccomodationScreen}
        options={getBookingTabLabelOptions('Hotels', 'home')}
      />
      <topTab.Screen
        name="Transport"
        component={TransportScreen}
        options={getBookingTabLabelOptions('Transport', 'bus')}
      />
      <topTab.Screen
        name="Confirm"
        component={ConfirmationScreen}
        options={getBookingTabLabelOptions('Confirm', 'check')}
      />
    </topTab.Navigator>
  );
};

export const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Tab navigator"
          component={BottomTabNavigator}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Booking navigator"
          component={BookingNavigator}
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
          name="ProfileScreen"
          component={ProfileScreen}
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
      </Stack.Group>
    </Stack.Navigator>
  );
};
