import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'; 

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DashBoardScreen from './screens/DashBoardScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import RegisterScreen from './screens/RegisterScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator =  createStackNavigator ({
  HomeScreen: { screen: HomeScreen, navigationOptions: { header: null } },
  LoginScreen: { screen: LoginScreen, navigationOptions: { header: null } },
  RegisterScreen: { screen: RegisterScreen, navigationOptions: { header: null } },
  DashBoardScreen: { screen: DashBoardScreen },
  ResetPasswordScreen: { screen: ResetPasswordScreen },
})



