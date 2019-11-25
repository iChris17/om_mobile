import React, {Component} from 'react';
import {StyleSheet, View, Text, Modal, Dimensions} from 'react-native';
import {Button, ListItem} from 'react-native-elements';
import Moment from 'moment';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class ModalSchedule extends Component{
  constructor(props){
      super(props);
  }

  setModalVisible(visible) {
    this.props.visible = visible;
  }
  render() {
    const { app, visible, setVisible } = this.props;
    Moment.locale('es', {
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
        <View style={styles.modal}>
          <Button 
            buttonStyle={styles.buttonCloseModal}
            titleStyle={styles.modalTitleClose}
            type="clear" 
            title="&times;"
            onPress={setVisible}
          />
          <View style={styles.modalHeader}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>{app.clinica}</Text>
            <Text style={{fontSize: 16}}>{app.especialidad}</Text>
          </View>
          <View style={styles.modalBody}>
            <ListItem 
              key={1}
              title='Fecha'
              subtitle={Moment(app.fecha).format('ddd, DD [de] MMMM, YYYY')}
              bottomDivider
              containerStyle={styles.listMedicalData}
              subtitleStyle={styles.subtitileMedicalList}
              titleStyle={styles.titleMedicalList}
            />
            <ListItem 
              key={2}
              title='Hora'
              subtitle={Moment(app.fecha).format('hh:mm A')}
              bottomDivider
              containerStyle={styles.listMedicalData}
              subtitleStyle={styles.subtitileMedicalList}
              titleStyle={styles.titleMedicalList}
            />
            <ListItem 
              key={3}
              title='Médico'
              subtitle={app.medico}
              bottomDivider
              containerStyle={styles.listMedicalData}
              subtitleStyle={styles.subtitileMedicalList}
              titleStyle={styles.titleMedicalList}
            />
            <ListItem 
              key={4}
              title='Sala'
              subtitle={app.sala}
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
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
    modal: {
      position: 'absolute',
      width: width,
      height: ((height/2)),
      backgroundColor: 'white',
      bottom: 0,
      elevation: 10
    },
    modalHeader: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
    buttonCloseModal: {
      position: 'absolute',
      right: 10,
      borderRadius: 10,
      width: 40,
      height: 40
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