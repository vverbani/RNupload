import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import * as firebase from 'firebase';

export default class DashboardScreen extends React.Component {
  constructor(props) {
      super(props);
  }
  onSignoutPress = () => {
    this.props.navigation.navigate('HomeScreen');
    firebase.auth().signOut();  
  } 
  render(){
    return(
     <View>
     <Text>You are on the Dashboard Screen</Text>
        <Button onPress= { this.onSignoutPress} title= "Signout"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer:{
    alignSelf: 'stretch',
    paddingLeft: 20,
    paddingRight: 20,
  },
  textInput:{
    fontSize:20,
    marginTop:30,
    alignSelf: 'stretch',
    padding: 16,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#294294',
  }
});