import React, { FC, memo } from 'react';
import { Card, TripText } from '../../../components';
import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';
import { Icon } from '@rneui/base';
import {
  setExtraBaggage,
  useAppDispatch,
  useAppSelector,
} from '../../../redux';

type Props = {
  title: string;
  totalPrice: number;
  luggageType: string;
};

const _AddItemCard: FC<Props> = ({ title, totalPrice, luggageType }) => {
  const dispatch = useAppDispatch();
  const selectedOption = useAppSelector(
    state => state.flights.additionalOptions.extraBaggage,
  );

  const selected = selectedOption === luggageType;

  const onPress = () => {
    if (!selected) {
      dispatch(setExtraBaggage(luggageType));
    } else {
      dispatch(setExtraBaggage(''));
    }
  };

  return (
    <Card
      extraStyles={styles.cardExtraStyles}
      onPress={onPress}
      pressDisabled={false}>
      <TripText text={title} style={styles.titleStyles} />
      <TripText text={`$${totalPrice}`} style={styles.priceStyles} />
      {selected ? (
        <Icon
          name="checkbox-blank-circle"
          type="material-community"
          size={24}
          color={theme.PRIMARY_COLOR}
        />
      ) : (
        <Icon
          name="checkbox-blank-circle-outline"
          type="material-community"
          size={24}
          color={theme.SECONDARY_COLOR}
        />
      )}
    </Card>
  );
};

export const AddItemCard = memo(_AddItemCard);

const styles = StyleSheet.create({
  cardExtraStyles: {
    width: '45%',
  },
  titleStyles: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceStyles: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.ACCENT,
    textAlign: 'center',
    marginVertical: 10,
  },
});
