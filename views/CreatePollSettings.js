import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';


export default class CreatePollSettings extends Component{
  constructor(props) {
    super(props);
    this.state = {
      poll: this.props.navigation.state.params.poll,
      answers: this.props.navigation.state.params.answers,
    };
  }
  
  classes = {
    container: {
      // flex: 1,
      paddingTop: 60,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
  
  render() {
    return (
    <View style={this.classes.container}>
      <Text style={{fontSize: 25}}>{this.state.poll}</Text>
      <Text style={{fontSize: 18}}>{this.state.answers.answer1}</Text>
      <Text style={{fontSize: 18}}>{this.state.answers.answer2}</Text>
      <Text style={{fontSize: 18}}>{this.state.answers.answer3}</Text>
      <Text style={{fontSize: 18}}>{this.state.answers.answer4}</Text>
      <Text style={{fontSize: 18}}>{this.state.answers.answer5}</Text>
      
      <Button
      title="Back"
      onPress={() => this.props.navigation.navigate('CreatePoll')}
      />
      <Button
      title="Submit"
      onPress={() => this.props.navigation.navigate('Home')}
      />
    </View>
    );
  }
}
