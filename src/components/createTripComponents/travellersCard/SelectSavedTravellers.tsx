import { StyleSheet, View } from 'react-native';
import React, { FC, memo, useState } from 'react';
import { Icon } from '@rneui/base';
import { theme } from '../../../styles/theme';
import { formatTravellersName } from '../../../utils/formatTravellersName';
import { TripModal, TripText } from '../../travelUI';
import { FCLocalized } from '../../../localization/FCLocalized';
import { TravellersList } from './TravellersList';
import {
  selectAllTravellers,
  selectUserId,
  useAppDispatch,
  useAppSelector,
} from '../../../redux';
import {
  selectBookingTravellers,
  selectTravellersValidity,
  setBookingTravellers,
  setTravellersValidity,
} from '../../../redux/booking';

const _SelectSavedTravellers: FC = () => {
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const selectedTravellers = useAppSelector(selectBookingTravellers());
  const [checkedTravellers, setCheckedTravellers] = useState<string[]>([]);
  const allTravellers = useAppSelector(selectAllTravellers());
  const isValid = useAppSelector(selectTravellersValidity);
  const mainUserId = useAppSelector(selectUserId());
  console.log(mainUserId);
  console.log(allTravellers);

  const onOkPress = () => {
    dispatch(setBookingTravellers(checkedTravellers));
    setModalVisible(false);
  };

  const onCancelPress = () => {
    setModalVisible(false);
  };

  const onPlusPress = () => {
    dispatch(setTravellersValidity(true));
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.namesContainer}>
        {selectedTravellers.map((travellerId: string, i: number) => (
          <TripText
            key={travellerId}
            text={formatTravellersName(allTravellers[i])}
            style={styles.travellersName}
          />
        ))}
      </View>
      <Icon
        name="plus-circle-outline"
        type="material-community"
        size={40}
        color={isValid ? theme.PRIMARY_COLOR : theme.RED_ERROR}
        onPress={onPlusPress}
      />
      <TripModal
        modalVisible={modalVisible}
        headerContent={undefined}
        modalContent={
          <TravellersList
            travellers={allTravellers}
            checkedTravellers={checkedTravellers}
            selectedTravellers={selectedTravellers}
            setCheckedTravellers={setCheckedTravellers}
          />
        }
        title={FCLocalized('Choose travellers')}
        onOkPress={onOkPress}
        onCancelPress={onCancelPress}
      />
    </View>
  );
};

export const SelectSavedTravellers = memo(_SelectSavedTravellers);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  namesContainer: { flex: 1 },
  travellersName: { marginLeft: 10, fontSize: 16 },
});
