import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Button} from 'react-native-elements';

import MainAccountComponent from '../Components/AccountComponents/index';

const Dim = Dimensions.get('screen');

export default class UserAccount extends Component {
  constructor() {
    super();
    this.state = {
      reload: false,
    };
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  goEditUser = (params=null) => {
    this.props.navigation.navigate('EditUserInfo',{params,onSelect:this.onSelect})
  };

  onSelect =(reload)=>{
    this.setState({reload})
  }



  render() {
      return (
        <ScrollView style={styles.viewBody}>
          {/* <MainAccountComponent goEditUser={this.goEditUser} /> */}
          <View style={{alignItems: 'center'}}>
            <Button
              title="Cerrar Sesión"
              type="solid"
              buttonStyle={styles.logOutButton}
              titleStyle={{fontSize: 18, fontWeight: 'bold'}}
              onPress={() => {
                this._signOutAsync();
              }}
            />
          </View>
        </ScrollView>
      );
   
  }
}

const styles = StyleSheet.create({
  viewBody: {
    backgroundColor: '#f2f2f7',
    height: Dim.height,
  },
  logOutButton: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#e58586',
    borderRadius: 10,
    height: 50,
    width: 250,
  },
});
