import { TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';
import { Icon } from '@rneui/base';
import { theme } from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { TripText } from '../travelUI/TripText';

const screenWidth = Dimensions.get('screen').width;

export const CloseHeader = ({ headerDisabled, titleText }: {headerDisabled: boolean, titleText: string}) => {
  const navigation = useNavigation();

  if (headerDisabled) return null;

  const backButtonHandler = () => {
    navigation.goBack();
  };
  
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => backButtonHandler()}>
        <Icon name='close' type='ionicon' color={theme.BLACK}/>
      </TouchableOpacity>
      <TripText text={titleText} style={styles.title}/>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    width: '15%'
  },
  title: {
    paddingRight: (screenWidth / 100) * 15,
    width: '85%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  headerContainer: {
    height: '8.75%',
    width: '100%', 
    backgroundColor: theme.PRIMARY_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
  },
});