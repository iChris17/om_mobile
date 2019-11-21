import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native'

import BussinessCards from './BussinessCards'

export default class HomeMainComponent extends Component {
  render() {
    return (
          <View style={styles.viewBody}>
              <BussinessCards/>
          </View>    
    );
  }
}

const styles = StyleSheet.create({
    viewBody: {
      //marginLeft: 10,
      //marginRight: 10,
      marginTop: 10,
      marginBottom: 10,
    },
  });