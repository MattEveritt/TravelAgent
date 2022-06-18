import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {
  HomeScreen,
  LoadingScreen,
  LoginScreen,
  OnboardingScreen,
  SettingsScreen,
  SplashScreen,
  TripPlanningScreen,
  YourTripScreen,
} from '../screens';

const topTab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const TopTabNavigator = () => {
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

const ScreenStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group>
        {/* <Stack.Screen
          options={{headerShown: false}}
          name="Loading screen"
          component={LoadingScreen}
        /> */}
        {/* <Stack.Screen
          options={{headerShown: false}}
          name="Login screen"
          component={LoginScreen}
        /> */}
        <Stack.Screen
          options={{headerShown: false}}
          name="Tab navigator"
          component={TopTabNavigator}
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
      </Stack.Group>
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <ScreenStack />
    </NavigationContainer>
  );
};

export default Navigator;
