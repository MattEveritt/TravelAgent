import { View, StyleSheet } from 'react-native';
import {Header} from './Header';
import { theme } from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { TripText } from '../travelUI';

export const TitleOnlyHeader = ({titleText, headerDisabled}: {titleText: string, headerDisabled: boolean}) => {
  const navigation = useNavigation();

  const backButtonHandler = () => {
    navigation.goBack();      
  };

  return (
    <Header headerDisabled={headerDisabled} >
      <TripText text={titleText} style={styles.title} />
    </Header>
  );
};

const styles = StyleSheet.create({
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
});