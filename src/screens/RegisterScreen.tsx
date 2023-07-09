import React, {useCallback, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {useRegister} from '../hooks/useRegister';
import {
  ScreenContainer,
  TripButton,
  TripTextInput,
} from '../components/travelUI';

export const RegisterScreen = () => {
  const {runRegister} = useRegister();
  const [emailInput, setEmailInput] = useState();
  const [userNameInput, setUserNameInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const logInError = useSelector(state => state.userAuth.logInError);

  const handleRegister = () => {
    runRegister(emailInput, userNameInput, passwordInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const renderRegisterScreen = useCallback(
    () => (
      <>
        <Text style={styles.titleText}>TRAVELAPP</Text>
        <TripTextInput
          value={emailInput}
          onChangeText={setEmailInput}
          placeHolder="Email"
        />
        <TripTextInput
          value={userNameInput}
          onChangeText={setUserNameInput}
          placeHolder="UserName"
        />
        <TripTextInput
          value={passwordInput}
          onChangeText={setPasswordInput}
          placeHolder="Password"
        />
        <TripButton title="Register" onPress={handleRegister} />
      </>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [passwordInput, userNameInput, emailInput, logInError],
  );

  return <ScreenContainer renderContent={renderRegisterScreen} />;
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
