import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import AvatarSection from'./AvatarSection'

export default class AccountMainComponent extends Component {
  render() {
    return (
      <View style={styles.viewBody}>
        <AvatarSection/>
      </View>
    );
  }
}

const styles =StyleSheet.create({
    viewBody:{
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        marginBottom:10
    }
})
