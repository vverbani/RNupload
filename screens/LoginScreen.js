import React, { Component } from 'react';
import {View, Image, Alert, Text, Button, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import * as firebase from 'firebase';
import { LinearGradient} from 'expo';
import * as Expo from 'expo';

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
    	firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    	.then(() => { 
      //login successful
      this.props.navigation.navigate('DashBoardScreen');
    }, (error) => {
      //unsucessful
    })
  }

  //register with facebook
  async onFacebookLoginPress() {
    try {
      const {
        type,
        token
      } = await Expo.Facebook.logInWithReadPermissionsAsync('1971483569598050', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        //retrieve fb information
        const credential = firebase.auth.FacebookAuthProvider.credential(token)
        //create+store database
        //add navigation
        firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
        Alert.alert(error);
        })
      } else {
      }
    } catch ({ message }) {
      //error only for developer mode
      alert(`Facebook Login Error: ${message}`);
    }
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

          <TouchableOpacity style={s.button} onPress={this.onFacebookLoginPress}>
            <Text style={s.buttonTextGoogle}>Sign In With Facebook</Text>
          </TouchableOpacity>

          <View style={{flexDirection:"row"}}>
            <Text style={s.textNormal}>Don't have an account?</Text>
            <TouchableOpacity onPress={this.goToRegister}>
              <Text style={s.textDark}> Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  </KeyboardAvoidingView>
		);
	}
}