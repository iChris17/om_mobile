import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, ScrollView, TouchableHighlight, Modal} from 'react-native';
import {Button, Icon, ListItem} from 'react-native-elements';
import {Appointments} from '../variables/appointments';
import ModalSchedule from '../Components/HomeComponents/ModalSchedule';
import {Agenda, LocaleConfig} from 'react-native-calendars'
import Moment from 'moment';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const monthNames = [
  {month: "Ene", number: 0}, 
  {month: "Feb", number: 1}, 
  {month: "Mar", number: 2},
  {month: "Abr", number: 3},
  {month: "May", number: 4},
  {month: "Jun", number: 5},
  {month: "Jul", number: 6},
  {month: "Ago", number: 7},
  {month: "Sep", number: 8},
  {month: "Oct", number: 9},
  {month: "Nov", number: 10},
  {month: "Dic", number: 11}
];

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
      items: {}
    }
  }

  setModalVisible(visible, app) {
    this.setState({modal: visible, app: app});
  }

  render() {
    const { modal, app } = this.state;

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
        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          selected={new Date().toLocaleDateString()}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
          theme={{selectedDayBackgroundColor: '#e58586', dotColor: '#86BBD8'}}
        />
        <ModalSchedule app={app} visible={modal} setVisible={() => this.setModalVisible(!modal, app)}/>
      </View>
    );
  }

  loadItems(day) {
    const {items} = this.state;
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          
          const appointments = Appointments.filter(app => {
            const date = Moment(app.fecha).format('YYYY-MM-DD').toString();
            return (date === strTime);
          });

          appointments.forEach(app => {
            items[strTime].push(app);
          });
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
        <Text style={styles.time}>{Moment(item.fecha).format('hh:mm A').toString()}</Text>
        <Text style={styles.title}>{item.clinica}</Text>
        <Text style={styles.subtitle}>{item.especialidad}</Text>
        <Text style={styles.subtitle}>Sala {item.sala}</Text>
        <Button type='clear' buttonStyle={styles.button} icon={
          <Icon
            name='cogs'
            type='font-awesome'
            color='#86BBD8'
          />}
          onPress={()=> this.setModalVisible(true, item)}
        />
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