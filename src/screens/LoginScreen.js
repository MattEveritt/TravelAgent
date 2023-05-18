import React, {useCallback, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {setSignIn} from '../redux/auth/authSlice';
import {
  ScreenContainer,
  TripButton,
  TripTextInput,
} from '../components/travelUI';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const [userNameInput, setUserNameInput] = useState();
  const [passwordInput, setPasswordInput] = useState();

  const handleLogin = useCallback(() => {
    const user = {
      isLoggedIn: true,
      email: 'jdoe@test.com',
      userName: 'johnDoe',
    };

    dispatch(setSignIn(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userNameInput, passwordInput]);

  const renderLoginScreen = useCallback(
    () => (
      <>
        <Text style={styles.titleText}>TRAVELAPP</Text>
        <TripTextInput
          value={userNameInput}
          onChangeText={setUserNameInput}
          placeHolder="Password"
        />
        <TripTextInput
          value={passwordInput}
          onChangeText={setPasswordInput}
          placeHolder="Username"
        />
        <TripButton title="Login" onPress={handleLogin} />
      </>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [passwordInput, userNameInput],
  );

  return <ScreenContainer renderContent={renderLoginScreen} />;
};

const styles = StyleSheet.create({
  titleText: {
    textAlign: 'center',
    paddingBottom: 50,
  },
});
