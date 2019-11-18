import React, {Component} from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import {ListItem, Button} from 'react-native-elements';

export default class MedicalData extends Component {

  constructor(props){
    super(props)
  }

  logOut=()=>{
    console.log("cerrando")
    console.log(this.props)   
   // this.props.navigation.navigate('Login')

  }
  render() {
    const list = [
      {
        name: 'Estatura',
        subtitle: '169 cm',
      },
      {
        name: 'Peso',
        subtitle: '84 Kg' ,
      },
    ];
    /*{
      list.map((item) => {
        console.log(item);
      });
    }*/
    
    return (
      <View >
        <Text style={styles.text}>FICHA MEDICA</Text>
        <View>         
          <ListItem
            title="Fecha de Nacimiento"
            subtitle="17/07/1998"
            bottomDivider
            containerStyle={styles.listMedicalData}
            subtitleStyle={styles.subtitileMedicalList}
            titleStyle={styles.titleMedicalList}
          />
          <ListItem
            title="Sexo"
            subtitle="Masculino"
            bottomDivider
            containerStyle={styles.listMedicalData}
            subtitleStyle={styles.subtitileMedicalList}
            titleStyle={styles.titleMedicalList}
          />
          <ListItem
            title="Peso"
            subtitle="84 kg"
            bottomDivider
            containerStyle={styles.listMedicalData}
            subtitleStyle={styles.subtitileMedicalList}
            titleStyle={styles.titleMedicalList}
          />
          <ListItem
            title="Altura"
            subtitle="1.7 m"
            bottomDivider
            containerStyle={styles.listMedicalData}
            subtitleStyle={styles.subtitileMedicalList}
            titleStyle={styles.titleMedicalList}
          />
          <ListItem
            title="Grupo Sanguineo"
            subtitle="Sin Definir"
            bottomDivider
            containerStyle={styles.listMedicalData}
            subtitleStyle={styles.subtitileMedicalList}
            titleStyle={styles.titleMedicalList}
          />
          <ListItem
            title="Silla de ruedas"
            subtitle="No"
            bottomDivider
            containerStyle={styles.listMedicalData}
            subtitleStyle={styles.subtitileMedicalList}
            titleStyle={styles.titleMedicalList}
          />
          <ListItem
            title="Enfermedades Crónicas"
            subtitle="Sin Definir"
            bottomDivider
            containerStyle={styles.listMedicalData}
            subtitleStyle={styles.subtitileMedicalList}
            titleStyle={styles.titleMedicalList}
          />
        </View>
        <Text style={styles.text}>Puedes editar tu datos clínicos en la sección 
        de edición de Mi cuenta</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#8e8e93',
    marginBottom:5,
    marginTop:5
  },
  listMedicalData:{
   // backgroundColor: '#86BBD8', 
     alignItems:"center",
     borderBottomWidth:0.5,
     borderTopWidth:0.5,
     //borderColor:"#8e8e93"
  },
  subtitileMedicalList:{
    textAlign:"right",
    fontSize:16,
    marginTop:-20
  },
  titleMedicalList:{
    fontSize:16,
    //fontWeight:"bold"
  },
  
});
