import React, {Component} from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import {Card, Button, Image,SearchBar} from 'react-native-elements';
const consultorios = [
  {
    name: 'Consultorio de prueba',
    addres: 'Calle Principal Altamira, Contiguo a Sevasa',
    logo: 'http://www.hospitalvivianpellas.com/wp-content/themes/vivianpellas-theme/assets/images/logo-hospital-vivian-pellas-2017-01@3x.png',
    description:
      'Clinica especializada de prueba con el objetivo de visualizar el catalogo en la pantalla. Bla,bla,bla,bla,bla,bla',
  },
  {
    name: 'Consultorio de prueba',
    addres: 'Calle Principal Altamira, Contiguo a Sevasa',
    logo: 'https://clinicavalle.com/wp-content/themes/clinicavalle/assets/img/logo.png',
    description:
      'Clinica especializada de prueba con el objetivo de visualizar el catalogo en la pantalla. Bla,bla,bla,bla,bla,bla',
  }, 
  {
    name: 'Consultorio de prueba',
    addres: 'Calle Principal Altamira, Contiguo a Sevasa',
    logo: 'https://static.wixstatic.com/media/7a16a5_db2550a94c684b768b1e5d212fed5ce3~mv2.jpg',
    description:
      'Clinica especializada de prueba con el objetivo de visualizar el catalogo en la pantalla. Bla,bla,bla,bla,bla,bla',
  },
];

export default class BussinessComponent extends Component {

onPressDetails=()=>{
  this.props.goClinic()
}

  render() {
    return (
      <View>
        
        {consultorios.map((u, i) => {
          return (
            <View key={i}>
              <Card
                title={u.name}
                key={i}
                titleStyle={styles.headerStyle}
                containerStyle={styles.cardStyle}>
                <Image
                  style={styles.logoStyle}
                  resizeMode="contain"
                  source={{uri: u.logo}}
                />
                <Text style={styles.descriptionStyle}>{u.description}</Text>
                <Text style={styles.descriptionStyle}>{"Direccion: "+u.addres}</Text>
                <Button
                key={i}
                  title="Ver detalles"
                  buttonStyle={styles.detailsButton}
                  onPress={()=>{this.onPressDetails()}}
                />
              </Card>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailsButton: {
    backgroundColor: '#e58586',
    marginTop:5
  },
  headerStyle: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#2c2c2e',
  },
  descriptionStyle: {
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 0,
    fontSize: 16,
    color: '#48484a',
  },
  cardStyle: {
    borderRadius: 10,
    borderWidth:1,
        shadowRadius:2,
        shadowOpacity:0.2,
        shadowColor:"#48484a",
        shadowOffset:{
            width:3,
            height:5
        },
    elevation: 4,
  },
  logoStyle: {
    width: '100%',
    height: 150,
    marginTop:-15
  },
});
