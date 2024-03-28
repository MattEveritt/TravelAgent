import React, { FC, memo } from 'react';
import {
  BookingNavigationButtons,
  FlightBookingCloseModal,
  ScreenContainer,
} from '.';
import { useFlightsBookingScreens } from '../hooks/useFlightsBookingScreens';
import { ScrollView, StyleSheet } from 'react-native';

type Props = {
  children: React.ReactNode;
  onNextPress: undefined | (() => void);
  onBackPress: undefined | (() => void);
  screenIndex: number;
  screenTitle: string;
};
const _FlightBookingScreensContainer: FC<Props> = ({
  children,
  onNextPress,
  onBackPress,
  screenIndex,
  screenTitle,
}) => {
  const { modalVisible, setModalVisible } =
    useFlightsBookingScreens(screenIndex);

  return (
    <ScreenContainer
      headerType="CloseHeader"
      headerTitle={screenTitle}
      onBackPressExtra={() => setModalVisible(true)}>
      <ScrollView
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.contentContainerStyle}>
        {children}
      </ScrollView>
      <BookingNavigationButtons
        onNextPress={onNextPress}
        onBackPress={onBackPress}
        isLastStep={screenIndex === 5}
      />
      <FlightBookingCloseModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </ScreenContainer>
  );
};

export const FlightBookingScreensContainer = memo(
  _FlightBookingScreensContainer,
);

const styles = StyleSheet.create({
  scrollViewStyle: {
    margin: -16,
  },
  contentContainerStyle: {
    padding: 16,
  },
});
