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

const BottomTabNavigator = () => {
  return (
    <topTab.Navigator
      screenOptions={({ route }) => ({
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
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="explore"
              color={focused ? theme.PRIMARY_COLOR : theme.BLACK}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ color: focused ? theme.PRIMARY_COLOR : theme.BLACK }}>
              {FCLocalized('Explore')}
            </Text>
          ),
        }}
      />
      <topTab.Screen
        name="Book"
        component={TripPlanningScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="airplane"
              type="material-community"
              color={focused ? theme.PRIMARY_COLOR : theme.BLACK}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ color: focused ? theme.PRIMARY_COLOR : theme.BLACK }}>
              {FCLocalized('Book')}
            </Text>
          ),
        }}
      />
      <topTab.Screen
        name="Current trip"
        component={YourTripScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="format-list-bulleted"
              type="material-community"
              color={focused ? theme.PRIMARY_COLOR : theme.BLACK}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ color: focused ? theme.PRIMARY_COLOR : theme.BLACK }}>
              {FCLocalized('Current trip')}
            </Text>
          ),
        }}
      />
      <topTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="account-cog"
              type="material-community"
              color={focused ? theme.PRIMARY_COLOR : theme.BLACK}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ color: focused ? theme.PRIMARY_COLOR : theme.BLACK }}>
              {FCLocalized('Settings')}
            </Text>
          ),
        }}
      />
    </topTab.Navigator>
  );
};

const TabBarLabel = ({
  focused,
  screen,
  icon,
}: {
  focused: boolean;
  screen: string;
  icon: string;
}) => {
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

const BookingNavigator = () => {
  return (
    <topTab.Navigator
      screenOptions={({ route }) => ({
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
        options={{
          tabBarLabel: ({ focused, children }) => (
            <TabBarLabel focused={focused} screen={children} icon="airplane" />
          ),
        }}
      />
      <topTab.Screen
        name="Hotels"
        component={AccomodationScreen}
        options={{
          tabBarLabel: ({ focused, children }) => (
            <TabBarLabel focused={focused} screen={children} icon="home" />
          ),
        }}
      />
      <topTab.Screen
        name="Transport"
        component={TransportScreen}
        options={{
          tabBarLabel: ({ focused, children }) => (
            <TabBarLabel focused={focused} screen={children} icon="car" />
          ),
        }}
      />
      <topTab.Screen
        name="Confirm"
        component={ConfirmationScreen}
        options={{
          tabBarLabel: ({ focused, children }) => (
            <TabBarLabel
              focused={focused}
              screen={children}
              icon="format-list-checks"
            />
          ),
        }}
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
