import React, { Component } from 'react';
import { Alert, Text, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import * as Expo from 'expo';

var s = require('../components/style/style');

export default class FacebookLogin extends Component {
	constructor(props){
	    super(props);
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
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        //create+store database
        //*******add navigation**********************
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

  render(){
		return (
      <TouchableOpacity style={s.buttonFacebook} onPress={this.onFacebookLoginPress}>
        <Text style={s.buttonTextFacebook}>Sign In With Facebook</Text>
      </TouchableOpacity>
    );
	}
}