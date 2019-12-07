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
    console.log('didmount')
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
      'http://192.168.1.21:57033/api/pacients/' + email + '',
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
    console.log('render index')
    return (
      <View style={styles.viewBody}>
        <AvatarSection goEditUser={this.props.goEditUser} user={user}/>
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
