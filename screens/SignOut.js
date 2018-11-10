import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as firebase from 'firebase';

export default class SignOut extends React.Component {

  onSignoutPress = () => {
    this
    firebase.auth().signOut();  
  } 

  render(){
    return(
      <View style={styles.formContainer}>
       <Button title="Signout" onPress={this.onSignoutPress} />
      </View>
    );
  }
}