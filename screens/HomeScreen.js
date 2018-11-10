import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class HomeScreen extends Component {
	//login or register
	constructor(props) {
	    super(props);
	    this.goToLogin = this.goToLogin.bind(this);
	    this.goToRegister = this.goToRegister.bind(this);
	}
	goToLogin() {
		this.props.navigation.navigate('LoginScreen');
		console.log('I\'m going to the login screen ');
	}
	goToRegister() {
		this.props.navigation.navigate('RegisterScreen');
		console.log('I\'m going to the Register screen ');
	}
	render(){
		return (
			<View>
				<Text>You are on the homescreen </Text>
				<Button onPress= { this.goToRegister} title= "Register"
				/>
				<Button onPress= { this.goToLogin} title= "Login"
				/>
			</View>
		);
	}
}