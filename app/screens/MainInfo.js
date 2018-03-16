import React, { Component } from 'react';
import { View, Text, StyleSheet , ScrollView, ListView, FlatList} from 'react-native';
import {gunung} from '../routes/data';
import {List, ListItem, SearchBar } from 'react-native-elements';

class MainInfo extends Component {
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(gunung),
    text : ''
    };
  }
 OnClick = (gunungs) => {
   this.props.navigation.navigate('DetailInfo', {...gunungs});
 };

 filterSearch(text){
  const newData = gunung.filter(function(item){
      const itemData = item.name.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
  })
  this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newData),
      text: text
  })
}
renderRow(rowData){
  return(
      <ListItem
        key={rowData.name}
        roundAvatar
       avatar={{ uri: rowData.avatar }}
        title={rowData.name}
        subtitle={rowData.city}
        onPress={() => this.OnClick(rowData)}
      />
  );
}
  render() {
    return (
      <View>
           <SearchBar
        round
        lightTheme
        onChangeText={(text) => this.filterSearch(text)}
        value={this.state.text}
        placeholder='Cari Gunung Disini' />
      
    
         <ListView
          enableEmptySections={true}
          style={{marginHorizontal:10}}
          renderRow={this.renderRow.bind(this)}
          dataSource={this.state.dataSource}
          initialListSize={10}          
          
        />
       
    
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

export default MainInfo;
