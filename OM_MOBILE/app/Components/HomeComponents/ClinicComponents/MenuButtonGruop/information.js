import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Information extends Component {
  render() {
    const {Address, Description} = this.props;
    return (
      <View style={styles.viewBody}>
        <Text style={styles.subtitleStyles}>Descripción</Text>
        <Text style={styles.contentStyles}>{Description}</Text>
        <Text style={styles.subtitleStyles}>Dirección</Text>
        <Text style={styles.contentStyles}>{Address}</Text>
        <Text style={styles.subtitleStyles}>Contacto</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    viewBody:{
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        marginBottom:5
    },
    subtitleStyles:{
        fontWeight:"bold",
        fontSize:18,
        marginBottom:5,
        marginTop:5
    },
    contentStyles:{
        fontSize:16,
        marginBottom:5,
        marginTop:5
    }
})