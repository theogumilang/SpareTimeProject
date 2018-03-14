import React, { Component } from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {NavigationComponent} from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'
import MainInfo from '../screens/MainInfo';
import Option from '../screens/Option';
import Tips from '../screens/Tips';
import TrackInfo from '../screens/TrackInfo';

const Tab = TabNavigator ({
    MainInfo : {screen : MainInfo 
    , navigationOptions : {tabBarLabel : 'Main Info' },
    },
  
    TrackInfo : {screen : TrackInfo
        , navigationOptions : {tabBarLabel : 'Track Route' },
    },
    Tips : {screen : Tips},
    Option : {screen : Option},
},
{
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      bottomNavigationOptions: {
        labelColor: 'white',
        backgroundColor: 'red',
        rippleColor: 'white',
        isBadgeVisible : true,
        tabs: {
            MainInfo: {
            barBackgroundColor: '#87bcb2',
            labelColor: 'white',
            icon : <Icon size={24} color="white" name="book" />
          },
          TrackInfo: {
            barBackgroundColor: '#5589a0',
            labelColor: 'white',
            icon : <Icon size={24} color="white" name="globe" />
          
          },
          Tips: {
            barBackgroundColor: '#3872a5',
            labelColor: 'white',
            icon : <Icon size={24} color="white" name="info" />
          },
          Option: {
            barBackgroundColor: '#285e9b',
            labelColor: 'white',
            icon : <Icon size={24} color="white" name="cog" />
          },
        }

        
    }
}

}

);

export  default Tab;