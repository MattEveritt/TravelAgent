import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Icon } from '@rneui/base';
import { Header } from './Header';
import { theme } from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { TripModal, TripText } from '../travelUI';
import { FCLocalized } from '../../localization/FCLocalized';
import { useState } from 'react';

export const BookingNavHeader = ({ headerDisabled, titleText }: {headerDisabled: boolean, titleText: string}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const onCancelPress = () => {
    setModalVisible(false);
  };

  const onOkPress = () => {
    navigation.goBack();
    setModalVisible(false);
  };

  const backButtonHandler = () => {
    setModalVisible(true);   
  };

  return (
    <Header headerDisabled={headerDisabled}>
      <View style={styles.leftContainer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => backButtonHandler()}>
          <Icon name='close' type='ionicon' color={theme.BLACK} size={30}/>
        </TouchableOpacity>
        <TripText text={FCLocalized(titleText)} style={styles.title} />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.total}>
          <TripText text={FCLocalized('Total')} />
          <TripText text={FCLocalized('€0')} />
        </View>
        <Icon 
          name='file-document-edit-outline'
          type='material-community'
          size={40}
          style={{ padding: 10 }} 
          containerStyle={{ alignSelf: 'center' }}
        />
      </View>
      <TripModal 
        isAlert
        modalVisible={modalVisible}
        title={FCLocalized('Exit booking flow')} 
        onCancelPress={onCancelPress}
        alertText={FCLocalized('If you leave now your progress will be saved but prices might change.')}
        onOkPress={onOkPress} 
      />
    </Header>
  );
};

const styles = StyleSheet.create({
  leftContainer: {
    height: '100%',
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rightContainer: {
    height: '100%',
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  total: {
    width: '50%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    width: '50%'
  },
  title: {
    alignSelf: 'center',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold'
  },
});