import React, { Component } from 'react';
import {View, Image, Alert, Text, Button, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as firebase from 'firebase';
import { LinearGradient} from 'expo';
import * as Expo from 'expo';
import { NavigationActions } from 'react-navigation'; 

import FacebookLogin from '../components/FacebookLogin';
var s = require('../components/style/style');

export default class LoginScreen extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	      email: "",
	      password: "",
	    };
	  }
    //registering with email
  	onLoginPress = () => {
      if(this.state.email.length < 1){
        Alert.alert("Please enter your credentials."); 
        return;
      }
    	firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    	.then(() => { 
        this.props.navigation.navigate('AppTabNavigator');
    }, (error) => {
      Alert.alert(error);
    })
  }

  goToRegister = () => {
    this.props.navigation.navigate('AppTabNavigator');
  }

  goToResetPassword = () => {
    this.props.navigation.navigate('ResetPasswordScreen');
  }


  render(){
		return (
      <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
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

              <FacebookLogin />

              <View style={{flexDirection:"row"}}>
                <Text style={s.textNormal}>Don't have an account?</Text>
                <TouchableOpacity onPress={this.goToRegister}>
                  <Text style={s.textDark}> Register</Text>
                </TouchableOpacity>
              </View>

               <View style={{flexDirection:"row"}}>
                <Text style={s.textNormal}>    Need to</Text>
                <TouchableOpacity onPress={this.goToResetPassword}><Text style={s.textDark}> reset your password</Text></TouchableOpacity>
                <Text style={s.textNormal}>?</Text>
              </View>

            </View>
          </View>
      </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
		);
	}
}