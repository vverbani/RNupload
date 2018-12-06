import React, {Component} from 'react';
import { Text, View, StyleSheet, ListView, TouchableHighlight } from 'react-native';
import {Icon} from 'native-base';


export default class ViewTab extends Component{
  constructor(props){
    super(props);
    }

render(){
    return (
      <View style={styles.container}>
        <Text style= {styles.navbarTitle}>View.Tab</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  navbar: {
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row'
  },
  navbarTitle: {
    color: "#444",
    fontSize: 16,
    fontWeight: "500"
  },

  liText: {
    color: '#333',
    fontSize: 16
  }
}); 