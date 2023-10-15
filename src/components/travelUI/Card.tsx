import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { ReactNode } from 'react';
import { theme } from '../../styles/theme';

export const Card = ({children, onPress}: {children: ReactNode, onPress?: () => void}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.WHITE,
    elevation: 10,
    borderRadius: 8,
    padding: 15,
    marginBottom: 16
  }
});