import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon, Text } from '@rneui/base';
import { StyleSheet, View } from 'react-native';
import { theme } from '../styles/theme';
import { FCLocalized } from '../localization/FCLocalized';
import {
  AccomodationScreen,
  ConfirmationScreen,
  FlightsScreen,
  TransportScreen,
} from '../screens';

const topTab = createMaterialTopTabNavigator();

const TabBarLabel: React.FC<{
  focused: boolean;
  screen: string;
  icon: string;
}> = ({ focused, screen, icon }) => {
  return (
    <View style={styles.tabBarIconContainer}>
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

export const BookingTabNavigator = () => {
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

const styles = StyleSheet.create({
  tabBarIconContainer: {
    height: '100%',
  },
});
