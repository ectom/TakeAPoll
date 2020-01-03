import {Alert, Button, TextInput} from 'react-native';
import React from 'react';

export default function NextButton() {
  if (this.state.next) {
    console.log('true')
    return (
    <Button
    style={classes.button}
    title="Next"
    onPress={(title, message) => {
      Alert.alert('Next button pressed', message);
      this.setState({next: true});
    }}
    />
    );
  } else {
    console.log('false')
    return (
    <TextInput style={classes.textInput} />
    );
  }
}
