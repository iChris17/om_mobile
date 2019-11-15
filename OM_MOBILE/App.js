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

import MainScreen from './app/Main Navigation/main_screen';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <MainScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1   
  }
});

export default App;
