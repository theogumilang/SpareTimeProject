import React, { Component } from 'react';
import { View, StyleSheet , TouchableHighlight } from 'react-native';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'

class Tips extends Component {
  static navigationOptions = {
    title : "Details Gunung"
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.Container} >
      <Text h3> Tips & Info </Text>
      <View style={styles.ViewContainer} >
  <View> 
  <TouchableHighlight style={styles.ButtonStyle} onPress={() => navigate('Summit')} >
  <View style={{alignItems:'center'}} >
  <Icon size={30} color="white" name="flag" />
    <Text style={{margin: -1}} h5> 7 Summit </Text>
  
    </View>
    </TouchableHighlight>

    </View>
    <View style={{marginLeft : 20}} >  
  <TouchableHighlight onPress={() => navigate('Perlengkapan')}  style={styles.ButtonStyle} >
  <View style={{alignItems:'center'}} >
  <Icon size={30} color="white" name="users" />
    <Text style={{margin: -1}} h5> Persiapan </Text>
  
    </View>
    </TouchableHighlight>

    </View>
    <View style={{marginLeft : 20}} >  
  <TouchableHighlight onPress={() => navigate('Persiapan')} style={styles.ButtonStyle} >
  <View style={{alignItems:'center'}} >
  <Icon size={30} color="white" name="briefcase" />
    <Text style={{margin: -1}} h5> Perlengkapan </Text>
  
    </View>

    </TouchableHighlight>

    </View>
    
        </View>

        <View style={{flex: 5, flexDirection:'row',}} >
  <View> 
  <TouchableHighlight onPress={()=> navigate('Food')} style={styles.ButtonStyle} >
  <View style={{alignItems:'center'}} >
  <Icon size={30} color="white" name="leaf" />
    <Text style={{margin: -1}} h5> Food </Text>
  
    </View>
    </TouchableHighlight>

    </View>
    <View style={{marginLeft : 20}} >  
  <TouchableHighlight onPress={()=> navigate('P3k')} style={styles.ButtonStyle} >
  <View style={{alignItems:'center'}} >
  <Icon size={30} color="white" name="plus-square" />
    <Text style={{margin: -1}} h5> P3K </Text>
  
    </View>
    </TouchableHighlight>

    </View>
    <View style={{marginLeft : 20}} >  
  <TouchableHighlight onPress={()=>navigate('FAQ')} style={styles.ButtonStyle} >
  <View style={{alignItems:'center'}} >
  <Icon size={30} color="white" name="question-circle" />
    <Text style={{margin: -1}} h5> FAQ </Text>
  
    </View>

    </TouchableHighlight>

    </View>
    
        </View>
 
      </View>
    );
  }
}
const styles = StyleSheet.create({
    Container : {
      flex: 2,
      alignItems: 'center',
      paddingTop: 20,
      
    },
    ViewContainer : {
     flex : 2,
    flexDirection: 'row',
    paddingTop: 30,
    },
    ButtonStyle : {
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.0)',
      alignItems:'center',
      justifyContent:'center',
      width:90,
      height:80,
      borderRadius: 20,
      backgroundColor:'#ead7d5',
     
    }
});
export default Tips;
