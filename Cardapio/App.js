import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {FontAwesome5} from "@expo/vector-icons";
import  Ionicons from "@expo/vector-icons/Ionicons";
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';

import Home from "./src/Home";
import Segunda from "./src/Segunda";
import Terca from "./src/Terca";
import Quarta from "./src/Quarta";
import Quinta from "./src/Quinta";
import Sexta from "./src/Sexta";

export default class Main extends Component{
  render(){
    return(
      <TabelasDeNavegacao/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
      Home:{
        screen:Home
      },
      Seg:{
        screen:Segunda
      },
      Ter:{
        screen:Terca
      },
      Qua:{
        screen:Quarta
      },
      Qui:{
        screen:Quinta
      },
      Sex:{
        screen:Sexta
      },
    
  },
      {
          initialRouteName: 'Home',
          tabBarOptions:{
            labelStyle:{
              fontSize:18,
               
            }
          
          },
         

      },
     
)
/*
const BarNavigator = createStackNavigator({
  Home:{
    screen:Home
  },
  SegundaFeira:{
    screen:Segunda
  },
  Ter:{
    screen:Terca
  },
  Qua:{
    screen:Quarta
  },
  Qui:{
    screen:Quinta
  },
  Sex:{
    screen:Sexta
  },
})
*/
const TabelasDeNavegacao = createAppContainer(TabNavigator)
//const Telas = createAppContainer(BarNavigator)