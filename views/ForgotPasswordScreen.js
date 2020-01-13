import React, {Component} from 'react';
import {View, Button} from 'react-native';


export default class ForgotPasswordScreen extends Component{
  render() {
    return (
    <View>
      <Button
      title="HomePage"
      onPress={() =>
      this.props.navigation.navigate('Home')
      }
      />
    </View>
    );
  }
}
