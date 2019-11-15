import React, { Component } from 'react';
import { StyleSheet, View, AsyncStorage, Dimensions, Text, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { Button, Image, Icon } from 'react-native-elements';
import { SvgXml } from 'react-native-svg';

import t from 'tcomb-form-native';
import { LoginStruct, LoginOptions } from '../forms/Login';
import { bold } from 'colorette';
const Form = t.form.Form;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            loginStruct: LoginStruct,
            loginOptions: LoginOptions,
            invalid: false
        }
    }

    _signInAsync = async () => {
        const validate = this.refs.loginForm.getValue();
        if(validate) {
            this.setState({invalid: false});
            await AsyncStorage.setItem('userToken', 'abc');
            this.props.navigation.navigate('App');
        } else {
            this.setState({invalid: true});
        }
    };

    render() {
        const { loginStruct, loginOptions, invalid } = this.state;

        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={styles.loginBg}>
                    <SvgXml style={styles.svgShadow} width="100%" height="100%" xml={markerRendering} preserveAspectRatio="none"/>
                </View>
                <View style={styles.loginHeader}>
                    <Image style={styles.loginImg} source={require('../../assets/logo.png')} PlaceholderContent={<ActivityIndicator/>}/>
                    <Text style={styles.loginText}>INICIO DE SESIÓN</Text>
                </View>
                <View style={styles.loginForm}>
                    { invalid ? (
                        <Text style={styles.textForm}>USUARIO O CONTRASEÑA INVALIDOS</Text>
                    ) : (
                        null
                    )}
                    <Form 
                        ref="loginForm"
                        type= {loginStruct}
                        options={loginOptions}
                    />
                    <Button buttonStyle={styles.button} title="INICIAR DE SESIÓN" onPress={this._signInAsync} />
                </View>
                <View style={styles.loginFooter}>
                    <View style={{flexDirection: 'row', flexWrap:'wrap'}}>
                        <Button
                            icon={
                                <Icon
                                    name='google'
                                    type='font-awesome'
                                    size={50}
                                    color='#1B4079'
                                />
                            }
                            buttonStyle={styles.buttonFooter}
                        />
                        <Button
                            icon={
                                <Icon
                                    name='apple'
                                    type='font-awesome'
                                    size={50}
                                    color='#1B4079'
                                />
                            }
                            buttonStyle={styles.buttonFooter}
                        />
                    </View>
                    <Button
                        title="¿Olvidó su contraseña?"
                        type="clear"
                        style={{flex: 1, position: 'absolute', marginTop: 50}}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: width,
        height: height
    },
    loginBg: {
        position: 'absolute',
        top: -10,
        flex: 1,
        alignItems: 'center',
        width: width + 100,
        height: height * 0.6
    },
    loginHeader: {
        top: 0,
        alignItems: 'center',
        paddingTop: 20,
        width: width,
        height: height * 0.4,
    },
    loginText:{
        marginTop: 50,
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: 0, height: 2},
        textShadowRadius: 3,
    },
    loginImg: {
        width: (width * 0.5),
        height: 200
    },
    loginForm: {
        paddingTop: 20,
        alignItems: 'center',
        width: width,
        height: height * 0.4,
    },
    textForm: {
        position: 'absolute',
        top: 10,
        color: '#e80000',
        fontSize: 12,
        fontWeight: 'bold',
        textShadowColor: 'rgba(255, 255, 255, 0.5)',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 3,
    },
    button: {
        backgroundColor: '#86BBD8',
        height: 50,
        width: (width * 0.5),
        borderRadius: 60,
        margin: 10
    },
    loginFooter: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: width,
        height: height * 0.2,
        bottom: 0,
    },
    buttonFooter: {
        backgroundColor: 'transparent',
        marginLeft: 10,
        marginRight: 10
    },
    buttonFooterIcon: {
        width: 70,
        height: 70
    }
});

const markerRendering = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1459.538" height="1248.49" viewBox="0 0 1459.538 1248.49">
<defs>
  <linearGradient id="linear-gradient" x1="1" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
    <stop offset="0" stop-color="#1b4079"/>
    <stop offset="1" stop-color="#86bbd8"/>
  </linearGradient>
  <filter id="Trazado_1" x="0" y="0" width="1459.538" height="1248.49" filterUnits="userSpaceOnUse">
    <feOffset dy="5" input="SourceAlpha"/>
    <feGaussianBlur stdDeviation="7.5" result="blur"/>
    <feFlood/>
    <feComposite operator="in" in2="blur"/>
    <feComposite in="SourceGraphic"/>
  </filter>
</defs>
<g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Trazado_1)">
  <path id="Trazado_1-2" data-name="Trazado 1" d="M-158.428,1116.542S1041.1,1139.175,1256.11,690.295V-86.758H-158.428Z" transform="translate(180.93 104.26)" fill="url(#linear-gradient)"/>
</g>
</svg>`;