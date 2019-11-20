import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import {Button} from 'react-native-elements';

import MainAccountComponent from '../Components/AccountComponents/index'

const Dim = Dimensions.get('screen')

export default class UserAccount extends Component {
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={styles.viewBody}>
        <MainAccountComponent/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: { 
    backgroundColor: '#f2f2f7',
    height:Dim.height
  },
});
