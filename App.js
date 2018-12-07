import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

//fire base + key authentication values
import * as Expo from 'expo';
import * as firebase from 'firebase';
import ApiKeys from './constants/ApiKeys';

//Auth Screens
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import RegisterScreen from './screens/RegisterScreen';

//Dashboard Screens
import UploadTab from './components/tabNavigator/UploadTab';
import SettingsTab from './components/tabNavigator/SettingsTab';
import ViewTab from './components/tabNavigator/ViewTab';

export default class App extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady: false,
      isAuthenticated: false,
    };

    // Initialize firebase...
    if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = (user) => {
    this.setState({isAuthenticationReady: true});
    this.setState({isAuthenticated: !!user});
  }

  render() {
    return (
      <SafeAreaView style = {{ flex: 1, backgroundColor: '#f2f2f2'}}>
       <MainNavigator />
      </SafeAreaView>
    );
  }
}

//Tab navigation for when user is logged in 
const AppTabNavigator = createMaterialTopTabNavigator({
  Upload: {
    screen: UploadTab,
      defaultNavigationOptions:{
        title: 'Upload',
        tabBarIcon: ({tintColor}) => (
          <Icon name= "ios-add-circle-outline" size={24}/>
        )
      }
  },
  View: {
    screen: ViewTab,
    defaultNavigationOptions:{
        title: 'View',
        tabBarIcon: ({tintColor}) => (
          <Icon 
          name= "ios-search" 
          color= {tintColor}
          size={24}/>
        )
      }
  },
  Settings: {
    screen: SettingsTab,
    deaultNavigationOptions:{
        title: 'Settings',
        tabBarIcon: ({tintColor}) => (
          <Icon name= "ios-reorder" color= {tintColor} size={24}/>
        )
      }
  }}, 
  {
    initialRouteName: 'View',
    order: ['Upload','View', 'Settings'],
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      iconStyle:{
        size: 24,
        color: 'black',
        width: 100,
      },
      showLabel: true,
      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
      style: {
        backgroundColor: '#f2f2f2'
      },
      indicatorStyle: {
        height: 0
      },  
      activeTintColor: 'black',
      labelStyle:{
        fontSize: 14,
      }
    }
});

//Navigation for authenticating user
const AppNavigator =  createStackNavigator ({
  HomeScreen: { 
    screen: HomeScreen, 
      navigationOptions: { 
        header: null 
      } 
    },
  LoginScreen: { 
    screen: LoginScreen, 
      navigationOptions: { 
        header: null 
      } 
    },
  RegisterScreen: { 
    screen: RegisterScreen, 
    navigationOptions: { 
      header: null 
    }
  },
  ResetPasswordScreen: { 
    screen: ResetPasswordScreen,
    navigationOptions: { 
      header: null 
    }
  },
})

//React-Nav 3.0 Create App Container
const MainNavigator = createAppContainer(AppNavigator);

