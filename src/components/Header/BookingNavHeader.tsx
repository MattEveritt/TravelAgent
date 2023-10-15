import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from '@rneui/base';
import {Header} from './Header';
import { theme } from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';

export const BookingNavHeader = ({headerDisabled}: {headerDisabled: boolean}) => {
  const navigation = useNavigation();

  const backButtonHandler = () => {
    navigation.goBack();      
  };

  return (
    <Header headerDisabled={headerDisabled}>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => backButtonHandler()}>
        <Icon name='close' type='ionicon' color={theme.BLACK}/>
      </TouchableOpacity>
    </Header>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: '100%',
  }
});