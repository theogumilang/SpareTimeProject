import React, { Component } from 'react';
import { View, Text, StyleSheet  } from 'react-native';

class Tips extends Component {
  render() {
    return (
      <View style={styles.Container} >
        <Text> Ini akan Berisi Tips Untuk Para Pendaki Pemula  </Text>
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
export default Tips;
