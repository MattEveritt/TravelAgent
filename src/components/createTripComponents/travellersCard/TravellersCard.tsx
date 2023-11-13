import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  useAppSelector,
  selectAllTravellers,
  useAppDispatch,
} from '../../../redux';
import { Card, TripModal, TripText } from '../../travelUI';
import { Icon } from '@rneui/base';
import { FCLocalized } from '../../../localization/FCLocalized';
import { theme } from '../../../styles/theme';
import { Dispatch, SetStateAction, useState } from 'react';
import { Traveller } from './Traveller';
import {
  selectBookingTravellers,
  setBookingTravellers,
} from '../../../redux/booking';
import { formatTravellersName } from '../../../utils/formatTravellersName';

type TravellersProps = {
  travellers: { [key: string]: {} }[];
  checkedTravellers: string[];
  selectedTravellers: [];
  setCheckedTravellers: Dispatch<SetStateAction<string[]>>;
};

const Travellers = ({
  travellers,
  selectedTravellers,
  checkedTravellers,
  setCheckedTravellers,
}: TravellersProps) => {
  return (
    <View style={{ height: '100%', width: '100%' }}>
      {Object.keys(travellers).map((travellerId: string, i: number) => (
        <Traveller
          key={travellerId}
          traveller={travellers[i]}
          selectedTravellers={selectedTravellers}
          checkedTravellers={checkedTravellers}
          setCheckedTravellers={setCheckedTravellers}
        />
      ))}
    </View>
  );
};

export const TravellersCard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const selectedTravellers = useAppSelector(selectBookingTravellers());
  const [checkedTravellers, setCheckedTravellers] = useState<string[]>([]);
  const allTravellers = useAppSelector(selectAllTravellers());

  const dispatch = useAppDispatch();

  const onOkPress = () => {
    dispatch(setBookingTravellers(checkedTravellers));
    setModalVisible(false);
  };

  const onCancelPress = () => {
    setModalVisible(false);
  };

  return (
    <Card>
      <TripText text={FCLocalized('Travellers')} style={styles.title} />
      <View style={styles.travellersCardStyles}>
        <View>
          {selectedTravellers.map((travellerId: string, i: number) => (
            <TripText
              key={travellerId}
              text={formatTravellersName(allTravellers[i])}
              style={{ marginLeft: 10, fontSize: 16 }}
            />
          ))}
        </View>
        <Icon
          name="plus-circle-outline"
          type="material-community"
          size={40}
          color={theme.PRIMARY_COLOR}
          onPress={() => setModalVisible(true)}
        />
      </View>
      <TripModal
        modalVisible={modalVisible}
        headerContent={undefined}
        modalContent={
          <Travellers
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
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
    marginBottom: 3,
  },
  travellersCardStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});