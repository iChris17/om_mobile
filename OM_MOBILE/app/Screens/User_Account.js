import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, AsyncStorage, ScrollView} from 'react-native';
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
      <ScrollView style={styles.viewBody}>
        <MainAccountComponent/>
        <View style={{alignItems:"center"}}>
        <Button title="Cerrar Sesión" type="solid" buttonStyle={styles.logOutButton} titleStyle={{fontSize:18,fontWeight:"bold"}}
        onPress={()=>{this._signOutAsync() }}
        />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: { 
    backgroundColor: '#f2f2f7',
    height:Dim.height
  },
  logOutButton:{
    marginTop:10,
    marginBottom:10,
    backgroundColor:"#e58586",   
    borderRadius:10,
    height:50,
    width:250
  }
});
