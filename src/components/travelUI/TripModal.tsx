import { StyleSheet, View, Modal, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { BlurView } from '@react-native-community/blur';
import { TripText } from './TripText';
import { theme } from '../../styles/theme';
import { FCLocalized } from '../../localization/FCLocalized';

const windowHeight = Dimensions.get('window').height;

type ModalButtonProps = {
  onCancelPress?: () => {} | undefined, 
  onOkPress?: () => {} | undefined,
  okButtonDisabled?: boolean,
  cancelButtonDisabled?: boolean,
}
 
const ModalButtons = ({ onCancelPress, onOkPress, okButtonDisabled = false, cancelButtonDisabled = false }: ModalButtonProps) => {
  return (
    <View style={styles.modalButtons} >
      {onCancelPress &&
        <TouchableOpacity style={styles.singleModalButton} onPress={() => onCancelPress()}>
          <TripText 
            text={FCLocalized('Cancel')} 
            style={[
              styles.modalButtonText, 
              cancelButtonDisabled && { color: theme.LIGHT_GREY }
            ]} 
          />
        </TouchableOpacity>}
      {onOkPress && 
        <TouchableOpacity style={styles.singleModalButton} onPress={() => onOkPress()} disabled={okButtonDisabled}>
          <TripText 
            text={FCLocalized('Ok')} 
            style={[
              styles.modalButtonText,
              okButtonDisabled && { color: theme.LIGHT_GREY }
            ]}
          />
        </TouchableOpacity>}
    </View>
  );
};

export const TripModal = React.memo(({
  isAlert,
  modalVisible,
  modalContent,
  title,
  headerContent,
  onCancelPress,
  onOkPress,
  okButtonDisabled,
  cancelButtonDisabled,
  alertText,
}: any) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        onCancelPress();
      }}>
      <BlurView
        style={styles.blurView}
        blurType="dark"
        blurAmount={10}
      />
      <View style={[styles.modalView, isAlert && { height: '30%' }]}>
        <View style={[styles.modalHeader, isAlert && { height: null }]}>
          <TripText text={title?.toUpperCase()} style={styles.modalTitle}/>
          {headerContent && headerContent()}
        </View>
        <View style={[styles.modalContentContainer, isAlert && { height: null }]}>
          {modalContent}
          {isAlert &&           
            <TripText
              text={alertText}
              style={styles.alertText}
            />
          }
        </View>
        <ModalButtons
          onCancelPress={onCancelPress}
          onOkPress={onOkPress}
          okButtonDisabled={okButtonDisabled}
          cancelButtonDisabled={cancelButtonDisabled}
        />
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  modalView: {
    height: '80%',
    width: '90%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 4,
    overflow: 'hidden'
  },
  modalHeader: {
    height: (windowHeight / 100 ) * 13,
    backgroundColor: theme.PRIMARY_COLOR,
    padding: 10,
    width: '100%'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: theme.SECONDARY_COLOR
  },
  modalButtons: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  singleModalButton: {
    paddingHorizontal: 40,
    paddingVertical: 20
  },
  modalButtonText: {
    fontSize: 22,
    fontWeight: '600',
    color: theme.ACCENT
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  modalContentContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  alertText: {
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 30,
    paddingVertical: 40
  }
});
