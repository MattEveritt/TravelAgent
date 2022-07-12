import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ListItem, Icon, Avatar} from '@rneui/themed';
import TripButton from '../travelUI';
import globalStyles from '../../styles/globalStyles';
import Constants from '../../constants';
import {tripPlanningComponents} from '.';

const TripInfo = ({navigation}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={{width: '100%'}}>
      {Object.values(Constants.PLANNING_CATEGORIES).map((l, i) => {
        const Component = tripPlanningComponents[l];
        return (
          <ListItem.Accordion
            content={
              <ListItem.Title style={{width: '100%', color: 'black'}}>
                {l}
              </ListItem.Title>
            }
            key={i}
            isExpanded={expanded === l ? true : false}
            onPress={() => {
              setExpanded(expanded === l ? false : l);
            }}
            style={styles.accordion}
            containerStyle={styles.accordion}>
            <ListItem
              onPress={() => console.log('pressed')}
              bottomDivider
              // style={{width: '100%'}}
            >
              <Component />
            </ListItem>
          </ListItem.Accordion>
        );
      })}
      <ListItem
        onPress={() => console.log('pressed')}
        bottomDivider
        containerStyle={{backgroundColor: '#FFD580'}}>
        <View style={styles.TripButtonContainer}>
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
  TripButtonContainer: {
    backgroundColor: '#FFD580',
    flexDirection: 'row',
    // alignItems: 'center',
    // alignContent: 'space-between',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 10,
  },
  TripButtons: {
    width: '45%',
  },
});
