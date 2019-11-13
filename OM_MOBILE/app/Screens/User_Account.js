import React, {Component} from 'react';
import {StyleSheet, View, Text, AsyncStorage} from 'react-native';
import {Button} from 'react-native-elements';

import AuthScreen from './../Main Navigation/auth-screen';

export default class UserAccount extends Component {
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={styles.viewBody}>
        <Text>Account Screen</Text>
        <Button title="Cerrar Sesión" onPress={this._signOutAsync} />
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
