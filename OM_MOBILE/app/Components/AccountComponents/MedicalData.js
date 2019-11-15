import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native'

export default class MedicalData extends Component {
  render() {
    return (
      <View>
          <Text style={styles.text}>FICHA MEDICA</Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
    text:{
        color:"#8e8e93"
    }
})
