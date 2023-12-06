import { StyleSheet } from 'react-native';
import React, { FC, memo } from 'react';
import { Card, InnerCard, TripText } from '../../travelUI';
import { FCLocalized } from '../../../localization/FCLocalized';
import { theme } from '../../../styles/theme';
import { CheckBox } from '@rneui/base';
import {
  selectIncludeAccomodation,
  useAppDispatch,
  useAppSelector,
} from '../../../redux';
import { setIncludeAccomodation } from '../../../redux/booking/bookingSlice';

const _AccomodationCard: FC = () => {
  const dispatch = useAppDispatch();
  const includeAccomodation = useAppSelector(selectIncludeAccomodation);
  return (
    <Card>
      <TripText text={FCLocalized('Accomodation')} style={styles.title} />
      <InnerCard
        onPress={() => dispatch(setIncludeAccomodation(!includeAccomodation))}
        extraStyles={styles.transportTypeButton}
        pressDisabled={false}>
        <TripText
          text={FCLocalized('Include accomodation?')}
          style={styles.tripTypeText}
        />
        <CheckBox
          checked={includeAccomodation}
          style={styles.checkBox}
          containerStyle={styles.checkBoxContainer}
        />
      </InnerCard>
    </Card>
  );
};

export const AccomodationCard = memo(_AccomodationCard);

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
    marginBottom: 3,
  },
  transportTypeButton: {
    width: '80%',
    alignSelf: 'center',
    height: 60,
    marginBottom: 8,
    backgroundColor: theme.WHITE,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    flexDirection: 'row',
  },
  tripTypeText: {
    fontSize: 18,
    fontWeight: '600',
  },
  checkBox: {
    margin: 0,
    backgroundColor: 'transparent',
  },
  checkBoxContainer: {
    backgroundColor: 'transparent',
  },
});
