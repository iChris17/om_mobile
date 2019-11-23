import React, { Component } from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'react-native-elements';

import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../Screens/Home';
import UserSchedule from '../Screens/User_Schedule';
import UserFile from '../Screens/User_File';
import UserAccount from '../Screens/User_Account';
import LoginScreen from './../Screens/Login';
import AuthLoadingScreen from './../utils/loading';
import EditUserInfoScreen from './../Components/AccountComponents/EditUserInfo'

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Inicio',
      headerStyle:{
        backgroundColor:"white"
      },
      headerTitleStyle:{
        color:"black",
        fontSize:20
      }
    }),
  },
});

const UserScheduleStack = createStackNavigator({
  Home: {
    screen: UserSchedule,
  },
});

const UserFileStack = createStackNavigator({
  Home: {
    screen: UserFile,
    navigationOptions: ({navigation}) => ({
      title: 'Expediente',
      headerStyle:{
        backgroundColor:"white"
      },
      headerTitleStyle:{
        color:"black",
        fontSize:20
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
        backgroundColor:"white"
      },
      headerTitleStyle:{
        color:"black",
        fontSize:20
      }
    }),
  },
  EditUserInfo: {
    screen: EditUserInfoScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Editar Cuenta',
      headerStyle:{
        backgroundColor:"white"
      },
      headerTitleStyle:{
        color:"black",
        fontSize:20
      }
    }),
  }
});

const AuthStack = createStackNavigator({
  Login: {
      screen: LoginScreen,
      navigationOptions: {
          header: null,
      }
  }
});

const MainStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: 'Inicio',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="home"
            type="material-community"
            size={33}
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
            size={33}
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
            size={33}
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
            size={33}
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
      inactiveTintColor: 'gray',
      activeTintColor: '#86bbd8'  ,
      style:{
        backgroundColor:"white"
      
      } ,
      showLabel:false    
    },
  },
);

const SwitchAuth = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: MainStack,
  Auth: AuthStack,
}, {
  initialRouteName: 'AuthLoading'
});

export default createAppContainer(SwitchAuth);
  