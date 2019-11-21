import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';

import HomeMainComponent from '../Components/HomeComponents/index'

const dim=Dimensions.get('screen')

export default class Home extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.viewBody}>
        <HomeMainComponent/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    backgroundColor: '#f2f2f7',
    
  },
});