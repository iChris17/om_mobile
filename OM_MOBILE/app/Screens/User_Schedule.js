import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, ScrollView, TouchableHighlight, Modal} from 'react-native';
import {Button, Icon, ListItem} from 'react-native-elements';
import {Appointments} from '../variables/appointments';

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
      appointments: {
        detail: [],
        months: []
      },
      modal: false
    }
  }

  static navigationOptions = {
    title: 'Agenda',
    headerRight: <Button type="clear" icon={ <Icon name="clipboard-text" type='material-community' size={30} color="black" />}/>
  };

  componentDidMount() {
    const months = monthNames.filter((x) => {
      return Appointments.find(y => {
        return new Date(y.fecha).getMonth() === x.number;
      });
    });

    const dates = {
      detail: Appointments,
      months: months
    };

    this.setState({
      appointments: dates
    });
  }

  setModalVisible(visible) {
    this.setState({modal: visible});
  }

  GetAppointmentsViews() {
    const { appointments } = this.state;
    
    return(
      <View style={{paddingLeft: 15, paddingRight: 15}}>
        {appointments.detail.map(app => {
          return(
            <View style={styles.card}>
              <View style={styles.cardTitle}>
                <Text style={styles.title}>{appointments.months.filter(m => m.number === new Date(app.fecha).getMonth()).map(m => m.month)}</Text>
              </View>
              <View style={styles.cardBody}>
                <TouchableHighlight style={styles.list} activeOpacity={0.9} onPress={() => this.setModalVisible(true)}>
                  <ListItem
                    leftAvatar={{title: new Date(app.fecha).getDate(), overlayContainerStyle: {backgroundColor: '#e58586'}}}
                    title={app.clinica}
                    subtitle={app.medico}
                  />
                </TouchableHighlight>
              </View>
            </View>
          );
        })}
      </View>
    );
  }

  ModalContent() {
    const { modal } = this.state;

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{width: width, height: (height/2), backgroundColor: 'white', marginTop: (height/2)}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!modal);
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.ModalContent()}
        <ScrollView contentContainerStyle={styles.viewBody}>
          {this.GetAppointmentsViews()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: width,
    height: 70,
    paddingBottom: 10,
    backgroundColor: 'white'
  },
  headerNow: {
    paddingLeft: 20,
    width: '70%'
  },
  textNow: {
    fontSize: 24,
    color: '#000'
  },
  headerButton: {
    width: '20%'
  },
  viewBody: {
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    width: width
  },
  card: {
    borderRadius: 10,
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 15
  },
  cardTitle: {
    paddingLeft: 20,
    paddingTop: 15,
    flex: 1
  },
  title: {
    color: '#0089d4',
  },
  cardBody: {
    flex: 1
  },
  list: {
    marginBottom: 10,
  }
});