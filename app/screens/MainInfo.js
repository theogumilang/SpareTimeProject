import React, { Component } from 'react';
import { View, Text, StyleSheet , ScrollView} from 'react-native';
import {gunung} from '../routes/data';
import {List, ListItem} from 'react-native-elements';

class MainInfo extends Component {
  render() {
    return (
     <ScrollView>
       <List>
         {gunung.map((gunungs)  =>(
          <ListItem
          key={gunungs.name}
          title= {gunungs.name}
          subtitle= {gunungs.city}
          roundAvatar
          avatar={{uri: gunungs.image}}
          />

         ))}
         </List>
       </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  Container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default MainInfo;
