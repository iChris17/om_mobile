import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {ListItem, Button} from 'react-native-elements';

export default class MedicalData extends Component {
  constructor(props) {
    super(props);
  }

  logOut = () => {
    console.log('cerrando');
    console.log(this.props);
    // this.props.navigation.navigate('Login')
  };
  render() {
    const list = [
      {
        name: 'Fecha de Nacimiento',
        subtitle: '17/07/1998',
      },
      {
        name: 'Sexo',
        subtitle: 'Masculino',
      },
      {
        name: 'Peso',
        subtitle: '84 kg',
      },
      {
        name: 'Altura',
        subtitle: '1.7 mts',
      },
      {
        name: 'Grupo Sanguíneo',
        subtitle: 'Sin Definir',
      },
      {
        name: 'Silla de Ruedas',
        subtitle: 'No',
      },
      {
        name: 'Enfermedades Crónicas',
        subtitle: 'Sin Definir',
      },
    ];

    return (
      <View>
        <Text style={styles.text}>FICHA MEDICA</Text>
        <View>
          {list.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              subtitle={l.subtitle}
              bottomDivider
              containerStyle={styles.listMedicalData}
              subtitleStyle={styles.subtitileMedicalList}
              titleStyle={styles.titleMedicalList}
            />
          ))}
        </View>
        <Text style={styles.text}>
          Puedes editar tu datos clínicos en la sección de edición de Mi cuenta
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#8e8e93',
    marginBottom: 5,
    marginTop: 5,
  },
  listMedicalData: {
    // backgroundColor: '#86BBD8',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    //borderColor:"#8e8e93"
  },
  subtitileMedicalList: {
    textAlign: 'right',
    fontSize: 16,
    marginTop: -20,
  },
  titleMedicalList: {
    fontSize: 16,
    //fontWeight:"bold"
  },
});
