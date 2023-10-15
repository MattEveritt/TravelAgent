import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { ScreenContainer, TripButton, TripText } from '../../../components'
import React from 'react'
import { useNavigation, NavigationProp } from '@react-navigation/native'

export const OnboardingButtons = () => {
    const navigation = useNavigation<NavigationProp<any>>();

    const onPressHandler = (route: string) => {
        navigation.navigate(route);
    };

  return (
    <View style={styles.container}>
        <TripButton title={'Login'} onPress={() => onPressHandler('Login')} />
        <TripButton title={'Explore'} onPress={() => console.log('skip')} isWhite={true}/>
        <TouchableOpacity onPress={() => onPressHandler('Register')}>
            <TripText text={'Register'} style={styles.registerButtonText} />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    registerButtonText: {
        marginVertical: 20,
        alignSelf: 'center',
        fontSize: 18,
    }
})