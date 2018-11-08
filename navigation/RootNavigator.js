import React from 'react';
import {  StyleSheet, Text,TextInput, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Dashboard from '../components/auth/Dashboard';
import First from '../components/auth/First';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import ResetPassword from '../components/auth/ResetPassword';

export default class App extends React.Component {
  render(){
    return(
        <AppStackNavigator />
    )
  }
}
{/*
const AppStackNavigator = createStackNavigator({
    AuthFlow: {
      screen: createStackNavigator({
        First: { screen: First },
        Register: { screen: Register },
        Login: { screen: Login },
        ResetPassword: { screen: ResetPassword }
      })  
    },
    DashboardFlow: {
      screen: createStackNavigator({
        Dashboard: { screen: Dashboard }
      })
    }
  });

*/}

const AppStackNavigator = createStackNavigator({
    First: { screen: First },
    Register: { screen: Register },
    Login: { screen: Login },
    ResetPassword: { screen: ResetPassword }
  });

const styles = StyleSheet.create({
});
