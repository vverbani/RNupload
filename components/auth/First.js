import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import * as firebase from 'firebase';

export default class Login extends React.Component {

  render(){
    return(
      <View style={styles.formContainer}>
        
        <Text> This is the first screen></Text>
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
  },
  button:{
    marginTop:30,
    alignSelf: 'stretch',
    padding: 22,
    backgroundColor: '#294294',
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
  },
  buttonText:{
    color:'#FFF',
    fontSize:22,
  }
});
