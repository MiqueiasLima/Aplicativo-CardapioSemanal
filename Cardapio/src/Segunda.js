import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {FontAwesome5} from "@expo/vector-icons";
import { Platform, StatusBar, StyleSheet, View, Text, Button } from 'react-native';
import {estilosa} from "../Estilos";

class Seg extends Component{
    render(){
      return(
        <View style = {estilosa.backGround_0}>
        <View style = {estilosa.estiloDiasSemanas}>
          <View style = {estilosa.estiloAlmoco}>
              <Text style = {estilosa.estiloAlmoco}>Almoço</Text>
              <Text style = {estilosa.caracteristicasHoras}>Horário: 11:30h às 13:00</Text>
              <Text style = {estilosa.estiloDescricao}>Prato Vegetariano: Estrogonofe de Carne de Soja</Text>
              <Text style = {estilosa.estiloDescricao}> Prato Comum: Carne de Alcatra</Text>
              <Text style = {estilosa.estiloDescricao}>Suco: Cajá</Text>
              <Text style = {estilosa.estiloDescricao}>Sobremesa: Doce de Caju</Text>
          </View>
        <View style = {estilosa.estiloAlmoco}>
            <Text style = {estilosa.estiloAlmoco}>Janta</Text>
            <Text style = {estilosa.caracteristicasHoras}>Horário: 17:00h às 18:30</Text>
            <Text style = {estilosa.estiloDescricao}>Prato Vegetariano: Curry de carne de soja</Text>
            <Text style = {estilosa.estiloDescricao}> Prato Comum: Panqueca de Carne </Text>
            <Text style = {estilosa.estiloDescricao}>Suco: Goiaba</Text>
            <Text style = {estilosa.estiloDescricao}>Sobremesa: Paçoquita</Text>
        </View>
        </View>
      </View>
        
      );
    }
}
export default Seg;