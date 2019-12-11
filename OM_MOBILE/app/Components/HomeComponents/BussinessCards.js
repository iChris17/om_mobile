import React, {Component} from 'react';
import {View, StyleSheet, Text,ActivityIndicator} from 'react-native';
import {Card, Button, Image} from 'react-native-elements';
import axios from 'axios'

export default class BussinessComponent extends Component {

  constructor(){
    super()
    this.state={
      clinics:[]
    }
  }

onPressDetails=selectedClinic=>{
  const {clinics} = this.state
  this.props.goClinic(clinics[selectedClinic])
}

async componentDidMount(){
  await axios.get('http://192.168.1.10:57033/api/clinics',)
  .then(res=>{
    //console.log(res.data)
    const clinics = res.data
    this.setState({clinics})
  }).catch(e=>{
    console.log(e)
  })
}

  render() {
    const {clinics}=this.state
    return (
      <View>
        
        {clinics.map((u, i) => {
          return (
            <View key={u.id}>
              <Card
                title={u.nbClinic}
                key={u.id}
                titleStyle={styles.headerStyle}
                containerStyle={styles.cardStyle}>
                <Image
                  style={styles.logoStyle}
                  resizeMode="contain"
                  source={{uri: `data:image/jpeg;base64,${u.vlImageLg}`}} 
                  PlaceholderContent={<ActivityIndicator/>}
                />
                <Text style={styles.descriptionStyle}>{u.vlDescripcion}</Text>
                <Text style={styles.descriptionStyle}>{"Direccion: "+u.vlAddress}</Text>
                <Button
                key={u.id}
                  title="Ver detalles"
                  buttonStyle={styles.detailsButton}
                  onPress={()=>{this.onPressDetails(i)}}
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
    textAlign: 'justify',
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
