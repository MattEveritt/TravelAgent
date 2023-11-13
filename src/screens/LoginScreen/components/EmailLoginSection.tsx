import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useLogin } from '../../../hooks/useLogin';
import { TripTextInput, TripButton, TripText } from '../../../components';
import { theme } from '../../../styles/theme';

export const EmailLoginSection = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const { runLogin } = useLogin();
  const [userNameInput, setUserNameInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [isValidInput, setIsValidInput] = useState(true);
  const logInError = useSelector(state => (state as any).userAuth.logInError);

  const handleLogin = () => {
    if (!userNameInput || !passwordInput) {
      setIsValidInput(false);
    } else {
      if (isValidInput === false) {
        setIsValidInput(true);
      }
      runLogin(userNameInput, passwordInput);
    }
  };

  const onPressHandler = (route: string) => {
    navigation.navigate(route);
  };

  return (
    <>
      <View>
        <TripTextInput
          value={userNameInput}
          onChangeText={setUserNameInput}
          placeHolder="Username"
        />
        <TripTextInput
          value={passwordInput}
          onChangeText={setPasswordInput}
          placeHolder="Password"
          secureTextEntry
        />
        <TripButton title="Login" onPress={handleLogin} />
        <TripText
          style={styles.loginErrorText}
          text={
            isValidInput === false
              ? 'Please input a valid username and password'
              : logInError && logInError
          }
        />
      </View>
      <TouchableOpacity onPress={() => onPressHandler('Forgot Password')}>
        <TripText
          text={'Forgot password?'}
          style={styles.forgotPasswordButtonText}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  loginErrorText: {
    color: theme.RED_ERROR,
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
  forgotPasswordButtonText: {
    paddingVertical: 10,
    alignSelf: 'center',
    fontSize: 18,
  },
});
