import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';


export default class SignInScreen extends Component{
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
