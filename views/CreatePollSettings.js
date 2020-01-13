import React, {Component} from 'react';
import {View, Button} from 'react-native';


export default class CreatePollSettings extends Component{
  classes = {
    container: {
      // flex: 1,
      paddingTop: 60,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
  render() {
    return (
    <View style={this.classes.container}>
      <Button
      title="Back"
      onPress={() => this.props.navigation.navigate('CreatePoll')}
      />
    </View>
    );
  }
}
