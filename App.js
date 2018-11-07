import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';

import ApiKeys from './constants/ApiKeys';
import * as firebase from 'firebase';

export default class App extends React.Component {
  //authentication for login / register
  constructor(props){
    super(props);
      this.state = {
        isAuthenticationReady: false,
        isAuthenticated: true,
      };
      //initialize firebase/ check connection
      if(!firebase.apps.length){
        firebase.initializeApp(ApiKeys.FirebaseConfig);
      }
      firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
    }
    onAuthStateChanged = (user) => {
      this.setState({isAuthenticationReady: true});
      this.setState({isAuthenticated: !!user});
    }
  render(){
    return(
      <View>
        {/*<Text style={styles.header}>Sign up</Text>*/}
        <AppStackNavigator />
        </View>
      
    );
  }
}
const AppStackNavigator = createStackNavigator({
    Login: { screen: LoginScreen}
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    color:'#294294',
    fontWeight: 'bold',
  }
});
