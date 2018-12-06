import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import * as firebase from 'firebase';
import { LinearGradient} from 'expo';
import { createBottomTabNavigator} from 'react-navigation';

import UploadTab from '../components/tabNavigator/UploadTab';
import SettingsTab from '../';
var s = require('../components/style/style');

// MIGHT NOT NEED THIS //
export default class DashboardScreen extends React.Component {
  constructor(props) {
      super(props);
  }

  render(){
    return(
      <View>
          <AppTabNavigator />
      </View>
        
    );
  }
}

const AppTabNavigator = createBottomTabNavigator ({
  UploadTab: {
    screen: UploadTab
  },

});

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