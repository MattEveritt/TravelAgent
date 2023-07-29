import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
  const [isValidInput, setIsValidInput] = useState(true);
  const logInError = useSelector(state => (state as any).userAuth.logInError);

  const handleLogin = useCallback(() => {
    if (!userNameInput || !passwordInput) {
      setIsValidInput(false);
    } else {
      if (isValidInput === false) {
        setIsValidInput(true)
      }
      runLogin(userNameInput, passwordInput);
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userNameInput, passwordInput, isValidInput]);

  const handleRegister = useCallback(() => {
    // @ts-expect-error TS(2769): No overload matches this call.
    navigation.navigate('Register');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleForgotPassword = useCallback(() => {
    // @ts-expect-error TS(2769): No overload matches this call.
    navigation.navigate('Forgot Password');
  }, [])

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
        <TripButton title="Register" onPress={handleRegister} />
        <Text style={styles.loginErrorText}>
          {isValidInput === false ? 'Please input a valid username and password' : null}
          {logInError && isValidInput && logInError}
        </Text>
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [passwordInput, userNameInput, logInError, isValidInput],
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
  forgotPasswordContainer: {
    width: '100%', 
    height: '50%', 
    alignItems:'center', 
    justifyContent: 'center',
  }
});
