import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, ButtonGroup, Icon} from 'react-native-elements';
import MenuButtonGroup from './MenuButtonGruop/index'

const btnContact = () => (
  <View>
    <Icon name="alert-circle-outline" type="material-community" color="gray" />
    <Text>Info.</Text>
  </View>
);
const btnSchedule = () => (
  <View>
    <Icon name="account-card-details-outline" type="material-community" color="gray" />
    <Text>Personal</Text>
  </View>
);
const btnSpec = () => (
  <View>
    <Icon name="hospital" type="material-community" color="gray" />
    <Text>Servicios</Text>
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
      selectedIndex: 0,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }
  updateIndex(selectedIndex) {
    this.setState({selectedIndex});   
  }

  render() {
    const {selectedIndex} = this.state;
    const buttons = [
      {element: btnContact},
      {element: btnSchedule},
      {element: btnSpec},
      {element: btnAppoint},
    ];
    const {Address,Description} = this.props
    return (
      <View style={styles.viewBody}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 80, borderRadius:10}}
          selectedButtonStyle={{backgroundColor:"#e5e5ea"}}
        />
        <MenuButtonGroup Option={selectedIndex} Address={Address} Description={Description}/>
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
