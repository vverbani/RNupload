import React, {Component} from 'react';
import { Image, Text, View, StyleSheet, ListView, TouchableHighlight, Button, Alert } from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import * as firebase from 'firebase';


export default class UploadTab extends Component{
  constructor(props){
    super(props);
    }

//select picture from gallery
selectPicture= async () => {
  await Permissions.askAsync(Permissions.CAMERA_ROLL);
  const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
    aspect: 1,
    allowsEditing: true,
  });
    console.log(uri);

    this.setState({ image: uri });
    if(!cancelled){
      this.uploadImage(uri, "test-image")
      .then(() => {
        console.log("image was uploaded successfully.");
      })
      .catch((error) => {
        Alert.alert(error);
      })
    }else{
      console.log("Was cancelled");
    }
};

//upload picture with camera
takePicture = async () => {
  await Permissions.askAsync(Permissions.CAMERA);
  const { cancelled, uri }= await ImagePicker.launchCameraAsync({
    allowsEditing: true,
  });
  
}

//store to storage
uploadImage= async (uri, imageName) => {
  try {
    const response= await fetch(uri); 
    const blob= await response.blob();
    //store as images/user/year/month/Date[random 4 letter string]imagename
    //2018-12-181as2valsImage    ((example))
    var ref= firebase.storage().ref().child("images/" + imageName); 
    return ref.put(blob);
  }catch(error){
    Alert.alert("Your receipt couldn't be uploaded at this time. We apologize for the inconvenience.")
  }
}

render(){
    return (
      <View style={styles.container}>
        <Text style= {styles.navbarTitle}>Upload</Text>
        <Button title="Choose image..." onPress= {this.selectPicture} />
        <Button title="Capture image..." onPress= {this.takePicture} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  navbarTitle: {
    color: "#444",
    fontSize: 16,
    fontWeight: "500"
  },
}); 