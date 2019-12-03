import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {ListItem, Button} from 'react-native-elements';

export default class MedicalData extends Component {
  constructor(props) {
    super(props);
    this.state={
      vlHeight:null,vlWeight:null,tpBlood:null,inDiscapacity:null
    }
  }

  logOut = () => {
    console.log('cerrando');
    console.log(this.props);
    // this.props.navigation.navigate('Login')
  };

/*componentDidMount(){
  const {vlHeight,vlWeight,tpBlood,inDiscapacity}=this.props.medfile
  this.setState({
    vlHeight:vlHeight,vlWeight:vlWeight,tpBlood:tpBlood,inDiscapacity:inDiscapacity
  })
}*/

  render() {
    const {vlHeight,vlWeight,tpBlood,inDiscapacity,gender,vlBirthdate}=this.props.user
    const list = [
      {
        name: 'Fecha de Nacimiento',
        subtitle: vlBirthdate,
      },
      {
        name: 'Sexo',
        subtitle: gender,
      },
      {
        name: 'Peso',
        subtitle: vlWeight+" kg",
      },
      {
        name: 'Altura',
        subtitle: vlHeight+" mts",
      },
      {
        name: 'Grupo Sanguíneo',
        subtitle: tpBlood,
      },
      {
        name: 'Silla de Ruedas',
        subtitle: inDiscapacity,
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
