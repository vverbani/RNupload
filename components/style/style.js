'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
//Containers
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  formContainer:{
    alignSelf: 'stretch',
    paddingLeft: 35,
    paddingRight: 35,
  },
  contentBackground:{
    position: 'absolute',
    bottom: 0,
    left: 30,
    right: 30,
    height:450,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop:8,
  },
//Header
  topGradient: {
    height:300,
    alignSelf:'stretch',
    alignItems:'center',
  },
  logo:{
    marginTop:10,
  },
//Global
  textInput:{
    fontSize:18,
    marginTop:8,
    alignSelf: 'stretch',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#39a498',
    textAlign: 'center',
    color: '#065350',
  },
  button:{
    marginTop:25,
    alignSelf: 'stretch',
    padding: 13,
    backgroundColor: '#fa6457',
    borderWidth: 1,
    borderColor: '#39a498',
    alignItems: 'center',
    borderRadius:40,
    height:64,
  },
   button2:{
    marginTop:25,
    alignSelf: 'stretch',
    padding: 13,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#39a498',
    alignItems: 'center',
    borderRadius:40,
    height:64,
  },
   buttonFacebook:{
    marginTop:25,
    alignSelf: 'stretch',
    padding: 13,
    backgroundColor: '#3362aa',
    borderWidth: 1,
    borderColor: '#39a498',
    alignItems: 'center',
    borderRadius:40,
    height:64,
  },
  buttonText:{
    color:'#fff',
    fontSize:24,
  },
  buttonText2:{
    color:'#39a498',
    fontSize:24,
  },
  buttonTextFacebook:{
    color:'#FFF',
    fontSize:22,
  },
  icon:{
    position:'absolute',
    height:30,
    width:28,
    bottom:14,
    left:5,
  },
  textNormal:{
    marginTop:20,
    color: '#33a195',
    fontSize:18,
  },
  textDark:{
    marginTop:20,
    color: '#196a61',
    fontSize:18,
    fontWeight:'bold',
  },

});