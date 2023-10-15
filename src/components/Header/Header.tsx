import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { ReactNode } from 'react';
import { theme } from '../../styles/theme';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

export const Header = ({children, headerDisabled = false}: {children: ReactNode, headerDisabled: boolean}) => {

  if (headerDisabled) return null;

  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '8.75%',
    width: '100%', 
    backgroundColor: theme.PRIMARY_COLOR,
    flexDirection: 'row',
    alignItems: 'center'
  },
});