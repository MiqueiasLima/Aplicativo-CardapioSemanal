import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import {initialWindowSafeAreaInsets} from 'react-native-safe-area-context';

export const estilosa = StyleSheet.create({
      backGround_0:{
        backgroundColor:'#1E90FF',
        flex:1,
        borderRadius:10,

      },

      backGround_Home: {     
      flex: 1,      
      backgroundColor: '#00FF7F',
      borderRadius:20,
      marginTop:10,
      marginLeft:5,
      marginRight:5,
      marginBottom:10,
      alignItems:'center',
  
    },
    backGroundText_1:{
        fontSize:30,
        color :'#008B00',
        fontWeight:'bold',
        marginTop:60,
        
    },
    backGroundText_2:{
      fontSize:30,
      color :'#008B00',
      fontWeight:'bold',
      marginHorizontal:25,
      
  },
    backGroundText_3:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      marginTop:80,
    },
    
    estiloDiasSemanas:{
        flex:1,
        backgroundColor:'#00FF7F',
        marginTop:10,
        marginRight:5,
        marginLeft:5,
        marginBottom:10,
        borderRadius:20,
        justifyContent:'space-around',

    },
    estiloAlmoco:{
      fontSize:30,
      marginTop:5,
      color:'steelblue',
      fontWeight:'bold',
      alignItems:'center',
      justifyContent:'space-between',
      
    },
    styleButton:{
      borderRadius:15,
    },

    caracteristicasHoras:{
      fontSize:20,
      color:'#00688B',
      fontWeight:'bold',

    },
    textoLinha:{
      fontWeight:'bold',
      fontSize:20,
      color:'blue',
    },
    estiloDescricao:{
      fontSize:15,
      color:'#6CA6CD',
      fontWeight:'bold',
    },
    developedText:{
      fontSize:12,
      color:'blue',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
    }
  });
