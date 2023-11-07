
import { StyleSheet, Image, View } from 'react-native';
import React from 'react';
import { TripText } from '../../../components';

export const OnboardingInfoScrollView = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.onboardingImg} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ihW2UGUNhPn9pkXwXNSA2SFI0HXT8F6BXeT3HDPjX_tHBJKWBYBcAe27LTpOrJa8ItQ&usqp=CAU'}}/>
      <TripText style={styles.onboardingTitle} text={'OnboardingScreen'}/>
      <TripText style={styles.onboardingText} text={'Get information on transportation purchases online'}/>
      <View style={{width: 10, height: 10, backgroundColor: 'black', borderRadius: 5, alignSelf: 'center', marginTop: 20}}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  onboardingImg: {
    flex: 4,
    marginTop: 48,
    height: 127,
    width: 127,
    alignSelf: 'center'
  },
  screenContainerStyles: {
    paddingVertical: 36
  },
  onboardingTitle: {
    flex: 1,
    marginTop: 48,
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
  },
  onboardingText: {
    flex: 1,
    marginTop: 10,
    fontSize: 14,
    alignSelf: 'center',
  }
});
