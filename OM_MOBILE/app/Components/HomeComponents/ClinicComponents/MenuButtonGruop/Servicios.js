import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';
import {Card, ListItem} from 'react-native-elements';

export default class Servicios extends Component {
  constructor() {
    super();
    this.state = {
      services: [],
      specialties: [],
    };
  }

  async componentDidMount() {
    const {idClinic} = this.props;
    let services = axios.get(
      'http://192.168.1.21:57033/api/services/' + idClinic + '',
    );
    let specialties = axios.get(
      'http://192.168.1.21:57033/api/specialties/' + idClinic + '',
    );

    let service = null,
      specialty = null;
    await services
      .then(res => {
        service = res.data;
      })
      .catch(err => {
        console.log(err);
      });

    await specialties
      .then(res => {
        specialty = res.data;
      })
      .catch(err => {
        console.log(err);
      });

    if (service != null || specialty != null) {
      this.setState({
        services: service,
        specialties: specialty,
      });
    }
  }

  render() {
    const {services, specialties} = this.state;
    return (
      <View>
        <Card
          containerStyle={{padding: 0, marginBottom: 10}}
          title="Especialidades"
          titleStyle={styles.servicesTitle}>
          {specialties.map((u, i) => {
            return (
              <ListItem
                key={i}
                title={u.name}
                titleStyle={{marginLeft: 5}}
                subtitle={u.vlDescription}
                subtitleStyle={{marginLeft: 5}}
                contentContainerStyle={styles.servicesList}
                bottomDivider
              />
            );
          })}
        </Card>
        <Card
          containerStyle={{padding: 0, marginBottom: 10}}
          title="Servicios Adicionales"
          titleStyle={styles.servicesTitle}>
          {services.map((u, i) => {
            return (
              <ListItem
                key={i}
                title={u.vlName}
                titleStyle={{marginLeft: 5}}
                subtitle={u.vlDescription}
                subtitleStyle={{marginLeft: 5}}
                contentContainerStyle={styles.servicesList}
                bottomDivider
              />
            );
          })}
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  servicesTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left',
    borderTopWidth: 0,
    marginBottom: 5,
    marginLeft: 5,
    color:'black'
  },
  servicesList: {
    marginTop: -10,
    marginBottom: -10,
    marginLeft: -5,
  },
});
