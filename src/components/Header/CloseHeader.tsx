import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';
import { Icon } from '@rneui/base';
import { theme } from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { TripText } from '../travelUI/TripText';
import { HEADER_HEIGHT_PERCENTAGE, HEADER_COLOR } from './constants';

const screenWidth = Dimensions.get('screen').width;

export const CloseHeader = ({
  headerDisabled,
  titleText,
  onBackPressExtra,
}: {
  headerDisabled: boolean;
  titleText: string;
  onBackPressExtra?: () => void | undefined;
}) => {
  const navigation = useNavigation();

  if (headerDisabled) return null;

  const backButtonHandler = () => {
    if (onBackPressExtra) {
      onBackPressExtra();
      return;
    }
    navigation.goBack();
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => backButtonHandler()}>
        <Icon name="close" type="ionicon" color={theme.BLACK} />
      </TouchableOpacity>
      <TripText text={titleText} style={styles.title} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    width: '15%',
  },
  title: {
    paddingRight: (screenWidth / 100) * 15,
    width: '85%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerContainer: {
    height: HEADER_HEIGHT_PERCENTAGE,
    width: '100%',
    backgroundColor: HEADER_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
