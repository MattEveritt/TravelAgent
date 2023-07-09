import React, {useCallback, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useLogin} from '../hooks/useLogin';
import {
  ScreenContainer,
  TripButton,
  TripTextInput,
} from '../components/travelUI';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const {runLogin} = useLogin();
  const [userNameInput, setUserNameInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const logInError = useSelector(state => state.userAuth.logInError);

  const handleLogin = useCallback(() => {
    runLogin(userNameInput, passwordInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userNameInput, passwordInput]);

  const handleRegister = useCallback(() => {
    navigation.navigate('Register');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderLoginScreen = useCallback(
    () => (
      <>
        <Text style={styles.titleText}>TRAVELAPP</Text>
        <TripTextInput
          value={userNameInput}
          onChangeText={setUserNameInput}
          placeHolder="Username"
        />
        <TripTextInput
          value={passwordInput}
          onChangeText={setPasswordInput}
          placeHolder="Password"
        />
        <TripButton title="Login" onPress={handleLogin} />
        {logInError ? (
          <Text style={styles.loginErrorText}>{logInError}</Text>
        ) : null}
        <TripButton title="Register" onPress={handleRegister} />
      </>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [passwordInput, userNameInput, logInError],
  );

  return <ScreenContainer renderContent={renderLoginScreen} />;
};

const styles = StyleSheet.create({
  titleText: {
    textAlign: 'center',
    paddingBottom: 50,
  },
  loginErrorText: {
    paddingVertical: 20,
    color: 'red',
    textAlign: 'center',
  },
});
