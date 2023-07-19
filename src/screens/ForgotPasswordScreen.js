import { StyleSheet, View, Alert } from 'react-native'
import React, {useCallback, useState} from 'react'
import { useDispatch } from 'react-redux'
import { resetPassword } from '../redux'
import { ScreenContainer, TripButton, TripText, TripTextInput } from '../components'

export const ForgotPasswordScreen = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState();
    const [isValidEmail, setIsValidEmail] = useState();

    const validateEmail = useCallback((value) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(value) === false) {
            setIsValidEmail(false);
            return false;
        }
        else {
            setIsValidEmail(true);
            return true;
        }
    }, []);

    const handleOnPress = useCallback(async () => {
        const isValid = validateEmail(value);
        if (isValid) {
            const res = await dispatch(resetPassword(value)).unwrap()
            if (res === 200) {
                Alert.alert('' ,`Reset password link sent to ${value}`)
            } else {
                Alert.alert('', `The email address ${value}, does not belong to any registered account`)
            }
        }
    }, [value]);

    const renderForgotPasswordScreen = useCallback(() => (
        <View>
            <TripText text={'please enter your email address so that we can send you a new password link'} />
            <TripTextInput value={value} onChangeText={setValue} placeHolder={'email'} />
            <TripButton title={'Send link'} onPress={handleOnPress} />
            {isValidEmail === false && (
                <TripText text={'please enter a valid email adress'} color={'red'}/>
            )}
        </View>
    ));

  return <ScreenContainer renderContent={renderForgotPasswordScreen}/>
}

const styles = StyleSheet.create({

})