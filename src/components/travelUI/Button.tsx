import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from '@rneui/base';
import {theme} from '../../styles/theme';

export const TripButton = ({
  title,
  onPress,
  iconName,
  iconType,
  isWhite,
}: any) => {

  const backgroundColor = isWhite ? theme.WHITE : theme.PRIMARY_COLOR;
  const border = isWhite ? {
    borderWidth: 1,
    borderColor: theme.BLACK
  } : null;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, {backgroundColor, ...border}]}>
      <View style={styles.textContainer}>
        <Text style={[styles.buttonText]}>{title}</Text>
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
    width: '100%',
    height: 50,
    borderRadius: 25,
    marginTop: 10,
    alignSelf: 'center',
    overflow: 'hidden',
    elevation: 5,
  },
  textContainer: {
    flex: 1,
    // alignItems: 'center',
    marginLeft: 10,
    justifyContent: 'center',
  },
  buttonText: {
    color: theme.BLACK,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  iconContainer: {
    justifyContent: 'center',
    // alignItems: 'flex-end',
    // alignSelf: 'flex-end',
    marginRight: 15,
  },
});
