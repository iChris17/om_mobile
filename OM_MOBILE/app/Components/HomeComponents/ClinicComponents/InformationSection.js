import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, ButtonGroup, Icon} from 'react-native-elements';

const btnContact = () => (
  <View>
    <Icon name="phone" type="material-community" color="gray" />

    <Text>Contacto</Text>
  </View>
);
const btnSchedule = () => (
  <View>
    <Icon name="clock-outline" type="material-community" color="gray" />

    <Text>Horario</Text>
  </View>
);
const btnSpec = () => (
  <View>
    <Icon name="hospital" type="material-community" color="gray" />

    <Text>Especialidad</Text>
  </View>
);
const btnAppoint = () => (
  <View>
    <Icon name="calendar-text-outline" type="material-community" color="gray" />

    <Text>Cita</Text>
  </View>
);

export default class componentName extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: -1,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }
  updateIndex(selectedIndex) {
    this.setState({selectedIndex});
    console.log(selectedIndex)
  }

  render() {
    const {selectedIndex} = this.state;
    const buttons = [
      {element: btnContact},
      {element: btnSchedule},
      {element: btnSpec},
      {element: btnAppoint},
    ];
    return (
      <View style={styles.viewBody}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 80}}
          selectedButtonStyle={{backgroundColor:"#e5e5ea"}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    
  },
  btnSectionStyles: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // marginLeft:20,
    // marginRight:20
    //width:"80%"
  },
});
