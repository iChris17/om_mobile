import {StyleSheet, View, Text} from 'react-native';
import React, {Component} from 'react';
import {Avatar, ListItem} from 'react-native-elements';

export default class componentName extends Component {
  constructor(){
    super()
    this.state={
      age:0,
      email:"",
      firstname:"",
      lastname:""
    }
  }
  goToEdit = (user) => {
    this.props.goEditUser(user);
  };

  /*componentDidMount(){
    const {age,email,firstname,lastname}= this.props.user
    
    this.setState({
      age:age,
      email:email,
      firstname:firstname,
      lastname:lastname
    })
  }*/

  render() {
    const {age,email,firstname,lastname}= this.props.user
    //console.log('didmountavatr',this.props.user)
    return (
      <View style={styles.viewBody}>
        <Text style={styles.text}>MI CUENTA</Text>
        <ListItem
          leftAvatar={
            <Avatar
              size="medium"
              rounded
              icon={{
                name: 'account-circle',
                type: 'material-community',
                size: 50,
              }}
            />
          }
          title={firstname + ' ' + lastname}
          titleStyle={{fontWeight: 'bold', fontSize: 16, color: 'white'}}
          subtitle={
            <View>
              <Text style={{color: 'white'}}>
                {email + ' (' + age + ' años)'}
              </Text>
            </View>
          }
          chevron={{color: 'black'}}
          containerStyle={styles.ProfileItem}
          onPress={() => {
            this.props.goEditUser(this.props.user);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    marginTop: 5,
    marginBottom: 30,
  },
  text: {
    color: '#8e8e93',
    marginBottom: 5,
  },
  AvatarContainer: {
    marginRight: 10,
    marginLeft: 10,
  },
  GeneralDataContainer: {
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  HeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  DataText: {
    fontSize: 14,
  },
  ProfileItem: {
    backgroundColor: '#f7a9ab',
    borderRadius: 10,
  },
});
