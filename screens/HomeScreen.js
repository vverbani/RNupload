import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Button, KeyboardAvoidingView } from 'react-native';
import {LinearGradient} from 'expo';

var s = require('../components/style/style');

export default class HomeScreen extends Component {
	//login or register
	constructor(props) {
	    super(props);
	    this.goToLogin = this.goToLogin.bind(this);
	    this.goToRegister = this.goToRegister.bind(this);
	}
	goToLogin() {
		this.props.navigation.navigate('LoginScreen');
	}
	goToRegister() {
		this.props.navigation.navigate('RegisterScreen');
	}
	render(){
		return (

			<KeyboardAvoidingView behavior='padding' style={s.container}>

      		<Image source={require('../assets/images/logo.png')} style={s.logo}/>

      		<View style={s.contentBackground}>

				<View style={s.formContainer}>

				<TouchableOpacity onPress={this.goToRegister}>
          			<LinearGradient style={s.button} colors={['#7321bf','#24a486']} start={[0,1]} end={[1,0]}>
            			<Text style={s.buttonText}>Register</Text>
          			</LinearGradient>
        		</TouchableOpacity>

        		<TouchableOpacity onPress={this.goToLogin}>
          			<View style={s.button2}>
            			<Text style={s.buttonText2}>Login</Text>
          			</View>
        		</TouchableOpacity>
				</View>
			</View>

      		</KeyboardAvoidingView>
		);
	}
}