import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { TripButton, TripText } from '../../../components';
import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { setIsInApp, useAppDispatch } from '../../../redux';

export const OnboardingButtons = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<any>>();

  const onPressHandler = (route: string) => {
    navigation.navigate(route);
  };

  const skipLoginHandler = () => {
    dispatch(setIsInApp(true));
  };

  return (
    <View style={styles.container}>
      <TripButton title={'Login'} onPress={() => onPressHandler('Login')} />
      <TripButton title={'Explore'} onPress={() => skipLoginHandler()} isWhite={true}/>
      <TouchableOpacity onPress={() => onPressHandler('Register')}>
        <TripText text={'Register'} style={styles.registerButtonText} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  registerButtonText: {
    marginVertical: 20,
    alignSelf: 'center',
    fontSize: 18,
  }
});