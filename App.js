import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from './views/HomePage';
import CreatePoll from './views/CreatePoll';
import SignInScreen from './views/SignInScreen';
import ForgotPasswordScreen from './views/ForgotPasswordScreen';



const AuthenticationNavigator = createStackNavigator({
  SignIn: SignInScreen,
  ForgotPassword: ForgotPasswordScreen,
});

const AppNavigator = createSwitchNavigator({
  Auth: AuthenticationNavigator,
  Home: HomePage,
  CreatePoll: CreatePoll,
});

const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component {
  
  // styles = StyleSheet.create({
  //   container: {
  //     // flex: 1,
  //     paddingTop: 60,
  //     backgroundColor: '#fff',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  // });
  
  render() {
    return (
    <AppContainer/>
  )}
}

