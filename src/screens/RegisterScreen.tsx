import React, {useCallback, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {useRegister} from '../hooks/useRegister';
import {
  ScreenContainer,
  TripButton,
  TripText,
  TripTextInput,
} from '../components/travelUI';
import { validateEmail } from '../utils/inputValidators';

export const RegisterScreen = () => {
  const {runRegister} = useRegister();
  const [emailInput, setEmailInput] = useState();
  const [userNameInput, setUserNameInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [error, setError] = useState('');
  const logInError = useSelector(state => state.userAuth.logInError);

  const handleRegister = useCallback(async () => {
    const isEmailValid = validateEmail(emailInput);
    if (!isEmailValid) {
      setError('Please enter a valid email address');
    } else if (!userNameInput || !passwordInput) {
      setError('Please enter a valid username and password')
    } else {
      const res = await runRegister(emailInput, userNameInput, passwordInput);
      if (res === 400) {
        setError('This email address is already registered to an account')
      }
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emailInput, userNameInput, passwordInput]);

  const renderRegisterScreen = useCallback(
    () => (
      <>
        <Text style={styles.titleText}>Faycay</Text>
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
        <TripText text={error && error} style={styles.errorText} />
      </>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [passwordInput, userNameInput, emailInput, logInError, error],
  );

  return <ScreenContainer renderContent={renderRegisterScreen} />;
};

const styles = StyleSheet.create({
  titleText: {
    textAlign: 'center',
    paddingBottom: 50,
  },
  errorText: {
    paddingVertical: 20,
    color: 'red',
    textAlign: 'center',
  },
});
