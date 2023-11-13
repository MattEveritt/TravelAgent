import { View, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { TripText } from '../travelUI/TripText';

export const TitleOnlyHeader = ({titleText, headerDisabled}: {titleText: string, headerDisabled: boolean}) => {
  const navigation = useNavigation();

  if (headerDisabled) return null;

  const backButtonHandler = () => {
    navigation.goBack();      
  };

  return (
    <View style={styles.headerContainer}>
      <TripText text={titleText} style={styles.title} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: '8.75%',
    width: '100%', 
    backgroundColor: theme.PRIMARY_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
});