import { StyleSheet } from 'react-native';
import React from 'react';
import { Card, TripButton, TripText } from '../travelUI';
import { setIsInApp, useAppDispatch } from '../../redux';

export const RequestUserLogin = () => {
  const dispatch = useAppDispatch();

  const signInHandler = () => {
    dispatch(setIsInApp(false));
  };

  return (
    <Card extraStyles={styles.container}>
      <TripText style={styles.mainText} text="Sign in to your account" />
      <TripText
        style={styles.subText}
        text="You will see all of your saved trips and be able to save a new trip to continue with later"
      />
      <TripButton title="Sign in" onPress={signInHandler} />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: { textAlign: 'center', fontSize: 20 },
  subText: { textAlign: 'center', paddingTop: 16 },
});
