import React, {useState} from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import {ListItem, Icon, Avatar} from '@rneui/themed';
import TripInfo from '../components/TripPlanning/TripInfo';
import globalStyles from '../styles/globalStyles';
import Button from '../components/travelUI/Button';
import Theme, {theme} from '../styles/theme';

const tripPlanning1 = [
  {
    name: 'South Africa',
    subtitle: 'Cheap flights now available!',
    icon_name: 'globe',
  },
  {
    name: 'New York',
    subtitle: 'Prices are about to go up',
    icon_name: 'globe',
  },
  {
    name: 'Perth',
    subtitle: 'Wait a month for cheaper tickets',
    icon_name: 'globe',
  },
  {
    name: 'Barcelona',
    subtitle: 'Barcelona festival on during your dates',
    iconName: 'globe',
  },
];
const TripPlanningScreen = ({navigation}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={globalStyles.screenContainer}>
      <ScrollView style={{width: '100%'}}>
        <Text>TripPlanningScreen</Text>
        <View style={{width: '100%'}}>
          {tripPlanning1.map((l, i) => (
            <ListItem.Accordion
              content={
                <ListItem.Title style={{flex: 9, color: 'black'}}>
                  {l.name}
                </ListItem.Title>
              }
              key={i}
              isExpanded={expanded === l.name ? true : false}
              onPress={() => {
                setExpanded(expanded === l.name ? false : l.name);
              }}
              containerStyle={styles.accordion}>
              <TripInfo l={l} i={i} />
            </ListItem.Accordion>
          ))}
        </View>
      </ScrollView>
      <Button
        title="Add new trip"
        onPress={() => console.log('Add trip')}
        iconName="plus-circle-outline"
        iconType="material-community"
      />
    </View>
  );
};

export default TripPlanningScreen;

const styles = StyleSheet.create({
  accordion: {
    width: '100%',
    backgroundColor: 'orange',
    borderRadius: 1,
    marginTop: 5,
  },
});
