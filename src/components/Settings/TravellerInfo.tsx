import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteTraveller, useAppDispatch} from '../../redux';
import {ListItem} from '@rneui/themed';

export const TravellerInfo = ({
  traveller,
  i
}: any) => {
  const dispatch = useAppDispatch();

  const handleDeleteTraveller = useCallback(() => {
    dispatch(deleteTraveller(traveller.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={{width: '100%'}}>
      <ListItem
        onPress={() => console.log('pressed')}
        containerStyle={styles.listItemContainer}>
        <View style={styles.itemInnerContainer}>
          <Text>Name</Text>
          <Text>{traveller.name}</Text>
        </View>
      </ListItem>
      <ListItem
        onPress={() => console.log('pressed')}
        containerStyle={styles.listItemContainer}>
        <View style={styles.itemInnerContainer}>
          <Text>Surname</Text>
          <Text>{traveller.surname}</Text>
        </View>
      </ListItem>
      <ListItem
        onPress={() => console.log('pressed')}
        containerStyle={styles.listItemContainer}>
        <View style={styles.itemInnerContainer}>
          <Text>Middle names</Text>
          <Text>{traveller.middleNames}</Text>
        </View>
      </ListItem>
      <ListItem
        onPress={() => console.log('pressed')}
        containerStyle={styles.listItemContainer}>
        <View style={styles.itemInnerContainer}>
          <Text>Date of birth</Text>
          <Text>{traveller.dateOfBirth}</Text>
        </View>
      </ListItem>
      <ListItem
        onPress={() => console.log('pressed')}
        containerStyle={styles.listItemContainer}>
        <View style={styles.itemInnerContainer}>
          <Text>Passport number</Text>
          <Text>{traveller.passportNumber}</Text>
        </View>
      </ListItem>
      <ListItem
        onPress={() => console.log('pressed')}
        bottomDivider
        containerStyle={styles.listItemContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleDeleteTraveller}>
            <Text>DELETE</Text>
          </TouchableOpacity>
        </View>
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  accordion: {
    width: '100%',
    backgroundColor: '#FFD580',
  },
  buttonContainer: {
    backgroundColor: '#FFD580',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 10,
  },
  itemInnerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemContainer: {
    backgroundColor: '#FFD580',
  },
});
