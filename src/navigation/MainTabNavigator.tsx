import React from 'react';
import { Text } from 'react-native';
import { theme } from '../styles/theme';
import { FCLocalized } from '../localization/FCLocalized';
import { Icon } from '@rneui/base';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  CurrentTripScreen,
  HomeScreen,
  SettingsScreen,
  TripsScreen,
} from '../screens';

const topTab = createMaterialTopTabNavigator();

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

export const MainTabNavigator = () => {
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
        component={TripsScreen}
        options={getMainTabScreenOptions('book', 'Book')}
      />
      <topTab.Screen
        name="Current trip"
        component={CurrentTripScreen}
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
