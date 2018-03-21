import React, { Component } from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {NavigationComponent} from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'
import MainInfo from '../screens/MainInfo';
import Option from '../screens/Option';
import Tips from '../screens/Tips';
import TrackInfo from '../screens/TrackInfo';
import DetailInfo from '../screens/DetailInfo';
import About from '../screens/OptionsMenu/About';
import Summit from '../screens/TipsMenu/Summit';
import Perlengkapan from '../screens/TipsMenu/Perlengkapan';
import Persiapan from '../screens/TipsMenu/Persiapan';
import Food from '../screens/TipsMenu/Food';
import P3k from '../screens/TipsMenu/P3k';
import FAQ from '../screens/TipsMenu/FAQ';

const MainStack = StackNavigator ({
  MainInfo : {screen : MainInfo,
  navigationOptions : {title : "Info Gunung",    headerStyle : { backgroundColor: '#bdb9e8',}},
  },
  DetailInfo : {screen : DetailInfo}

});

const TipsStack = StackNavigator ({
   Tips : {screen: Tips,
  navigationOptions : { title : "Tips",    headerStyle : { backgroundColor: '#bdb9e8',}}
 
  },
  Summit : {screen : Summit,
    navigationOptions : {title : "7 Summit Indonesia" ,  headerStyle : { backgroundColor: '#bdb9e8',}}
  },
  Perlengkapan : {screen : Perlengkapan,
    navigationOptions : {title : "Persiapan" ,  headerStyle : { backgroundColor: '#bdb9e8',}}
  },
  Persiapan : {screen : Persiapan,
    navigationOptions : {title : "Perlengkapan" ,  headerStyle : { backgroundColor: '#bdb9e8',}}
  },
  Food : {screen : Food,
    navigationOptions : {title : "Food" ,  headerStyle : { backgroundColor: '#bdb9e8',}}
  },
  P3k : {screen : P3k,
    navigationOptions : {title : "P3K" ,  headerStyle : { backgroundColor: '#bdb9e8',}}
  },
  FAQ : {screen : FAQ,
    navigationOptions : {title : "FAQ" ,  headerStyle : { backgroundColor: '#bdb9e8',}}
  },
});

const OptionsStack = StackNavigator ({
  Option : {screen : Option,
  navigationOptions : { title : "Option" ,  headerStyle : { backgroundColor: '#bdb9e8',}}
  },
  About : {screen : About,
    navigationOptions : {title : "About" ,  headerStyle : { backgroundColor: '#bdb9e8',}}
  }
});
const TrackStack = StackNavigator ({
  TrackInfo : {screen : TrackInfo,
  navigationOptions : {title : "Informasi Track" ,  headerStyle : { backgroundColor: '#bdb9e8',}}
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
    Option : {screen : OptionsStack,
      navigationOptions : {tabBarLabel : 'Option' }},
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