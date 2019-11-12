import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import MainScreen from './../Main Navigation/main_screen'

export default class Main extends Component {
    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };

    render() {
        return (
            <View style={styles.container}>
                <MainScreen />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1   
    }
});