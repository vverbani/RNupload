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

//Social Media Screens
import FacebookLogin from './components/FacebookLogin';

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
        <MainNavigator/>
      </SafeAreaView>
    );
  }
}
 
//Navigation for authenticating user + dashboard
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
  AppTabNavigator :
  {
    screen: createMaterialTopTabNavigator({
      Upload: {
      screen: UploadTab,
        defaultNavigationOptions:{
          tabBarLabel: 'Upload',
          tabBarIcon: ({tintColor}) => (
            <View>
              <Icon name= "ios-add-circle-outline" color= {tintColor} size={24}/>
            </View>
          )
        }
      },
      View: {
        screen: ViewTab,
        defaultNavigationOptions:{
            tabBarLabel: 'View',
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
            tabBarLabel: 'Settings',
            tabBarIcon: ({tintColor}) => (
              <Icon name= "ios-reorder" color= {tintColor} size={24}/>
            )
          }
      }}, 
  {
    lazyLoad: true,
    animationEnabled: false,
    initialRouteName: 'View',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      activeTintColor: 'black', 
      inactiveTintColor: '#d1cece',
      iconStyle: {
        color: 'black'
      },
      showLabel: true,
      style: {
        backgroundColor: '#f2f2f2'
      },
      indicatorStyle: {
        height: 0
      }, 
      labelStyle:{
        fontSize: 8,
      }
    }
    })
  }
});

//React-Nav 3.0 Create App Container
const MainNavigator = createAppContainer(AppNavigator);

