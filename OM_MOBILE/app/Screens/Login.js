import React, { Component } from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';

export default class Login extends Component {
    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Inicio de Sesión" onPress={this._signInAsync} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});