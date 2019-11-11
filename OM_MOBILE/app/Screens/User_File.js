import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-elements';

export default class UserFile extends Component {
  render() {
    return (
      <View style={styles.viewBody}>
        <Text>User File Screen</Text>
      </View>
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