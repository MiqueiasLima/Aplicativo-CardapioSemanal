import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import {estilosa} from "../Estilos";

class Terca extends Component{
    render(){
      return(
        <View style = {estilosa.backGround_0}>
        <View style = {estilosa.estiloDiasSemanas}>
          <View style = {estilosa.estiloAlmoco}>
              <Text style = {estilosa.estiloAlmoco}>Almoço</Text>
              <Text style = {estilosa.caracteristicasHoras}>Horário: 11:30h às 13:00</Text>
              <Text style = {estilosa.estiloDescricao}>Prato Vegetariano: Molho Alfredo</Text>
              <Text style = {estilosa.estiloDescricao}> Prato Comum: Bisteca Contra Filé</Text>
              <Text style = {estilosa.estiloDescricao}>Suco: Goiaba</Text>
              <Text style = {estilosa.estiloDescricao}>Sobremesa: Melancia ou Cocada</Text>
          </View>
        <View style = {estilosa.estiloAlmoco}>
            <Text style = {estilosa.estiloAlmoco}>Janta</Text>
            <Text style = {estilosa.caracteristicasHoras}>Horário: 17:00h às 18:30</Text>
            <Text style = {estilosa.estiloDescricao}>Prato Vegetariano: Penne Verde c/ creme de brie</Text>
            <Text style = {estilosa.estiloDescricao}> Prato Comum: Carne de Lagarto</Text>
            <Text style = {estilosa.estiloDescricao}>Suco: Canjarona</Text>
            <Text style = {estilosa.estiloDescricao}>Sobremesa:Laranja ou Doce de Leite</Text>
        </View>
        </View>
      </View>
        
      );
    }
}
export default Terca;