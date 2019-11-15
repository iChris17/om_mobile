import React, { Component } from 'react';
import { StyleSheet, View, AsyncStorage, Dimensions, Text, ActivityIndicator } from 'react-native';
import { Button, Image } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';

import t from 'tcomb-form-native';
import { LoginStruct, LoginOptions } from '../forms/Login';
const Form = t.form.Form;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            loginStruct: LoginStruct,
            loginOptions: LoginOptions
        }
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };

    render() {
        const { loginStruct, loginOptions } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.loginBg}>
                    <SvgXml style={styles.svgShadow} width="100%" height="100%" xml={markerRendering} preserveAspectRatio="none"/>
                </View>
                <View style={styles.loginHeader}>
                    <Image style={styles.loginImg} source={require('../../assets/logo.png')} PlaceholderContent={<ActivityIndicator/>}/>
                    <Text style={styles.loginText}>INICIO DE SESIÓN</Text>
                    <Form 
                        ref="loginForm"
                        type= {loginStruct}
                        options={loginOptions}
                    />
                    <Button buttonStyle={styles.button} title="INICIAR DE SESIÓN" onPress={this._signInAsync} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginBg: {
        position: 'absolute',
        top: -10,
        flex: 1,
        alignItems: 'center',
        width: width + 100,
        height: height * 0.7
    },
    svgShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: 0, height: 2},
        textShadowRadius: 3,
    },
    loginHeader: {
        alignItems: 'center',
        padding: 20,
        width: width,
        height: 320
    },
    loginText:{
        marginTop: 20,
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
    button: {
        backgroundColor: '#86BBD8',
        height: 50,
        width: (width * 0.5),
        borderRadius: 60,
        margin: 10
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