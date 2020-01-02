import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Button, Alert} from 'react-native';

export default class CreatePoll extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  
  render() {
    
    const classes = {
      text: {
        marginBottom: 5,
      },
      textInput: {
        height: 80,
        width: 350,
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
      },
      button: {
        position: 'right',
        height: 40,
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
      }
    };
    
    return (
    <View>
      <Text style={classes.text}>Start a poll</Text>
      <TextInput
      style={classes.textInput}
      multiline
      numberOfLine={4}
      onChangeText={(text) => this.setState({text})}
      value={this.state.text}
      />
      <Button
      style={classes.button}
      title="Next"
      onPress={(title, message) => Alert.alert('Right button pressed', message)}
      />
    </View>
    );
  }
}
