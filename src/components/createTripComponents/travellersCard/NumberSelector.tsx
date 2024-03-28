import { StyleSheet, View } from 'react-native';
import React, { FC, memo } from 'react';
import { TripText } from '../../travelUI';
import { theme } from '../../../styles/theme';
import { Icon } from '@rneui/base';
import {
  selectAdults,
  selectInfants,
  selectInfantsOnLap,
  selectTravellersValidity,
  selectYouth,
  setAdults,
  setInfants,
  setInfantsOnLap,
  setTravellersValidity,
  setYouth,
  setChildren,
  selectChildren,
  setSeniors,
  selectSeniors,
  setStudents,
  selectStudents,
  useAppDispatch,
  useAppSelector,
} from '../../../redux';
import { Action, Selector } from '@reduxjs/toolkit';

type TravellerType =
  | 'adults'
  | 'children'
  | 'seniors'
  | 'students'
  | 'youth'
  | 'infants'
  | 'infantsOnLap';

const _NumberSelector: FC<{ type: TravellerType }> = ({ type }) => {
  const dispatch = useAppDispatch();
  const isValid = useAppSelector(selectTravellersValidity);

  let title: string = '';
  let selector: Selector;
  let action: (num: number) => Action;

  switch (type) {
    case 'adults':
      title = 'Adults 18+';
      selector = selectAdults;
      action = setAdults;
      break;
    case 'children':
      title = 'Children 3 - 11';
      selector = selectChildren;
      action = setChildren;
      break;
    case 'youth':
      title = 'Youth 12 - 17';
      selector = selectYouth;
      action = setYouth;
      break;
    case 'infants':
      title = 'Infants under 2';
      selector = selectInfants;
      action = setInfants;
      break;
    case 'infantsOnLap':
      title = 'Infants on lap under 2';
      selector = selectInfantsOnLap;
      action = setInfantsOnLap;
      break;
    case 'students':
      title = 'Students';
      selector = selectStudents;
      action = setStudents;
      break;
    case 'seniors':
      title = 'Seniors 60+';
      selector = selectSeniors;
      action = setSeniors;
      break;
  }

  const number: number = useAppSelector(selector) as number;

  const setTravellers = (newNumber: number) => {
    if (!isValid) {
      dispatch(setTravellersValidity(true));
    }
    dispatch(action(newNumber));
  };

  return (
    <View style={styles.container}>
      <TripText text={title} style={styles.title} />
      <View style={styles.selectorContainer}>
        <Icon
          name="minus-circle-outline"
          type="material-community"
          size={40}
          color={theme.PRIMARY_COLOR}
          onPress={() => setTravellers(number ? number - 1 : 0)}
          activeOpacity={1}
        />
        <TripText
          text={number}
          style={[styles.numberText, !isValid && { color: theme.RED_ERROR }]}
        />
        <Icon
          name="plus-circle-outline"
          type="material-community"
          size={40}
          color={theme.PRIMARY_COLOR}
          onPress={() => setTravellers(number + 1)}
          activeOpacity={1}
        />
      </View>
    </View>
  );
};

export const NumberSelector = memo(_NumberSelector);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    width: '50%',
  },
  selectorContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
});
