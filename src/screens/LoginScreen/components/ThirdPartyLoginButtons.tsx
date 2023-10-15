import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TripButton, TripText } from '../../../components';
import { theme } from '../../../styles/theme';

export const ThirdPartyLoginButtons = () => {
  return (
    <>  
      <View style={styles.separator}>
        <TripText text={'or'} style={styles.separatorText}/>
      </View>
      <View>
        <TripButton title="Continue with Google" onPress={() => console.log('Google login')} isWhite/>
        <TripButton title="Continue with Facebook" onPress={() => console.log('Facebook login')} isWhite/>
        <TripButton title="Continue with Apple" onPress={() => console.log('Apple login')} isWhite/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1, 
    backgroundColor: theme.LIGHT_GREY, 
    marginVertical: 20,
  },
  separatorText: {
    paddingHorizontal: 10, 
    height: 20, 
    top: -10, 
    alignSelf: 'center', 
    backgroundColor: theme.WHITE
  },
});