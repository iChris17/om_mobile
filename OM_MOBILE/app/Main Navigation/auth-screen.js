import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MainScreen from './../Screens/Main';
import LoginScreen from './../Screens/Login';
import AuthLoadingScreen from './../utils/loading';

const AuthStack = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null,
        }
    }
});

const MainStack = createStackNavigator({
    Main: {
        screen: MainScreen,
        navigationOptions: {
            header: null,
        }
    }
});

const SwitchAuth = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: MainStack,
    Auth: AuthStack
}, {
    initialRouteName: 'AuthLoading'
});

export default createAppContainer(SwitchAuth);
