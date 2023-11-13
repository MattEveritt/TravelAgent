import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';
import { Icon } from '@rneui/base';
import { TripText } from '../travelUI/TripText';
import { theme } from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { HEADER_COLOR, HEADER_HEIGHT_PERCENTAGE } from './constants';

const screenWidth = Dimensions.get('screen').width;

export const BackHeader = ({
  headerDisabled,
  titleText,
  onBackPressExtra,
}: {
  headerDisabled: boolean;
  titleText: string;
  onBackPressExtra: () => void;
}) => {
  const navigation = useNavigation();

  if (headerDisabled) return null;

  const backButtonHandler = () => {
    if (onBackPressExtra) {
      onBackPressExtra();
    }
    navigation.goBack();
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => backButtonHandler()}>
          <Icon
            name="chevron-back"
            type="ionicon"
            color={theme.BLACK}
            size={30}
          />
        </TouchableOpacity>
        <TripText text={titleText} style={styles.title} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: HEADER_HEIGHT_PERCENTAGE,
    width: '100%',
    backgroundColor: HEADER_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
  },
  buttonContainer: {
    height: '100%',
    alignContent: 'center',
    width: '15%',
  },
  title: {
    paddingRight: (screenWidth / 100) * 15,
    width: '85%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
