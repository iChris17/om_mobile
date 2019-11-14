import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-elements';

import MainAccountComponent from '../Components/AccountComponents/index'

export default class UserAccount extends Component {
  render() {
    return (
      <MainAccountComponent/>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
