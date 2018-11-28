import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import * as firebase from 'firebase';
import { LinearGradient} from 'expo';

var s = require('../components/style/style');

export default class DashboardScreen extends React.Component {
  constructor(props) {
      super(props);
  }

  render(){
    return(
      <View>
          <Text>Dashboard</Text>
      </View>
        
    );
  }
}

const styles = StyleSheet.create({
  formContainer:{
    alignSelf: 'stretch',
    paddingLeft: 20,
    paddingRight: 20,
  },
  textInput:{
    fontSize:20,
    marginTop:30,
    alignSelf: 'stretch',
    padding: 16,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#294294',
  }
});