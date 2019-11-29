import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {Image,Tile} from 'react-native-elements';

export default class componentName extends Component {
  render() {
    const {LogoUrl, Name, City} = this.props;
    return (
      <View style={styles.viewBody}>
        <Tile
          imageSrc={{uri: LogoUrl}}
          title={Name}
          overlayContainerStyle={{backgroundColor:"white"}}
          imageProps={{resizeMode:'stretch'}}
        />
  <Text style={styles.subtitleStyles}>{City}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoStyles: {
    height: 70,
  },
  subtitleStyles:{
marginLeft:15,
marginTop:-10,
fontSize:18,
  },
  titleView:{
      borderWidth:1,
      borderLeftWidth:0,
      borderRightWidth:0,
      borderBottomWidth:0,
      borderColor:"gray"
  },
  viewBody:{
    backgroundColor:"white"
  }
});
