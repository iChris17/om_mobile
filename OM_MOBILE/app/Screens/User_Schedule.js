import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {Button, Icon} from 'react-native-elements';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun",
  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
];

export default class UserSchedule extends Component {
  constructor(){
    super();
    this.state = {
      now: ''
    }
  }

  componentDidMount() {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth(); //Current Month
    var year = new Date().getFullYear(); //Current Year
    this.setState({
      //Setting the value of the date time
      now:
      year + ' ' + monthNames[month],
    });
  }

  render() {
    const { now } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerNow}>
            <Text style={styles.textNow}>{now.toString()}</Text>
          </View>
          <View style={styles.headerButton}>
            <Button type="clear" icon={ <Icon name="clipboard-text-outline" type='material-community' size={30} color="black" />}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: 50
  },
  headerNow: {
    paddingLeft: 20,
    width: '70%'
  },
  textNow: {
    fontSize: 24,
    color: '#000'
  },
  headerButton: {
    width: '20%'
  }
});