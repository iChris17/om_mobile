import React, { Component } from 'react'
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'react-native-elements';

import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../Screens/Home'
import UserSchedule from '../Screens/User_Schedule'
import UserFile from '../Screens/User_File'
import UserAccount from '../Screens/User_Account'

const HomeStack = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Inicio',
        headerStyle:{
          backgroundColor:"#1B4079"
        },
        headerTitleStyle:{
          color:"#86BBD8"
        }
      }),
    },
  });

  const UserScheduleStack = createStackNavigator({
    Home: {
      screen: UserSchedule,
      navigationOptions: ({navigation}) => ({
        title: 'Agenda',
        headerStyle:{
          backgroundColor:"#1B4079"
        },
        headerTitleStyle:{
          color:"#86BBD8"
        }
      }),
    },
  });

  const UserFileStack = createStackNavigator({
    Home: {
      screen: UserFile,
      navigationOptions: ({navigation}) => ({
        title: 'Expediente',
        headerStyle:{
          backgroundColor:"#1B4079"
        },
        headerTitleStyle:{
          color:"#86BBD8"
        }
      }),
    },
  });

  const UserAccountStack = createStackNavigator({
    Home: {
      screen: UserAccount,
      navigationOptions: ({navigation}) => ({
        title: 'Cuenta',
        headerStyle:{
          backgroundColor:"#1B4079"
        },
        headerTitleStyle:{
          color:"#86BBD8"
        }
      }),
    },
  });

  const MainStack = createBottomTabNavigator(
    {
      Home: {
        screen: HomeStack,
        navigationOptions: ({navigation}) => ({
          tabBarLabel: 'Inicio',
          tabBarIcon: ({tintColor}) => (
            <Icon
              name="home-outline"
              type="material-community"
              size={22}
              color={tintColor}
            />
          ),
        }),
      },
      UserSchedule:{
        screen: UserScheduleStack,
        navigationOptions: ({navigation}) => ({
          tabBarLabel: 'Agenda',
          tabBarIcon: ({tintColor}) => (
            <Icon
              name="calendar-heart"
              type="material-community"
              size={22}
              color={tintColor}
            />
          ),
        }),
      },
      UserFile:{
        screen: UserFileStack,
        navigationOptions: ({navigation}) => ({
          tabBarLabel: 'Expediente',
          tabBarIcon: ({tintColor}) => (
            <Icon
              name="file-document-edit-outline"
              type="material-community"
              size={22}
              color={tintColor}
            />
          ),
        }),
      },
      UserAccount:{
        screen: UserAccountStack,
        navigationOptions: ({navigation}) => ({
          tabBarLabel: 'Cuenta',
          tabBarIcon: ({tintColor}) => (
            <Icon
              name='account-circle'
              type='material-community'
              size={22}
              color={tintColor}
            />
          ),
        }),
      }
    },
    {
      initialRouteName:"Home",
      order:["Home","UserSchedule","UserFile","UserAccount"],
      tabBarOptions: {
        inactiveTintColor: '#86BBD8',
        activeTintColor: '#F7A9A8'  ,
        style:{
          backgroundColor:"#1B4079"
        }     
      },
    },
  );
  
  export default createAppContainer(MainStack);
  