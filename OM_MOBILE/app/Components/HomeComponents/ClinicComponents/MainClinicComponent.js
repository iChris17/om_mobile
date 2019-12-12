import React, { Component } from 'react';
import {View, Text,StyleSheet, ScrollView,Dimensions} from 'react-native'
import Header from './HeaderSection'
import Information from './InformationSection'
import axios from 'axios'

let screen=Dimensions.get('screen').height

export default class componentName extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      speciality: {}
    }
  }

  render() {
    const params =  this.props.navigation.getParam('params')
    
    return (
      <ScrollView contentContainerStyle={styles.viewBody}>
        <View >
         <Header LogoUrl={params.vlImageSm} Name={params.nbClinic} City={params.vlCity} />
         <Information Clinic={params}/>
         </View>
      </ScrollView>
    );
  }
}

const styles=StyleSheet.create({
  viewBody:{
    backgroundColor: '#f2f2f7',
  }
})
