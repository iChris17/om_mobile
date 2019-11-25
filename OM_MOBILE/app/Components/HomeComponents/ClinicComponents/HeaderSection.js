import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {Image,Divider} from 'react-native-elements';

export default class componentName extends Component {
  render() {
    const {LogoUrl, Name, City} = this.props;
    return (
      <View>
        <Image
          source={{uri: LogoUrl}}
          PlaceholderContent={<ActivityIndicator />}
          resizeMode="contain"
          style={styles.logoStyles}
        />
    <View style={styles.titleView}>    
    <Text style={styles.tilteStyles}>{Name}</Text>
    <Text style={styles.subtitleStyles}>{City}</Text>
    </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoStyles: {
    width: '100%',
    height: 150,
  },
  tilteStyles:{
      textAlign:"left",
      fontWeight:"bold",
      fontSize:20,
      marginBottom:5,
      textTransform:"uppercase",
      marginLeft:5,
      marginRight:5
  },
  subtitleStyles:{
marginLeft:5
  },
  titleView:{
      borderWidth:1,
      borderLeftWidth:0,
      borderRightWidth:0,
      borderColor:"black"
  }
});
