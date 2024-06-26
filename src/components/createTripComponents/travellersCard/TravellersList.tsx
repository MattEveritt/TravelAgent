import React, { Dispatch, FC, SetStateAction } from 'react';
import { View, StyleSheet } from 'react-native';
import { Traveller } from './Traveller';
import { TravellerType } from './SelectSavedTravellers';
type TravellersProps = {
  travellers: { [key: string]: {} }[];
  checkedTravellers: TravellerType[];
  selectedTravellers: [];
  setCheckedTravellers: Dispatch<
    SetStateAction<{ firstName: string; lastName: string; id: string }[]>
  >;
};

export const TravellersList: FC<TravellersProps> = ({
  travellers,
  selectedTravellers,
  checkedTravellers,
  setCheckedTravellers,
}: TravellersProps) => {
  return (
    <View style={styles.travellersContainer}>
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

const styles = StyleSheet.create({
  travellersContainer: { height: '100%', width: '100%' },
});
