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
  async onGoogleLoginPress() {
      try {
        const result = await Expo.Google.logInAsync({
          iosClientId: '274139300084-ec3hqt4vhcb6fu2b8g58elhnudqu6s13.apps.googleusercontent.com',
          scopes: ['profile', 'email'],
        });

        if (result.type === 'success') {
          return result.accessToken;
        } else {
          return {cancelled: true};
        }
      } catch(e) {
        return {error: true};
      }
    }
  }

  render(){
		return (
      <TouchableOpacity style={s.button} onPress={this.onGoogleLoginPress}>
        <Text style={s.buttonTextGoogle}>Sign In With Google</Text>
      </TouchableOpacity>
    );
	}
}


