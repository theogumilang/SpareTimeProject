import React, { Component } from 'react';
import { View, Text, StyleSheet  } from 'react-native';

class TrackInfo extends Component {
  render() {
    return (
      <View style={styles.Container} >
        <Text> Ini Akan Berisi Informasi Jalur Track Gunung</Text>
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
export default TrackInfo;
