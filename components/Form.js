import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import ApiKeys from '../constants/ApiKeys.js';
import * as firebase from 'firebase';

export default class Form extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoadingComplete: false,
    };
    //initialize firebase/ check connection
    if(!firebase.apps.length){
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
  }
  //React Native / Expo: Firebase Authentication Starter Tutorial
  render(){
    return(
      <View style={styles.formContainer}>
        <TextInput placeholder='Username' style={styles.textInput} underlineColorAndroid={'transparent'}/>
        <TextInput placeholder='Password' secureTextEntry={true} style={styles.textInput} underlineColorAndroid={'transparent'}/>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
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
