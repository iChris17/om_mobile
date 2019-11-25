import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, ScrollView} from 'react-native';
import {Button,SearchBar} from 'react-native-elements';

import HomeMainComponent from '../Components/HomeComponents/index'

const dim=Dimensions.get('screen')

export default class Home extends Component {
  goClinic = (params=null) => {
    this.props.navigation.navigate('Clinic',{params})
  };
  render() {
    return (
      <ScrollView>
        <SearchBar placeholder="Buscar" platform={Platform.OS==="ios"?"ios":"android"} searchIcon showCancel/>
      <ScrollView contentContainerStyle={styles.viewBody}>
        <HomeMainComponent goClinic={this.goClinic} />
      </ScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    backgroundColor: '#f2f2f7',
    
  },
});