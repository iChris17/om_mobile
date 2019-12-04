import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import AvatarSection from './AvatarSection';
import MedicalData from './MedicalData';

export default class AccountMainComponent extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  async componentDidMount() {
    await this.CargarDatos();
    //await AsyncStorage.setItem('ReloadUser','NO').catch(err=>{})
    console.log('index')
  }

  async CargarDatos() {
    let email;
    await AsyncStorage.getItem('email')
      .then(res => {
        email = res;
      })
      .catch(err => {});
    let id;
    await AsyncStorage.getItem('IdUser')
      .then(res => {
        id = res;
      })
      .catch(err => {});
    let promiseUser = axios.get(
      'http://192.168.252.135:57033/api/pacients/' + email + '',
    );

    let user;
    await promiseUser
      .then(res => {
        user = res.data;
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({user});
  }

  render() {
    let {user} = this.state;

    return (
      <View style={styles.viewBody}>
        <AvatarSection goEditUser={this.props.goEditUser} user={user} reload={this.CargarDatos}/>
        <MedicalData user={user} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
