import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as firebase from 'firebase';

export default class Form extends React.Component {

  onSignoutPress = () => {
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