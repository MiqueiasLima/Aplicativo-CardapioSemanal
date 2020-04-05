import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {FontAwesome5} from "@expo/vector-icons";
import { Platform, StatusBar, StyleSheet, View, Text, Image, Button } from 'react-native';
import {estilosa} from "../Estilos";
//import { Button } from 'react-native-paper';



class Home extends Component{
    render(){
        return(

    <View style = {estilosa.backGround_0}>  
        <View style = {estilosa.backGround_Home}>
            <View style = {estilosa.backGroundText_3}>
                <Image source = {require('../imgs/5.png')}/>
                <View style = {estilosa.backGround_Home}>
                    <Text style = {estilosa.backGroundText_1}>Cardápio Semanal - RU</Text>
                    <Text style = {estilosa.backGroundText_2}>Sem 09/03 a 13/03</Text>
                    <Text style = {estilosa.developedText}>Developed by: Miquéias S.</Text>
                </View>
            </View>
        </View>
      
    </View>         
 );
}
}

export default Home;