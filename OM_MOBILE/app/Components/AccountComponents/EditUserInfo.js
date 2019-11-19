import {StyleSheet, View, Text} from 'react-native';
import React, {Component} from 'react';
import {Avatar, Input, Button} from 'react-native-elements';
import MainComponent from '../../Screens/User_Account';
export default class EditUserInfo extends Component {

  render() {
      return (
        <View style={styles.viewBody}>
          <Avatar
            size="large"
            rounded
            icon={{
              name: 'account-circle',
              type: 'material-community',
              size: 50,
            }}
          />
          <Input placeholder="Nombres" />
          <Input placeholder="Apellidos" />
          <Input placeholder="Email" />
          <Input placeholder="Contraseña" />
          <Input placeholder="Fecha de Nacimiento" />
          <Input placeholder="Sexo" />
          <Input placeholder="Peso" />
          <Input placeholder="Grupo Sanguíneo" />
          <Input placeholder="Silla de ruedas" />
          <Input placeholder="Enfermedades Crónicas" />
          <Button
            title="Actualizar Informacion"
          />
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
    alignItems: 'center',
  },
});
