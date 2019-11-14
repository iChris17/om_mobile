import {StyleSheet, View, Text} from 'react-native';
import React, { Component } from 'react';
import {Avatar,ListItem} from 'react-native-elements'

let Name="Christopher Acevedo"
let Gender="Masculino, "
let Mail="prueba@gmail.com, "
let Age = "20 "

export default class componentName extends Component {
  render() {
    return (
      <View style={styles.viewBody}>
          <ListItem
          leftAvatar={<Avatar
            size="medium"
            rounded
            title="CR"           
          />}
          title={Name}
          subtitle={
              <View>
            <Text>{Gender +Mail+Age}</Text>
            </View>
          }
          chevron={{ color: 'black'}}
          containerStyle={styles.ProfileItem}
          onPress={()=>{
              console.log('presionada listas')
          }}
          />
          
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
    viewBody:{      
        borderColor:"black",
        borderWidth:1,
      //  flexDirection:"row"             
    },
    AvatarContainer:{       
        marginRight:10,
        marginLeft:10,
       // marginTop:10,
       // marginBottom:10
    },
    GeneralDataContainer:{
        flex:2,       
        marginRight:5,
       // marginLeft:5,
        marginTop:5,
        marginBottom:5
    },
    HeaderText:{
        fontSize:16,
        fontWeight:"bold"
    },
    DataText:{
        fontSize:14
    },
    ProfileItem:{
        backgroundColor:"gray"
    }
})
