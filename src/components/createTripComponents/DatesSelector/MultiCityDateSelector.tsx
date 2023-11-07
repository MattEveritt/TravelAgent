import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useAppDispatch, setBookingDates, addBookingDate, selectBookingDates, removeBookingDate, useAppSelector, selectDatesValidity } from '../../../redux';
import { Card, InnerCard, TripModal, TripText } from '../../travelUI';
import { theme } from '../../../styles/theme';
import { FCLocalized } from '../../../localization/FCLocalized';
import { Icon } from '@rneui/base';
import { useSelector } from 'react-redux';

const { SingleDatepicker } = require('react-native-range-datepicker');

export const MultiCityDateSelector = () => {
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const dates = useSelector(selectBookingDates());
  const datesValid = useAppSelector(selectDatesValidity());
  
  const onCancelPress = (i: number) => {
    setModalVisible(false);
  };
  const onAddDatePress = () => {
    dispatch(addBookingDate());
  };
  
  const onRemoveDate = () => {
    dispatch(removeBookingDate());
  };

  const handleOnSelect = (date: Date, i: number) => {
    const newDates = [...dates];
    newDates[i] = {
      startDate: new Date(date).toISOString(),
      untilDate: 'Inbound',
    };
    dispatch(setBookingDates(newDates));
    setModalVisible(false);
  };

  const getMinDate = (i: number) => {
    return dates[i - 1]?.startDate || new Date().toISOString();
  };

  const isAddDateDisabled = dates[dates.length - 1]?.startDate === FCLocalized('Outbound');

  return (
    <View>
      {dates.map((item, i)=> (
        <View key={i} style={styles.dateSelectorContianer}>
          <View style={styles.dateTextContainer}>
            <TripText text={i + 1} style={styles.dateText} />
          </View>
          <InnerCard 
            onPress={() => setModalVisible(!modalVisible)} 
            pressDisabled={false} 
            extraStyles={[styles.container, !datesValid && { borderColor: theme.RED_ERROR }]}
          >
            <Icon name='calendar-edit' type='material-community' containerStyle={styles.iconContainer}/>
            <View style={styles.titleContainer}>
              <TripText 
                text={
                  item.startDate === FCLocalized('Outbound') 
                    ? item.startDate
                    : new Date(item.startDate).toDateString()} 
                style={styles.dateCardText} 
              />
            </View>
            <View style={styles.iconContainer}></View>
            <TripModal
              modalVisible={modalVisible}
              title={FCLocalized('Choose the dates')}
              onCancelPress={() => onCancelPress(i)}
              modalContent={
                <SingleDatepicker
                  startDate={item.startDate}
                  selectedBackgroundColor={theme.PRIMARY_COLOR}
                  onSelect={(date: Date) => handleOnSelect(date, i)}
                  showClose={false}
                  minDate={getMinDate(i)}
                />
              }
            />
          </InnerCard>
        </View>
      ))}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={styles.addDestinationContainer} 
          disabled={isAddDateDisabled}
          onPress={() => onAddDatePress()}
        >
          <TripText 
            text={FCLocalized('Add date')} 
            style={[styles.addDestinationText, isAddDateDisabled && { color: theme.LIGHT_GREY }]} 
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.addDestinationContainer} 
          disabled={dates.length <= 1} 
          onPress={() => onRemoveDate()}
        >
          <TripText 
            text={FCLocalized('Remove date')} 
            style={[styles.addDestinationText, dates.length <= 1 && { color: theme.LIGHT_GREY }]} 
          />
        </TouchableOpacity>
      </View>
    </View>);
};

const styles = StyleSheet.create({
  addDestinationContainer: {
    width: '50%',
  },
  addDestinationText: {
    color: theme.PRIMARY_COLOR,
    alignSelf: 'center',
    fontSize: 18,
    paddingTop: 10
  },
  dateSelectorContianer: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  dateTextContainer: { 
    width: '5%', 
    paddingTop: 10
  },
  dateText: {
    fontSize: 18
  },
  dateSelectorExtraStyles: {
    width: '95%'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 0,
    marginRight: 16
  },
  titleContainer: {
    width: '80%',
    alignItems: 'center'
  },
  iconContainer: {
    width: '10%',
  },
  modalHeaderContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeaderText: {
    fontSize: 20,
    fontWeight: '700',
  },
  dateCardText: {
    fontSize: 16
  }
});