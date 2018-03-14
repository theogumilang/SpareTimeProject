import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Option extends Component {
  render() {
    return (
      <View style={styles.Container} >
        <Text> Ini Adalah Menu Option, yang akan berisi About dan Setting </Text>
      </View>
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
