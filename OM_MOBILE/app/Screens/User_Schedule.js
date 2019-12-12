import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Button, Icon} from 'react-native-elements';
import ModalSchedule from '../Components/ScheduleComponent/ModalSchedule';
import {Agenda, LocaleConfig} from 'react-native-calendars'
import Moment from 'moment';
import axios from 'axios';
import config from '../config/API_CONNECTION'

export default class UserSchedule extends Component {
  constructor(){
    super();
    this.state = {
      modal: false,
      app: {
        clinica: '',
        sala: 0,
        medico: '',
        especialidad: '',
        objetivo: '',
        fecha: new Date(),
        estado: true
      },
      items: {},
      show: false,
      appointments: {}
    }
  }

  async componentDidMount() {
    const IdUser = await AsyncStorage.getItem('IdUser');

    await axios.get(config.apiAddress+'/api/Appointments/'+IdUser,)
    .then(res=>{
      const appointments = res.data
      this.setState({appointments})
      setTimeout(() => this.setState({show: true}), 100)
    }).catch(e=>{
      console.log(e)
    })
  }

  setModalVisible(visible, app) {
    this.setState({modal: visible, app: app});
  }

  render() {
    const { modal, app, show } = this.state;

    LocaleConfig.locales['es'] = {
      monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
      monthNamesShort: ['Ene.','Feb.','Mar','Abril','Mayo','Junio','Julio','Ago','Sept.','Oct.','Nov.','Dic.'],
      dayNames: ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado'],
      dayNamesShort: ['Dom.','Lun.','Mar.','Mier.','Jue.','Vie.','Sab.'],
      today: 'Aujourd\'hui'
    };
    LocaleConfig.defaultLocale = 'es';

    return (
      <View style={{flex: 1}}>
        {show && <Agenda
                    items={this.state.items}
                    loadItemsForMonth={this.loadItems.bind(this)}
                    selected={new Date().toLocaleDateString()}
                    renderItem={this.renderItem.bind(this)}
                    renderEmptyDate={this.renderEmptyDate.bind(this)}
                    rowHasChanged={this.rowHasChanged.bind(this)}
                    theme={{selectedDayBackgroundColor: '#e58586', dotColor: '#86BBD8'}}
                  />
        }
        <ModalSchedule app={app} visible={modal} setVisible={() => this.setModalVisible(!modal, app)}/>
      </View>
    );
  }

  loadItems(day) {
    const {items, appointments} = this.state;
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          
          if(appointments !== {}) {
            const apps = appointments.filter(app => {
              const date = Moment(app.vlDate).format('YYYY-MM-DD').toString();
              return (date === strTime);
            });
  
            apps.forEach(app => {
              items[strTime].push(app);
            });
          }
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => this.setModalVisible(true, item)}>
          <Text style={styles.time}>{Moment(item.vlTime).format('hh:mm A').toString()}</Text>
          <Text style={styles.title}>{item.nbClinic}</Text>
          <Text style={styles.subtitle}>{item.name}</Text>
          <Text style={styles.subtitle}>Sala {item.sala}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>No hay eventos!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginRight: 17,
    marginTop: 17,
    elevation: 3
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  },
  time: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    marginBottom: 5
  },
  subtitle: {
    fontSize: 16,
    color: '#7e7e7e',
    marginLeft: 10
  },
  button: {
    position: 'absolute',
    top: -80,
    right: 0
  }
});