import React, { Component } from 'react';
import { View , StyleSheet } from 'react-native';
import {Text} from 'react-native-elements';

class About extends Component {
  render() {
    return (
      <View style={styles.Container}  >
       <Text h4>Anak Gunung </Text>
        <Text style={{paddingTop:5}}  h5>Contact Us : garengdev@gmail.com</Text>
        <Text style={{paddingTop:5}}  h5>Headquarter : South Jakarta, Indonesia </Text>
        <Text style={{paddingTop:5}} h5>PT GarengDev 2018 Allright reserved  </Text>
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
export default About;
