import React, { Component } from 'react';
import {View, Image, Alert, Text, Button, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import * as firebase from 'firebase';
import { LinearGradient} from 'expo';

var s = require('../components/style/style');

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
      console.log('I\'ve been transfered to the Dashboard');

    }, (error) => {
      //this will have to change to proper error message
      Alert.alert(error.message);
    })

  }
  //retain user login data through facebook
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null){
        console.log(user);
      }
    })
  }
  
  goToRegister = () => {
    this.props.navigation.navigate('RegisterScreen');
  }

  render(){
		return (

      <KeyboardAvoidingView behavior='padding' style={s.container}>

      <LinearGradient colors={['#7321bf','#24a486']} start={[0,1]} end={[1,0]} style={s.topGradient}>
        <Image source={require('../assets/images/logo.png')} style={s.logo}/>
      </LinearGradient>

      <View style={s.contentBackground}>

			    <View style={s.formContainer}>

          <View>
            <Image source={require('../assets/images/iconEmail.jpg')} resizeMode='contain' style={s.icon}/>
		        <TextInput placeholder='email' placeholderTextColor={'#98d4cd'} style={s.textInput} underlineColorAndroid={'transparent'}
              value= {this.state.email}
		          onChangeText= {(text) => { this.setState({email: text}) }}
		        />
          </View>

          <View>
            <Image source={require('../assets/images/iconLock.jpg')} resizeMode='contain' style={s.icon}/>
		        <TextInput placeholder='password' secureTextEntry={true} placeholderTextColor={'#98d4cd'} style={s.textInput} underlineColorAndroid={'transparent'}
              value= {this.state.password}
		          onChangeText= {(text) => { this.setState({password: text}) }}
		        />
          </View>

          <TouchableOpacity onPress={this.onLoginPress}>
            <LinearGradient style={s.button} colors={['#7321bf','#24a486']} start={[0,1]} end={[1,0]}>
              <Text style={s.buttonText}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={s.button}>
            <Text style={s.buttonTextFB}>Sign In With Facebook</Text>
          </TouchableOpacity>

          <View style={{flexDirection:"row"}}>
            <Text style={s.textNormal}>Don't have an account?</Text>
            <TouchableOpacity onPress={this.goToRegister}>
              <Text style={s.textDark}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>

    </KeyboardAvoidingView>
		);
	}
}