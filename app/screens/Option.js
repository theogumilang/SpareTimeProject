import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView ,} from 'react-native';
import {List, ListItem} from 'react-native-elements';

class Option extends Component {
  OnClick() {
    this.props.navigation.navigate('Option');
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
    <ScrollView>
      <List>
        <ListItem 
        title="Change Language"
        titleStyle={{fontWeight: 'bold'}}
        />
        <ListItem 
        title="Change Font"
        titleStyle={{fontWeight: 'bold'}}
        />
        <ListItem 
        title="Change Color"
        titleStyle={{fontWeight: 'bold'}}
        />
        </List>
        <List>
          <ListItem
          title="About"
          titleStyle={{fontWeight: 'bold'}}
          onPress={() => navigate('About')}
          />
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
export default Option;
