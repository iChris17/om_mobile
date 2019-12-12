import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, ButtonGroup, Icon} from 'react-native-elements';
import MenuButtonGroup from './MenuButtonGruop/index';
import axios from 'axios';
import config from '../../../config/API_CONNECTION';
const btnContact = () => (
  <View>
    <Icon name="alert-circle-outline" type="material-community" color="gray" />
    <Text>Info.</Text>
  </View>
);
const btnSchedule = () => (
  <View>
    <Icon
      name="account-card-details-outline"
      type="material-community"
      color="gray"
    />
    <Text>Personal</Text>
  </View>
);
const btnSpec = () => (
  <View>
    <Icon name="hospital" type="material-community" color="gray" />
    <Text>Servicios</Text>
  </View>
);
const btnAppoint = () => (
  <View>
    <Icon name="calendar-text-outline" type="material-community" color="gray" />
    <Text>Cita</Text>
  </View>
);

export default class componentName extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      services: [],
      specialties: [],
      personal:[]
    };
    this.updateIndex = this.updateIndex.bind(this);
  }
  updateIndex(selectedIndex) {
    this.setState({selectedIndex});
  }

  async componentDidMount() {
    const {Clinic} = this.props;
  
    let serviceRequest = axios.get(
      config.apiAddress + '/api/services/' + Clinic.idRegistered,
    );

    let specialtyRequest = axios.get(
      config.apiAddress + '/api/specialties/' + Clinic.idRegistered,
    );

    let personalRequest=axios
      .get(config.apiAddress + '/api/specialties/' + Clinic.idRegistered)
      
    await specialtyRequest
      .then(res => {
        const specialties = res.data;
        this.setState({
          specialties: specialties,
        });
      })
      .catch(err => {
        console.log(err);
      });
    await serviceRequest
      .then(res => {
        const services = res.data;
      
        this.setState({
          services: services,
        });
      })
      .catch(err => {
        console.log(err);
      });
      await personalRequest.then(res => {
        const personal = res.data;
        this.setState({
          personal: personal,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const {selectedIndex} = this.state;
    const buttons = [
      {element: btnContact},
      {element: btnSchedule},
      {element: btnSpec},
      {element: btnAppoint},
    ];
    const {Clinic} = this.props;
    return (
      <View style={styles.viewBody}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 80, borderRadius: 10}}
          selectedButtonStyle={{backgroundColor: '#e5e5ea'}}
        />
        <MenuButtonGroup
          Option={selectedIndex}
          Clinic={Clinic}
          Specialties={this.state.specialties}
          Services={this.state.services}
          Personals={this.state.personal}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  btnSectionStyles: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
