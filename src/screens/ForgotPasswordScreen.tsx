import { StyleSheet, View, Alert } from 'react-native'
import React, {useCallback, useState} from 'react'
import { useDispatch } from 'react-redux'
import { resetPassword } from '../redux'
import { ScreenContainer, TripButton, TripText, TripTextInput } from '../components'
import { validateEmail } from '../utils/inputValidators'

export const ForgotPasswordScreen = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState();
    const [isValidEmail, setIsValidEmail] = useState();

    const handleOnPress = useCallback(async () => {
        const isValid = validateEmail(value);
        if (isValid) {
            // @ts-expect-error TS(2345): Argument of type 'true' is not assignable to param... Remove this comment to see the full error message
            setIsValidEmail(true);
            // @ts-expect-error TS(2345): Argument of type 'AsyncThunkAction<any, void, Asyn... Remove this comment to see the full error message
            const res = await dispatch(resetPassword(value)).unwrap()
            if (res === 200) {
                Alert.alert('' ,`Reset password link sent to ${value}`)
            } else {
                Alert.alert('', `The email address ${value}, does not belong to any registered account`)
            }
        } else {
            // @ts-expect-error TS(2345): Argument of type 'false' is not assignable to para... Remove this comment to see the full error message
            setIsValidEmail(false);
        }
    }, [value]);

    // @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
    const renderForgotPasswordScreen = useCallback(() => (
        <View>
            <TripText text={'please enter your email address so that we can send you a new password link'} />
            <TripTextInput value={value} onChangeText={setValue} placeHolder={'email'} />
            <TripButton title={'Send link'} onPress={handleOnPress} />
            {isValidEmail === false && (
                <TripText text={'Please enter a valid email adress'} style={styles.loginErrorText} />
            )}
        </View>
    ));

  return <ScreenContainer renderContent={renderForgotPasswordScreen}/>
}

const styles = StyleSheet.create({
    loginErrorText: {
        paddingVertical: 20,
        color: 'red',
        textAlign: 'center',
      },
})