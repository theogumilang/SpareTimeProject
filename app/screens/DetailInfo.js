import React, { Component } from 'react';
import { View, ScrollView , StyleSheet } from 'react-native';
import {Tile ,List, ListItem, Header, Text} from 'react-native-elements';


class DetailInfo extends Component {

  static navigationOptions = {
    title : "Details Gunung"
  }
  render() {
    const{name, image, height, city} = this.props.navigation.state.params;
    return (
      
      <View style={styles.Container} >
     
        <Tile
        imageSrc={{uri : image}}
        />
        <Text h4> {name} </Text>
        <Text h5>  Ketinggian : {height} </Text> 
        <Text h5>  Kota : {city}   </Text>
        
        </View>
    );
  }
}
const styles = StyleSheet.create({
     Container : {
       flex : 1,
       
     }, 
     ViewStyle : {
       flex: 1,
       flexDirection: 'column',
     }
});

export default DetailInfo;
