import React, { useState } from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import { useRegister } from '../hooks/useRegister';
import {
  ScreenContainer,
  TripButton,
  TripText,
  TripTextInput,
} from '../components/travelUI';
import { validateEmail } from '../utils/inputValidators';
import { theme } from '../styles/theme';
import { useNavigation, NavigationProp } from '@react-navigation/native';

export const RegisterScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const { runRegister } = useRegister();
  const [emailInput, setEmailInput] = useState();
  const [userNameInput, setUserNameInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [error, setError] = useState('');

  const handleRegister = async () => {
    const isEmailValid = validateEmail(emailInput);
    if (!isEmailValid) {
      setError('Please enter a valid email address');
    } else if (!userNameInput || !passwordInput) {
      setError('Please enter a valid username and password');
    } else {
      const res = await runRegister(emailInput, userNameInput, passwordInput);
      if (res === 400) {
        setError('This email address is already registered to an account');
      }
    }
  };

  return (
    <ScreenContainer headerDisabled>
      <KeyboardAvoidingView behavior="padding" style={styles.screenContainer}>
        <Image
          style={styles.onboardingImg}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ihW2UGUNhPn9pkXwXNSA2SFI0HXT8F6BXeT3HDPjX_tHBJKWBYBcAe27LTpOrJa8ItQ&usqp=CAU',
          }}
        />
        <View>
          <TripText text={'Create account'} style={styles.titleText} />
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
        </View>

        <TripText text={error && error} style={styles.errorText} />
        <TouchableOpacity
          style={styles.loginBtnSection}
          onPress={() => navigation.navigate('Login')}>
          <TripText
            text={'Already have an account? '}
            style={styles.loginText}
          />
          <TripText text={'Login'} style={styles.loginBtnText} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  titleText: {
    fontSize: 20,
    marginBottom: 20,
  },
  errorText: {
    paddingVertical: 20,
    color: 'red',
    textAlign: 'center',
    fontSize: 16,
  },
  onboardingImg: {
    marginTop: 48,
    height: 127,
    width: 127,
    alignSelf: 'center',
  },
  loginBtnSection: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  loginText: {
    paddingVertical: 10,
    alignSelf: 'center',
    fontSize: 18,
  },
  loginBtnText: {
    paddingVertical: 10,
    alignSelf: 'center',
    fontSize: 18,
    color: theme.PRIMARY_COLOR,
  },
});
