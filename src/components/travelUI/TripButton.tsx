import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from '@rneui/base';

export const TripButton = ({
  navigation,
  title,
  onPress,
  iconName,
  iconType,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name={iconName} type={iconType} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'orange',
    width: '80%',
    height: 50,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center',
  },
  textContainer: {
    flex: 1,
    // alignItems: 'center',
    marginLeft: 10,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    alignSelf: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    // alignItems: 'flex-end',
    // alignSelf: 'flex-end',
    marginRight: 15,
  },
});
