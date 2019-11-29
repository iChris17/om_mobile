import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Information from './information';
import Personal from './Personal'
import Servicios from './Servicios'
import Appointment from './Appointment'

export default class index extends Component {
  render() {
    const {Option, Address, Description} = this.props;

    switch (Option) {
      case 0:
        return (
          <View style={styles.viewBody}>
            <Information Address={Address} Description={Description}/>
          </View>
        );
        break;

      case 1:
        return (
          <View style={styles.viewBody}>
            <Personal />
          </View>
        );
        break;

      case 2:
        return (
          <View style={styles.viewBody}>
            <Servicios />
          </View>
        );
        break;

      case 3:
        return (
          <View style={styles.viewBody}>
            <Appointment />
          </View>
        );
        break;
    }
  }
}

const styles = StyleSheet.create({
  viewBody:{
  marginLeft: 10,
  marginRight: 10,
  marginTop:10,
  marginBottom:100,
 backgroundColor:"white",
 borderRadius: 10,
    //borderWidth:1,
        shadowRadius:2,
        shadowOpacity:0.2,
        shadowColor:"#48484a",
        shadowOffset:{
            width:3,
            height:5
        },
    elevation: 4,
}
})
