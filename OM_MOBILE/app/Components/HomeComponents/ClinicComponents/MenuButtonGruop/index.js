import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Information from './information';
import Personal from './Personal'
import Servicios from './Servicios'
import Appointment from './Appointment'

export default class index extends Component {
  render() {
    const {Option} = this.props;

    switch (Option) {
      case 0:
        return (
          <View>
            <Information />
          </View>
        );
        break;

      case 1:
        return (
          <View>
            <Personal />
          </View>
        );
        break;

      case 2:
        return (
          <View>
            <Servicios />
          </View>
        );
        break;

      case 3:
        return (
          <View>
            <Appointment />
          </View>
        );
        break;
    }
  }
}
