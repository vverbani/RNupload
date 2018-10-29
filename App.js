import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Image, TextInput, KeyboardAvoidingView } from 'react-native';
//import { AppLoading, Asset, Font, Icon } from 'expo';
//import AppNavigator from './navigation/AppNavigator';
import Form from './components/Form'

export default class App extends React.Component {
  render(){
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.header}>LOGIN</Text>
        <Form/>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    color:'#294294',
    fontWeight: 'bold',
  }
});
