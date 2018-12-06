import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

//fire base + key authentication values
import * as firebase from 'firebase';
import ApiKeys from './constants/ApiKeys';

//Auth Screens
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DashBoardScreen from './screens/DashBoardScreen';
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
       <AppTabNavigator />
    );
  }
}

//Tab navigation for when user is logged in 
const AppTabNavigator = createBottomTabNavigator ({
  UploadTab: {
    screen: UploadTab,
      defaultNavigationOptions:{
        tabBarLabel: 'Upload',
        tabBarIcon: ({tintColor}) => (
          <Icon name= "ios-qr-scanner" color= {tintColor} size={26}/>
        )
      }
  },
  ViewTab: {
    screen: ViewTab,
    defaultNavigationOptions:{
        tabBarLabel: 'View',
        tabBarIcon: ({tintColor}) => (
          <Icon name= "ios-search" color= {tintColor} size={26}/>
        )
      }
  },
  SettingsTab: {
    screen: SettingsTab,
    deaultNavigationOptions:{
        tabBarLabel: 'Settings',
        tabBarIcon: ({tintColor}) => (
          <Icon name= "ios-settings" color= {tintColor} size={26}/>
        )
      }
  }}, 
  {
    initialRouteName: 'ViewTab',
    order: ['UploadTab','ViewTab', 'SettingsTab'],
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
  DashBoardScreen: { 
    screen: DashBoardScreen
  },
  ResetPasswordScreen: { screen: ResetPasswordScreen },
})

//React-Nav 3.0 Create App Container
const App = createAppContainer(AppNavigator);

