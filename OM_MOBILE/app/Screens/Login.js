import React, { Component } from 'react';
import { StyleSheet, View, AsyncStorage, Dimensions, Text, ActivityIndicator } from 'react-native';
import { Button, Image } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';

import fondo from '../../assets/bg01.svg';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Login extends Component {
    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginHeader}>
                    <SvgXml style={{margin: 0}} width={"100%"} height={height*0.6} xml={markerRendering} />
                </View>
                {/* <LinearGradient colors={['#1B4079', '#86BBD8']} start={{x: 1, y: 0}} end={{x: 0, y: 1}}>
                    <View style={styles.loginHeader}>
                        <Image style={styles.loginImg} source={require('../../assets/logo.png')} PlaceholderContent={<ActivityIndicator/>}/>
                        <Text style={styles.loginText}>INICIO DE SESIÓN</Text>
                    </View>
                </LinearGradient> */}
                <Button buttonStyle={styles.button} title="INICIAR DE SESIÓN" onPress={this._signInAsync} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginHeader: {
        width: width,
        height: (height*0.40),
        borderRadius: 60,
        alignItems: 'center',
        padding: 0
    },
    loginText:{
        position: 'absolute',
        bottom: 20,
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
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
  <linearGradient id="linear-gradient" x1="0.884" y1="0.086" x2="0.116" y2="0.984" gradientUnits="objectBoundingBox">
    <stop offset="0" stop-color="#1b4079"/>
    <stop offset="1" stop-color="#86bbd8"/>
  </linearGradient>
  <filter id="Trazado_1" x="0" y="0" width="1459.538" height="1248.49" filterUnits="userSpaceOnUse">
    <feOffset dy="5" input="SourceAlpha"/>
    <feGaussianBlur stdDeviation="7.5" result="blur"/>
    <feFlood flood-opacity="0.502"/>
    <feComposite operator="in" in2="blur"/>
    <feComposite in="SourceGraphic"/>
  </filter>
</defs>
<g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Trazado_1)">
  <path id="Trazado_1-2" data-name="Trazado 1" d="M-158.428,1116.542S1041.1,1139.175,1256.11,690.295V-86.758H-158.428Z" transform="translate(180.93 104.26)" fill="url(#linear-gradient)"/>
</g>
</svg>`;