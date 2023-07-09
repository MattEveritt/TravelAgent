import {StyleSheet, View} from 'react-native';
import React from 'react';

export const ScreenContainer = ({renderContent}: any) => {
  return <View style={styles.screenContainer}>{renderContent()}</View>;
};

const styles = StyleSheet.create({
  screenContainer: {
    padding: 10,
    height: '100%',
  },
});
