import { StyleSheet, View, Alert, Image } from 'react-native';
import React, {useCallback, useState} from 'react';
import { useDispatch } from 'react-redux';
import { resetPassword, useAppDispatch } from '../redux';
import { ScreenContainer, TripButton, TripText, TripTextInput } from '../components';
import { validateEmail } from '../utils/inputValidators';
import { theme } from '../styles/theme';

export const ForgotPasswordScreen = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleOnPress = async () => {
    const isValid = validateEmail(value);
    if (isValid) {
      setIsValidEmail(true);
      const res = await dispatch(resetPassword(value)).unwrap();
      if (res === 200) {
        Alert.alert('' ,`Reset password link sent to ${value}`);
      } else {
        Alert.alert('', `The email address ${value}, does not belong to any registered account`);
      }
    } else {
      setIsValidEmail(false);
    }
  };

  return (
    <ScreenContainer headerDisabled>
      <View style={styles.screenContainer}>
        <Image 
          style={styles.onboardingImg} 
          source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ihW2UGUNhPn9pkXwXNSA2SFI0HXT8F6BXeT3HDPjX_tHBJKWBYBcAe27LTpOrJa8ItQ&usqp=CAU'}}
        />
        <TripText 
          text={'Please enter your email address so that we can send you a new password link'} 
          style={styles.titleText} 
        />
        <View>
          <TripTextInput value={value} onChangeText={setValue} placeHolder={'email'} />
          <TripButton title={'Send link'} onPress={handleOnPress} />
        </View>
        <View style={{height: 60}}>
          {isValidEmail === false && (
            <TripText text={'Please enter a valid email adress'} style={styles.loginErrorText} />
          )}
        </View>

      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  loginErrorText: {
    paddingVertical: 20,
    color: theme.RED_ERROR,
    textAlign: 'center',
    fontSize: 16
  },
  titleText: {
    fontSize: 18,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  onboardingImg: {
    marginTop: 48,
    height: 127,
    width: 127,
    alignSelf: 'center'
  },
});