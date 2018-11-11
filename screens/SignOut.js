import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as firebase from 'firebase';

export default class SignOut extends React.Component {

  onSignoutPress = () => {
    firebase.auth().signOut();  
  } 

  render(){
    return(
      <View>
       <Button title="Signout" onPress={this.onSignoutPress} />
      </View>
    );
  }
}