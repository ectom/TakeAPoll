import React, {Component} from 'react';
import {Text, TextInput, View, Button, Alert} from 'react-native';


export default class CreatePoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poll: '',
      answers: ['ans-0'],
      next: false,
      count: 1,
    };
    this.handleNextClick = this.handleNextClick.bind(this)
    this.renderTwoInputs = this.renderTwoInputs.bind(this)
  }
  
  classes = {
    text: {
      marginBottom: 5,
    },
    textInput: {
      height: 20,
      width: 350,
      borderWidth: 1,
      borderRadius: 5,
      padding: 5,
      marginBottom: 10,
    },
    button: {
      position: 'right',
      height: 40,
      borderWidth: 2,
      borderRadius: 10,
      padding: 5,
    }
  };
  
  anotherAnswer() {
    return (
    <>
      <TextInput style={this.classes.textInput}/>
      <Button
      style={this.classes.button}
      title={'add answer'}
      />
    </>
    );
  }
  
  handleNextClick() {
    this.setState({
      next: true,
      count: this.state.count + 1
    });
  }
  
  renderTwoInputs() {
    return (
    <>
      <TextInput style={this.classes.textInput}/>
      <TextInput style={this.classes.textInput}/>
      <Button
      style={this.classes.button}
      onPress={() => {
        this.setState({count: this.state.count + 1}, () => {
          this.anotherAnswer()
        });
      }}
      title={'add answer'}
      />
    </>
    );
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
        borderRadius: 5,
        padding: 5,
        marginBottom: 20,
      },
      button: {
        position: 'right',
        height: 40,
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
      }
    };
    
    const NextButton = <Button
        style={this.classes.button}
        title="Next"
        onPress={() => {
          this.handleNextClick()
        }}
      />
    
    return (
    <View>
      <Text style={classes.text}>Start a poll</Text>
      <TextInput
      style={classes.textInput}
      multiline
      numberOfLine={4}
      onChangeText={(poll) => this.setState({poll: poll})}
      value={this.state.poll}
      />
      {(this.state.next) ? this.renderTwoInputs() : NextButton}
    </View>
    );
  }
}
