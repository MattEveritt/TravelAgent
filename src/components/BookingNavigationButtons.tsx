import { StyleSheet, View } from 'react-native';
import React, { FC, memo } from 'react';
import { TripButton } from '.';
import { FCLocalized } from '../localization/FCLocalized';

type Props = {
  onBackPress?: () => void;
  onNextPress?: () => void;
  isLastStep?: boolean;
};

export const _BookingNavigationButtons: FC<Props> = ({
  onBackPress,
  onNextPress,
  isLastStep = false,
}) => {
  return (
    <View style={styles.container}>
      {onBackPress ? (
        <TripButton
          title={FCLocalized('Previous')}
          isWhite
          style={styles.buttonStyles}
          onPress={onBackPress}
        />
      ) : (
        <View style={styles.buttonStyles} />
      )}
      {onNextPress && (
        <TripButton
          title={isLastStep ? FCLocalized('Confirm') : FCLocalized('Next')}
          style={styles.buttonStyles}
          onPress={onNextPress}
        />
      )}
    </View>
  );
};

export const BookingNavigationButtons = memo(_BookingNavigationButtons);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    bottom: 10,
    position: 'absolute',
  },
  buttonStyles: {
    width: '40%',
  },
});
