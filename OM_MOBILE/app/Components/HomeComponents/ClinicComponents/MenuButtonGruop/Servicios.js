import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';
import {Card, ListItem} from 'react-native-elements';
import config from '../../../../config/API_CONNECTION'

export default class Servicios extends Component {
  constructor() {
    super();
    this.state = {
      services: [],
      specialties: [],
    };
  }

  async componentDidMount() {
  
  }

  render() {
    const {Services, Specialties} = this.props;
    return (
      <View>
        <Card
          containerStyle={{padding: 0, marginBottom: 10}}
          title="Especialidades"
          titleStyle={styles.servicesTitle}>
          {Specialties.map((u, i) => {
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
          {Services.map((u, i) => {
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
