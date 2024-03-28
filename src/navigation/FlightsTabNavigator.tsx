import React, { memo, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  ChangesAndCancellationsScreen,
  FlightsConfirmationScreen,
  FlightsSummaryScreen,
  LuggageAndInsuranceScreen,
  SelectSeatsScreen,
} from '../screens';
import { StyleSheet, View } from 'react-native';
import { Icon } from '@rneui/base';
import { TripText } from '../components';
import { theme } from '../styles/theme';
import { FCLocalized } from '../localization/FCLocalized';

const bottomTab = createMaterialTopTabNavigator();

const _TabBarLabel: React.FC<{
  focused: boolean;
  screen: string;
  complete: boolean;
}> = ({ focused, complete, screen }) => {
  if (focused) {
    return (
      <View style={styles.tabBarIconContainer}>
        <Icon
          name="checkbox-blank-outline"
          type="material-community"
          color={theme.BLACK}
        />
        <TripText style={{ color: theme.BLACK }} text={FCLocalized(screen)} />
      </View>
    );
  }
  if (complete) {
    return (
      <View style={styles.tabBarIconContainer}>
        <Icon
          name="checkbox-marked-outline"
          type="material-community"
          color={theme.PRIMARY_COLOR}
        />
        <TripText
          style={{ color: theme.SECONDARY_COLOR }}
          text={FCLocalized(screen)}
        />
      </View>
    );
  }

  return (
    <View style={styles.tabBarIconContainer}>
      <Icon
        name="checkbox-blank-outline"
        type="material-community"
        color={theme.SECONDARY_COLOR}
      />
      <TripText
        style={{ color: theme.SECONDARY_COLOR }}
        text={FCLocalized(screen)}
      />
    </View>
  );
};

const TabBarLabel = memo(_TabBarLabel);

const getLabelOptions = (
  screen: string,
  index: number,
  focusedIndex: number,
) => ({
  tabBarLabel: ({ focused }: { focused: boolean }) => {
    const complete = index < focusedIndex;
    return (
      <TabBarLabel focused={focused} complete={complete} screen={screen} />
    );
  },
});

export const FlightsTabNavigator = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  return (
    <bottomTab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarIndicatorStyle: {
          height: 0,
        },
        tabBarShowIcon: true,
        swipeEnabled: false,
      })}
      tabBarPosition="bottom">
      <bottomTab.Screen
        name="FlightsSummary"
        component={FlightsSummaryScreen}
        options={getLabelOptions('Flight', 1, focusedIndex)}
        initialParams={{ setFocusedIndex: setFocusedIndex }}
      />
      <bottomTab.Screen
        name="LuggageAndInsurance"
        component={LuggageAndInsuranceScreen}
        options={getLabelOptions('Luggage', 2, focusedIndex)}
        initialParams={{ setFocusedIndex: setFocusedIndex }}
      />
      <bottomTab.Screen
        name="ChangesAndCancellations"
        component={ChangesAndCancellationsScreen}
        options={getLabelOptions('Changes', 3, focusedIndex)}
        initialParams={{ setFocusedIndex: setFocusedIndex }}
      />
      <bottomTab.Screen
        name="SeatSelection"
        component={SelectSeatsScreen}
        options={getLabelOptions('Seats', 4, focusedIndex)}
        initialParams={{ setFocusedIndex: setFocusedIndex }}
      />
      <bottomTab.Screen
        name="FlightsConfirmation"
        component={FlightsConfirmationScreen}
        options={getLabelOptions('Confirm', 5, focusedIndex)}
        initialParams={{ setFocusedIndex: setFocusedIndex }}
      />
    </bottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarIconContainer: {
    height: '100%',
  },
});
