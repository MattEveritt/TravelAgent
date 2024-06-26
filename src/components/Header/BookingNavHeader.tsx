import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Icon } from '@rneui/base';
import { theme } from '../../styles/theme';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { TripText } from '../travelUI/TripText';
import { TripModal } from '../travelUI/TripModal';
import { FCLocalized } from '../../localization/FCLocalized';
import { useState } from 'react';
import { HEADER_COLOR, HEADER_HEIGHT_PERCENTAGE } from './constants';
import { selectIsLoggedIn, useAppSelector } from '../../redux';

type BookingNavHeaderProps = {
  headerDisabled: boolean;
  titleText: string;
  onBackPressExtra?: () => void | undefined;
};
export const BookingNavHeader: FC<BookingNavHeaderProps> = ({
  headerDisabled,
  titleText,
  onBackPressExtra,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const isLoggedIn = useAppSelector(selectIsLoggedIn());

  if (headerDisabled) return null;

  const onCancelPress = () => {
    setModalVisible(false);
  };

  const onOkPress = () => {
    if (onBackPressExtra) {
      onBackPressExtra();
    }
    navigation.navigate('Tab navigator');
    setModalVisible(false);
  };

  const backButtonHandler = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => backButtonHandler()}>
          <Icon name="close" type="ionicon" color={theme.BLACK} size={30} />
        </TouchableOpacity>
        <TripText text={FCLocalized(titleText)} style={styles.title} />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.total}>
          <TripText text={FCLocalized('Total')} />
          <TripText text={FCLocalized('€0')} />
        </View>
        <Icon
          name="file-document-edit-outline"
          type="material-community"
          size={40}
          style={{ padding: 10 }}
          containerStyle={{ alignSelf: 'center' }}
        />
      </View>
      {isLoggedIn ? (
        <TripModal
          isAlert
          modalVisible={modalVisible}
          title={FCLocalized('Exit booking flow')}
          onCancelPress={onCancelPress}
          alertText={FCLocalized(
            'If you leave now your progress will be saved but prices might change.',
          )}
          onOkPress={onOkPress}
        />
      ) : (
        <TripModal
          isAlert
          modalVisible={modalVisible}
          title={FCLocalized('Exit booking flow')}
          onCancelPress={onCancelPress}
          alertText={FCLocalized(
            'If you leave now your progress will be saved but prices might change.',
          )}
          onOkPress={onOkPress}
        />
      )}
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
  leftContainer: {
    height: '100%',
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightContainer: {
    height: '100%',
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    width: '50%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  title: {
    alignSelf: 'center',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
