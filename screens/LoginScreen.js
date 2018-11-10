import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Button } from 'react-native';
import * as firebase from 'firebase';

export default class LoginScreen extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	      email: "",
	      password: "",
	    };
	  }
  	onLoginPress = () => {
    	firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    	.then(() => { 
      //nothing to display as user log in is successful
      this.props.navigation.navigate('DashBoardScreen');
      console.log('I\'ve been transfered to the Dashboard');

    }, (error) => {
      //this will have to change to proper error message
      Alert.alert(error.message);
    })
  }
  goToRegister = () => {
    this.props.navigation.navigate('RegisterScreen');
  }
  
  render(){
		return (
			<View style={styles.formContainer}>
		        <TextInput placeholder='email' style={styles.textInput} underlineColorAndroid={'transparent'}
		          value= {this.state.email}
		          onChangeText= {(text) => { this.setState({email: text}) }}
		        />
		        <TextInput placeholder='password' secureTextEntry={true} style={styles.textInput} underlineColorAndroid={'transparent'}
		          value= {this.state.password}
		          onChangeText= {(text) => { this.setState({password: text}) }}
		        />
		        <Button title= "Log in" onPress={this.onLoginPress} />
            <Text>Don't have an account?</Text>
            <Button title= "Register" onPress={this.goToRegister} />
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