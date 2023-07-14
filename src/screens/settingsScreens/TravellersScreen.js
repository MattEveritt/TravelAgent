import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import {ListItem} from '@rneui/themed';
import globalStyles from '../../styles/globalStyles';
import {selectAllTravellers} from '../../redux';
import {TripButton, AddTravellerForm, TravellerInfo} from '../../components';
import {useSelector} from 'react-redux';
import {ScreenContainer, TripModal} from '../../components/travelUI';

const TravellersAccordion = ({travellers}) => {
  const [expanded, setExpanded] = useState(false);

  return Object.keys(travellers).map((key, i) => (
    <ListItem.Accordion
      content={
        <ListItem.Title style={{flex: 9, color: 'black'}}>
          {travellers[key].name} {travellers[key].surname}
        </ListItem.Title>
      }
      key={i}
      isExpanded={expanded === travellers[key].id ? true : false}
      onPress={() => {
        setExpanded(
          expanded === travellers[key].id ? false : travellers[key].id,
        );
      }}
      containerStyle={styles.accordion}>
      <TravellerInfo traveller={travellers[key]} index={i} />
    </ListItem.Accordion>
  ));
};

export const TravellersScreen = () => {
  const travellers = useSelector(selectAllTravellers());
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddTraveller = useCallback(() => {
    setModalVisible(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderTravellersScreen = useCallback(
    () => (
      <View style={globalStyles.screenContainer}>
        <ScrollView keyboardShouldPersistTaps="always" style={{width: '100%'}}>
          <Text>TravellersScreen</Text>
          <View style={{width: '100%'}}>
            <TravellersAccordion travellers={travellers} />
          </View>
        </ScrollView>
        <TripButton
          title="Add new traveller"
          onPress={handleAddTraveller}
          iconName="plus-circle-outline"
          iconType="material-community"
        />
        <TripModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          modalContent={<AddTravellerForm />}
        />
      </View>
    ),
    [handleAddTraveller, modalVisible, travellers],
  );

  return <ScreenContainer renderContent={renderTravellersScreen} />;
};

const styles = StyleSheet.create({
  accordion: {
    width: '100%',
    backgroundColor: 'orange',
    borderRadius: 1,
    marginTop: 5,
  },
});
