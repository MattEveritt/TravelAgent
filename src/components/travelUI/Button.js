import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from '@rneui/base';

const Button = ({navigation, title, onPress, iconName, iconType}) => {
  console.log(onPress);
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

export default Button;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'orange',
    width: '100%',
    height: 50,
    borderRadius: 10,
    marginTop: 10,
  },
  textContainer: {
    flex: 1,
    // alignItems: 'center',
    marginLeft: 10,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
  },
  iconContainer: {
    justifyContent: 'center',
    // alignItems: 'flex-end',
    // alignSelf: 'flex-end',
    marginRight: 15,
  },
});
