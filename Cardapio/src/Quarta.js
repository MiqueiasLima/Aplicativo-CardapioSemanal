import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import {estilosa} from "../Estilos";
class Quarta extends Component{
    render(){
      return(
        <View style = {estilosa.backGround_0}>
        <View style = {estilosa.estiloDiasSemanas}>
          <View style = {estilosa.estiloAlmoco}>
              <Text style = {estilosa.estiloAlmoco}>Almoço</Text>
              <Text style = {estilosa.caracteristicasHoras}>Horário: 11:30h às 13:00</Text>
              <Text style = {estilosa.estiloDescricao}>Prato Vegetariano: Carne de soja</Text>
              <Text style = {estilosa.estiloDescricao}> Prato Comum: Bife</Text>
              <Text style = {estilosa.estiloDescricao}>Suco: Grosélia</Text>
              <Text style = {estilosa.estiloDescricao}>Sobremesa: Melancia ou Doce de Goiaba</Text>
          </View>
        <View style = {estilosa.estiloAlmoco}>
            <Text style = {estilosa.estiloAlmoco}>Janta</Text>
            <Text style = {estilosa.caracteristicasHoras}>Horário: 17:00h às 18:30</Text>
            <Text style = {estilosa.estiloDescricao}>Prato Vegetariano: Omelete de Forno</Text>
            <Text style = {estilosa.estiloDescricao}> Prato Comum: Picanha</Text>
            <Text style = {estilosa.estiloDescricao}>Suco: Acerola</Text>
            <Text style = {estilosa.estiloDescricao}>Sobremesa: Laranja ou Doce de Goiaba</Text>
        </View>
        </View>
      </View>
      );
    }
}
export default Quarta;