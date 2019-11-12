/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import AuthScreen from './app/Main Navigation/auth-screen';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <AuthScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1   
  }
});

export default App;
