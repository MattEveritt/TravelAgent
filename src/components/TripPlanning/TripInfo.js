import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ListItem, Icon, Avatar} from '@rneui/themed';
import Button from '../travelUI/Button';
import globalStyles from '../../styles/globalStyles';

const tripPlanning1 = [
  {
    name: 'Destination',
    subtitle: 'select destination',
    icon_name: 'globe',
  },
  {
    name: 'Budget',
    subtitle: 'Input your budget',
    icon_name: 'globe',
  },
  {
    name: 'Dates',
    subtitle: 'select dates',
    icon_name: 'globe',
  },
  {
    name: 'Travellers',
    subtitle: 'select travellers',
    iconName: 'globe',
  },
];
const TripInfo = ({navigation}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={{width: '100%'}}>
      {tripPlanning1.map((l, i) => (
        <ListItem.Accordion
          content={
            <ListItem.Title style={{width: '100%', color: 'black'}}>
              {l.name}
            </ListItem.Title>
          }
          key={i}
          isExpanded={expanded === l.name ? true : false}
          onPress={() => {
            setExpanded(expanded === l.name ? false : l.name);
          }}
          style={styles.accordion}
          containerStyle={styles.accordion}>
          <ListItem
            onPress={() => console.log('pressed')}
            bottomDivider
            // style={{width: '100%'}}
          >
            <ListItem.Chevron />
          </ListItem>
        </ListItem.Accordion>
      ))}
      <ListItem
        onPress={() => console.log('pressed')}
        bottomDivider
        containerStyle={{backgroundColor: '#FFD580'}}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => console.log('open trip')}>
            <Text>OPEN</Text>
          </TouchableOpacity>
          <Text>|</Text>
          <TouchableOpacity onPress={() => console.log('delete trip')}>
            <Text>DELETE</Text>
          </TouchableOpacity>
        </View>
      </ListItem>
    </View>
  );
};

export default TripInfo;

const styles = StyleSheet.create({
  accordion: {
    width: '100%',
    backgroundColor: '#FFD580',
  },
  buttonContainer: {
    backgroundColor: '#FFD580',
    flexDirection: 'row',
    // alignItems: 'center',
    // alignContent: 'space-between',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 10,
  },
  buttons: {
    width: '45%',
  },
});
