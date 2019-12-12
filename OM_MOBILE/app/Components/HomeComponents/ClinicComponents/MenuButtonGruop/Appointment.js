import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Button, Input,Icon} from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-community/async-storage';
import Moment from 'moment';
import axios from 'axios'
import config from '../../../../config/API_CONNECTION'

export default class Appointment extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            time: new Date(),
            showDate: false,
            showTime: false
        }
    }

    setDate = (event, date) => {
        date = date || this.state.date;

        this.setState({
            showDate: Platform.OS === 'ios' ? true : false,
            date,
        });
    }

    setTime = (event, time) => {
        time = time || this.state.time;

        this.setState({
            showTime: Platform.OS === 'ios' ? true : false,
            time,
        });
    }

    datepicker() {
        this.setState({
            showDate: true
        });
    }

    timepicker() {
        this.setState({
            showTime: true
        });
    }

    handleSave = async () => {
        const {Clinic} = this.props;
        const {date, time} = this.state;
        const idUser = await AsyncStorage.getItem('IdUser');

        const obj = {
            id: 0,
            idCompany: Clinic,
            vlDays: date.toLocaleDateString(),
            vlHours: time.toTimeString(),
            dtRegistered: new Date(),
            usRegistered: idUser,
            dtUpdate: new Date(),
            usUpdated: ''
        }

        await axios.post(config.apiAddress+'/api/ClinicSchedules', obj)
            .then((res) => {
                alert('Su solicitud ha sido enviada')
            }).catch((err) => {console.log(err)})
    }

    render() {
        const { showDate, showTime, date, time } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Solicita una nueva cita</Text>
                <View style={styles.body}>
                    <Input
                        containerStyle={styles.containerStyle}
                        inputStyle={styles.inputStyle}
                        disabled
                        label='Fecha de la cita'
                        placeholder='Fecha de la cita'
                        rightIcon={<Icon name="calendar-month" type="material-community" color="gray" onPress={() => this.datepicker()} />}
                        value={Moment(date).format('dddd, DD [de] MMM YYYY')}
                    />
                    <Input
                        containerStyle={styles.containerStyle}
                        inputStyle={styles.inputStyle}
                        disabled
                        label='Hora de la cita'
                        placeholder='Hora de la cita'
                        rightIcon={<Icon name="clock" type="material-community" color="gray" onPress={() => this.timepicker()} />}
                        value={Moment(time).format('hh:mm a')}
                    />
                    <Button 
                        title='Solicitar'
                        buttonStyle={styles.button}
                        onPress={() => this.handleSave()}
                    />
                </View>
                { showDate && <DateTimePicker value={date}
                    mode='date'
                    is24Hour={true}
                    display="default"
                    onChange={this.setDate} />
                }
                {
                    showTime && <DateTimePicker value={time}
                    mode='time'
                    is24Hour={false}
                    display="default"
                    onChange={this.setTime} />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center'
    },
    title: {
        fontSize: 18
    },
    body: {
        marginTop: 15
    },
    containerStyle: {
        marginBottom: 20
    },
    inputStyle: {
        fontSize: 14
    },
    labelStyles: {
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 16,
        marginTop: 5,
        marginBottom: 0,
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#e58586',
        borderRadius: 10,
        height: 50
    }
});