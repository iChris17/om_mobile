import React, { Component } from 'react';
import {View, Text,StyleSheet, ScrollView,Dimensions} from 'react-native'
import Header from './HeaderSection'
import Information from './InformationSection'

let screen=Dimensions.get('screen').height

export default class componentName extends Component {
  render() {
  const params =  this.props.navigation.getParam('params')
    return (
      <ScrollView contentContainerStyle={styles.viewBody}>
        <View >
         <Header LogoUrl={params.logo} Name={params.name} City={params.city} />
         <Information Address={params.addres} Description={params.description}/>
         </View>
      </ScrollView>
    );
  }
}

const styles=StyleSheet.create({
  viewBody:{
    backgroundColor: '#f2f2f7',
    //flex:1
   // marginLeft:5,
    //marginRight:5,
   //height:screen
  }
})
