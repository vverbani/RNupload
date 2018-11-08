import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import SignOut from './SignOut';
import * as firebase from 'firebase';

export default class Dashboard extends React.Component {

  render(){
    return(
      <View style={styles.formContainer}>
       <Text style={styles.TextInput}>You are on the Dashboard Sir!</Text>
      </View>
    )
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
