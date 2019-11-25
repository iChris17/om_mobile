 import React, { Component } from 'react';
 import {View, Text, StyleSheet} from 'react-native'
 
 export default class componentName extends Component {
   render() {
       const{Address,Description} = this.props
     return (
       <View style={styles.viewBody}>
           <Text>Descripción</Text>
     <Text>{Description}</Text>
     <Text>Dirección</Text>
     <Text>{Address}</Text>
     <Text>Horario</Text>
     <Text>Especialidades</Text>
     <Text>Servicios</Text>
     <Text>Doctores</Text>
     <Text>Contacto</Text>
       </View>
     );
   }
 }
 
 const styles=StyleSheet.create({
     viewBody:{
         marginTop:10,
         marginLeft:5,
         marginRight:5
     }
 })