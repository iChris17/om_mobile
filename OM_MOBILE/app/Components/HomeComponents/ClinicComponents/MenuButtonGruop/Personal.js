import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {Avatar} from 'react-native-elements';

export default class Personal extends Component {
  constructor() {
    super();
    this.state = {
      personal: [],
    };
  }

  async componentDidMount() {
    
  }
  render() {
    const {personal} = this.props;
    return (
      <View style={styles.viewbody}>
        {personal.map((u, i) => {
          let personalSpecialty = u.personalSpecialty;

          return personalSpecialty.map((p, j) => {
            let person = p.idPersonalNavigation;
           
            return (
              <View key={person.id} style={styles.personalStyles}>
                <Avatar
                  rounded
                  source={{
                    uri: `data:image/jpeg;base64,${person.vlImage}`
                  }}
                  size="large"
                  renderPlaceholderContent={<ActivityIndicator/>}
                />
                <Text style={styles.namePersonal}>
                  {person.firstname +
                    ' ' +
                    person.lastname}
                </Text>
                <Text style={styles.nameSpecialty}>{u.name}</Text>
              </View>
            );
          });
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewbody: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  personalStyles: {
    alignItems: 'center',
    width: '33%',
    marginTop: 10,
    marginBottom: 10,
  },
  namePersonal: {
    fontWeight: 'bold',
    marginLeft: 5,
    textAlign: 'center',
    fontSize: 16,
  },
  nameSpecialty: {
    textAlign: 'center',
  },
});
