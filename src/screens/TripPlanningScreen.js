import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListItem, Icon, Avatar} from '@rneui/themed';
import globalStyles from '../styles/globalStyles';

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
const TripPlanningScreen = ({navigation}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={globalStyles.screenContainer}>
      <Text>TripPlanningScreen</Text>
      {tripPlanning1.map((l, i) => (
        <ListItem.Accordion
          content={
            <>
              <Icon name="add-to-list" size={30} type="entypo" />
              <ListItem.Title>{l.name}</ListItem.Title>
            </>
          }
          key={i}
          icon={{name: 'arrow-down', type: 'entypo'}}
          isExpanded={expanded === l.name ? true : false}
          onPress={() => {
            setExpanded(expanded === l.name ? false : l.name);
          }}>
          <ListItem onPress={() => console.log('pressed')} bottomDivider>
            {/* <Icon name="rowing" /> */}
            {/* <Avatar
              title={l.name[0]}
              icon={{name: l.iconName, type: 'font-awesome'}}
            /> */}
            <ListItem.Chevron />
          </ListItem>
        </ListItem.Accordion>
      ))}
    </View>
  );
};

export default TripPlanningScreen;
