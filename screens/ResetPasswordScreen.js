import React, { Component } from 'react';
import { View, StyleSheet, Image, Alert, Text, Button, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as firebase from 'firebase';
import { LinearGradient} from 'expo';
import * as Expo from 'expo';

var s = require('../components/style/style');

export default class ResetPasswordScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
    };
  }

  onResetPasswordPress = () => {
    firebase.auth().sendPasswordResetEmail(this.state.email)
      .then( () => {
          this.props.navigation.navigate('HomeScreen');
          console.log('Im on the reset password Screen');
      }, (error) => {
        Alert.alert(error.message);
      }); 
  }

  goToLogin = () => {
    this.props.navigation.navigate('LoginScreen');
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

          <TouchableOpacity onPress={this.onResetPasswordPress}>
            <LinearGradient style={s.button} colors={['#7321bf','#24a486']} start={[0,1]} end={[1,0]}>
              <Text style={s.buttonText}>Reset Password</Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={{flexDirection:"row"}}>
            <Text style={s.textNormal}>Already have an account?</Text>
            <TouchableOpacity onPress={this.goToLogin}><Text style={s.textDark}> Log in</Text></TouchableOpacity>
          </View>

          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    );
  }
}