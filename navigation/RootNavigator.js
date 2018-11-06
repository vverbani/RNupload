import React from 'react';
import { Platform } from 'react-native';
import { CreateStackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';

import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import ResetPassword from '../componentsauth/ResetPassword';

const RootStackNavigator = CreateStackNavigator{
	{
		Login: { screen: Login},
		Register: { screen: Register},
		ResetPassword: { screen: ResetPassword},

		Main: { screen: MainTabNavigator, },
	},
};

export default class RootNavigator extends React.Component {
	render(){
		return <RootNavigator />;
	}
}