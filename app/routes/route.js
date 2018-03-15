import React, { Component } from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {NavigationComponent} from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'
import MainInfo from '../screens/MainInfo';
import Option from '../screens/Option';
import Tips from '../screens/Tips';
import TrackInfo from '../screens/TrackInfo';
import DetailInfo from '../screens/DetailInfo';

const MainStack = StackNavigator ({
  MainInfo : {screen : MainInfo,
  navigationOptions : {title : "Info Gunung",    headerStyle : { backgroundColor: '#87bcb2',}},
  },
  DetailInfo : {screen : DetailInfo}

});

const TipsStack = StackNavigator ({
   Tips : {screen: Tips,
  navigationOptions : { title : "Tips",    headerStyle : { backgroundColor: '#3872a5',}}
  }
});
const OptionsStack = StackNavigator ({
  Option : {screen : Option,
  navigationOptions : { title : "Option" ,  headerStyle : { backgroundColor: '#285e9b',}}
  }
});
const TrackStack = StackNavigator ({
  TrackInfo : {screen : TrackInfo,
  navigationOptions : {title : "Informasi Track" ,  headerStyle : { backgroundColor: '#5589a0',}}
  }
});


const Tab = TabNavigator ({
    MainInfo : {screen : MainStack 
    , navigationOptions : {tabBarLabel : 'Main Info' },
    },
  
    TrackInfo : {screen : TrackStack
        , navigationOptions : {tabBarLabel : 'Track Route' },
    },
    Tips : {screen : TipsStack,
       navigationOptions : {tabBarLabel : 'Tips' }
    },
    Option : {screen : OptionsStack},
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