import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import t from 'tcomb-form-native';
import {CitaStruct, CitaOptions} from '../../../../forms/Appointment';

const Form = t.form.Form;

export default class Appointment extends Component {
    render() {
        return (
            <View>
                <Form type={CitaStruct} options={CitaOptions}/>
            </View>
        )
    }
}