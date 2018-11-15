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

    onGoogleLoginPress = async () => {
      try {
        const result = await Expo.Google.logInAsync({
          androidClientId: "439794516481-fndrknicmhgr6pqthaq70eidpnrkh8h6.apps.googleusercontent.com",
          scopes: ['profile', 'email']
        })

        if (result.type === 'success') {
          console.log(result)
          firebase.auth().getRedirectResult().then(function(result) {
          if (result.credential) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
          }
          var user = result.user;
        }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(errorCode);
      // ...
    });
        } else {
          console.log("cancelled")
        }
      } catch(e) {
        console.log("error",e)
      }
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

          <TouchableOpacity style={s.button} onPress={this.onGoogleLoginPress}>
            <Text style={s.buttonTextGoogle}>Sign In With Google</Text>
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