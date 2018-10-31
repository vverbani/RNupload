import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import ApiKeys from '../constants/ApiKeys.js';
import * as firebase from 'firebase';

export default class Form extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoadingComplete: false,
      email: "",
      password: "",
      passwordConfirm: "",
    };
  }

  onSignupPress = () => {
    if(this.state.password !== this.state.passwordConfirm){
      Alert.alert("Passwords do not match");
      return;
    } 
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => { }, (error) => {
      Alert.alert(error.message);
    });
  }

  render(){
    return(
      <View style={styles.formContainer}>
        <TextInput placeholder='email' style={styles.textInput} underlineColorAndroid={'transparent'}
          value= {this.state.email}
          onChangeText= {(text) => { this.setState({email: text}) }}
        />
        <TextInput placeholder='password' secureTextEntry={true} style={styles.textInput} underlineColorAndroid={'transparent'}
          value= {this.state.password}
          onChangeText= {(text) => { this.setState({password: text}) }}
        />
        <TextInput placeholder='password' secureTextEntry={true} style={styles.textInput} underlineColorAndroid={'transparent'}
          value= {this.state.passwordConfirm}
          onChangeText= {(text) => { this.setState({passwordConfirm: text}) }}
        />
        <Button title= "Sign Up" onPress={this.onSignupPress} />
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
