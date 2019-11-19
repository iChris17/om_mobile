import {StyleSheet, View, Text} from 'react-native';
import React, {Component} from 'react';
import {Avatar, ListItem} from 'react-native-elements';

let Name = 'Christopher Acevedo';
let Mail = 'prueba@gmail.com ';
let Age = '(20 Años) ';

import MainComponent from '../../Screens/User_Account';
export default class componentName extends Component {

  goToEdit = () => {
    this.props.goEditUser;
  };

  render() {
      return (
        <View style={styles.viewBody}>
          <Text style={styles.text}>MI CUENTA</Text>
          <ListItem
            leftAvatar={
              <Avatar
                size="medium"
                rounded
                icon={{
                  name: 'account-circle',
                  type: 'material-community',
                  size: 50,
                }}
              />
            }
            title={Name}
            titleStyle={{fontWeight: 'bold', fontSize: 16, color: 'white'}}
            subtitle={
              <View>
                <Text style={{color: 'white'}}>{Mail + Age}</Text>
              </View>
            }
            chevron={{color: 'black'}}
            containerStyle={styles.ProfileItem}
            onPress={() => {
              this.props.goEditUser();
            }}
          />
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  viewBody: {
    marginTop: 5,
    marginBottom: 30,
  },
  text: {
    color: '#8e8e93',
    marginBottom: 5,
  },
  AvatarContainer: {
    marginRight: 10,
    marginLeft: 10,
  },
  GeneralDataContainer: {
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  HeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  DataText: {
    fontSize: 14,
  },
  ProfileItem: {
    backgroundColor: '#f7a9ab',
    borderRadius: 10,
  },
});
