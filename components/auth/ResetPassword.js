import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import * as firebase from 'firebase';

export default class ResetPassword extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: "",
    };
  }

  onResetPasswordPress = () => {
    firebase.auth().sendPasswordResetEmail(this.state.email)
      .then( () => {
          Alert.alert("Password reset email has been sent.");
      }, (error) => {
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
        <Button title= "Reset Password" onPress={this.onResetPasswordPress} />
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
