import React from 'react';
import { TouchableWithoutFeedback,Keyboard,View, Image, Alert, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import * as firebase from 'firebase';
import {LinearGradient} from 'expo';

import FacebookLogin from '../components/FacebookLogin';

var s = require('../components/style/style');

export default class RegisterScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoadingComplete: false,
      email: "",
      password: "",
      passwordConfirm: "",
    };
  }

  onSignupPress = () => {
    if(this.state.password.length < 9){
      Alert.alert("Password needs to be atleast 8 characters long"); 
      return;
    }
    if(this.state.password !== this.state.passwordConfirm){
      Alert.alert("Passwords do not match");
      return;
    } 
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => { 
      this.props.navigation.navigate('DashBoardScreen'); 
      }, (error) => {
      Alert.alert(error.message);
    });
  }

  goToLogin = () => {
    this.props.navigation.navigate('LoginScreen');
  }

  render(){
    return(

    <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
      <KeyboardAvoidingView behavior='padding' style={s.container}>

      <LinearGradient colors={['#7321bf','#24a486']} start={[0,1]} end={[1,0]} style={s.topGradient}>
        <Image source={require('../assets/images/logo.png')} style={s.logo}/>
      </LinearGradient>

      <View style={s.contentBackground}>

          <View style={s.formContainer}>

          <View>
            <Image source={require('../assets/images/iconEmail.jpg')} resizeMode='contain' style={s.icon}/>
            <TextInput placeholder='Email' placeholderTextColor={'#98d4cd'} style={s.textInput} underlineColorAndroid={'transparent'}
            value= {this.state.email}
            onChangeText= {(text) => { this.setState({email: text}) }}
            />
          </View>

          <View>
            <Image source={require('../assets/images/iconLock.jpg')} resizeMode='contain' style={s.icon}/>
            <TextInput placeholder='Password' secureTextEntry={true} placeholderTextColor={'#98d4cd'} style={s.textInput} underlineColorAndroid={'transparent'}
            value= {this.state.password}
            onChangeText= {(text) => { this.setState({password: text}) }}
            />
          </View>

          <View>
            <Image source={require('../assets/images/iconLock.jpg')} resizeMode='contain' style={s.icon}/>
            <TextInput placeholder='Confirm Password' secureTextEntry={true} placeholderTextColor={'#98d4cd'} style={s.textInput} underlineColorAndroid={'transparent'}
            onSubmitEditing={Keyboard.dismiss}
            value= {this.state.passwordConfirm}
            onChangeText= {(text) => { this.setState({passwordConfirm: text}) }}
            />
          </View>

          <TouchableOpacity onPress={this.onSignupPress}>
            <LinearGradient style={s.button} colors={['#7321bf','#24a486']} start={[0,1]} end={[1,0]}>
              <Text style={s.buttonText}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>

          <FacebookLogin />

          <View style={{flexDirection:"row"}}>
            <Text style={s.textNormal}>Already have an account?</Text>
            <TouchableOpacity onPress={this.goToLogin}><Text style={s.textDark}> Log in</Text></TouchableOpacity>
          </View>

        </View>
      
      </View>

      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    )
  }
}
