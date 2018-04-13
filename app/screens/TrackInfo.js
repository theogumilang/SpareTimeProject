import React, { Component } from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import MapView from 'react-native-maps'
import {Marker} from 'react-native-maps';
import {marker} from '../routes/marker'

class TrackInfo extends Component {
  render() {
    return (
      <MapView
      style={styles.Container}
    initialRegion={{
      latitude: -6.121435,
      longitude: 106.774124,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
   {marker.map(marker => (
      <Marker
      coordinate={marker.latlng}
      image={require('../img/ic_mountain.png')}
      title={marker.title}
      description={marker.desc}
    />


   ))}
   
  </MapView>
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
