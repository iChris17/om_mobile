import React, { Component } from 'react';
import { StyleSheet, View, AsyncStorage, Dimensions, Text, ActivityIndicator } from 'react-native';
import { Button, Image } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import Logo from './../../assets/logo.png';

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
                <LinearGradient colors={['#1B4079', '#86BBD8']} start={{x: 1, y: 0}} end={{x: 0, y: 1}}>
                    <View style={styles.loginHeader}>
                        <Image style={styles.loginImg} source={require('../../assets/logo.png')} PlaceholderContent={<ActivityIndicator/>}/>
                        <Text style={styles.loginText}>INICIO DE SESIÓN</Text>
                    </View>
                </LinearGradient>
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
        padding: 20
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
    }
});