import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { ReactNode } from 'react';
import { theme } from '../../styles/theme';

export const InnerCard = ({
  children,
  onPress,
  pressDisabled = true,
  extraStyles,
}: {
  children: ReactNode;
  onPress?: () => void;
  pressDisabled?: boolean;
  extraStyles?: {};
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, extraStyles]}
      onPress={onPress}
      disabled={pressDisabled}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // elevation: 2,
    backgroundColor: theme.WHITE,
    borderWidth: 1,
    borderColor: theme.PRIMARY_COLOR,
    borderRadius: 8,
    padding: 15,
    marginBottom: 16,
  },
});
