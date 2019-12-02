import React, {Component} from 'react';
import {StyleSheet, View, Text, Modal, Dimensions, TouchableOpacity} from 'react-native';
import {Button, ListItem} from 'react-native-elements';
import Moment from 'moment';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class ModalSchedule extends Component{
  constructor(props){
    super(props);
  }

  render() {
    const { app, visible, setVisible } = this.props;
    Moment.updateLocale('es', {
    months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
    monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
    weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
    weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')});

    return(
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={styles.container}>
          <TouchableOpacity onPress={setVisible}>
            <View style={{width: width, height: ((height/3)*1)}}></View>
          </TouchableOpacity>
          <View style={styles.modal}>
            <View style={styles.modalHeader}>
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>{app.clinica}</Text>
              <Text style={{fontSize: 16}}>{app.especialidad}</Text>
            </View>
            <View style={styles.modalBody}>
              <ListItem 
                key={new Date(app.fecha).toDateString()}
                title='Fecha'
                subtitle={Moment(app.fecha).format('ddd, DD [de] MMMM, YYYY')}
                bottomDivider
                containerStyle={styles.listMedicalData}
                subtitleStyle={styles.subtitileMedicalList}
                titleStyle={styles.titleMedicalList}
              />
              <ListItem 
                key={new Date(app.fecha).toTimeString()}
                title='Hora'
                subtitle={Moment(app.fecha).format('hh:mm A').toString()}
                bottomDivider
                containerStyle={styles.listMedicalData}
                subtitleStyle={styles.subtitileMedicalList}
                titleStyle={styles.titleMedicalList}
              />
              <ListItem 
                key={app.medico.toString()}
                title='Médico'
                subtitle={app.medico}
                bottomDivider
                containerStyle={styles.listMedicalData}
                subtitleStyle={styles.subtitileMedicalList}
                titleStyle={styles.titleMedicalList}
              />
              <ListItem 
                key={app.sala.toString()}
                title='Sala'
                subtitle={app.sala.toString()}
                bottomDivider
                containerStyle={styles.listMedicalData}
                subtitleStyle={styles.subtitileMedicalList}
                titleStyle={styles.titleMedicalList}
              />
            </View>
            <View style={styles.modalFooter}>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button buttonStyle={[styles.buttonFooter, {backgroundColor: '#e58586'}]} title="Confirmar"/>
                <Button buttonStyle={[styles.buttonFooter, {backgroundColor: '#86bbd8'}]} title="Cancelar"/>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height
  },
    modal: {
      flex: 1,
      position: 'absolute',
      width: width,
      height: ((height/3)*2),
      backgroundColor: 'white',
      bottom: 0,
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 1,
    },
    modalHeader: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
    buttonCloseModal: {
      position: 'absolute',
      top: 0,
      right: 10,
      borderRadius: 10,
      width: 40,
      height: 40,
      zIndex: 10
    },
    modalTitleClose:{
      fontSize: 24
    },
    modalBody: {
      
    },
    listMedicalData: {
      alignItems: 'center',
      borderBottomWidth: 0.5,
      borderTopWidth: 0.5,
    },
    subtitileMedicalList: {
      textAlign: 'right',
      fontSize: 16,
      marginTop: -20,
    },
    titleMedicalList: {
      fontSize: 16,
    },
    modalFooter:{
      flex: 1,
      position: 'absolute',
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      width: width,
      height: 100
    },
    buttonFooter: {
      margin: 10,
      width: 100,
      borderRadius: 10,
      elevation: 2
    }
  });