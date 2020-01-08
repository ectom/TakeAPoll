import React, {Component} from 'react';
import {Text, TextInput, View, Button, Alert} from 'react-native';


export default class CreatePoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poll: '',
      inputs: [],
      answers: ['', ''],
      next: false,
      test: ''
    };
    this.handleNextClick = this.handleNextClick.bind(this)
    this.renderInputs = this.renderInputs.bind(this)
    this.answersLength = this.answersLength.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }
  
  classes = {
    text: {
      marginBottom: 5,
    },
    textInput: {
      height: 30,
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
  
  handleTextChange(text) {
    // console.log(text)
  }
  
//   onChangeText={(text) => this.setState({poll: text})}
//   value={this.state.poll}

  handleNextClick() {
    let inputs = this.state.inputs;
    inputs.push(<TextInput  value={this.state.test} onChangeText={(text) => {this.setState({test: text})}} style={this.classes.textInput}/>)
    inputs.push(<TextInput key={1} value={this.state.answers[1]} onChangeText={(text) => {this.handleTextChange(text)}} style={this.classes.textInput}/>)
    this.setState({next: true, inputs: inputs});
  }
  
  subtractOneInput(length) {
    let inputs = this.state.inputs;
    let answers = this.state.answers;
    inputs.pop()
    answers.pop()
    this.setState({inputs: inputs, answers: answers});
  }
  
  addInputButton() {
    if (this.answersLength() < 5){
      return <Button title='+' onPress={() => this.renderOneInput(this.state.answers.length)} />
    } else {
      return <Button title='-' onPress={() => this.subtractOneInput()} />
    }
  }

  renderInputs() {
    return (
    <>
      {this.state.inputs.map((value, index) => {
        return value
      })}
      {this.addInputButton()}
    </>
    );
  }
  
  answersLength(){
    let size = 0;
    for(const inputs in this.state.inputs){
      size++;
    }
    return size;
  }
  
  renderOneInput = (i) => {
    if(this.answersLength() < 5) {
      let inputs = this.state.inputs;
      let answers = this.state.answers;
      answers.push('');
      inputs.push(<TextInput key={i} value={this.state.answers[i]} onChangeText={(e) => {this.handleTextChange(e)}} style={this.classes.textInput}/>);
      this.setState({ inputs, answers});
    }
  }
  
  render() {
    
    const classes = {
      text: {
        marginBottom: 5,
      },
      textInput: {
        height: 150,
        width: 350,
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
        marginBottom: 20,
      },
      button: {
        position: 'right',
        height: 60,
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
      }
    };
    
    let answers = this.state.answers;
    
    const NextButton = <Button style={this.classes.button} title="Next" onPress={() => {this.handleNextClick()}}/>
    let inputs = this.state.inputs;
    return (
    <View>
      <Text style={classes.text}>Start a poll</Text>
      <TextInput
      style={classes.textInput}
      multiline
      numberOfLine={4}
      onChangeText={(text) => this.setState({poll: text})}
      value={this.state.poll}
      />
      {(this.state.next) ? this.renderInputs() : NextButton}
    </View>
    );
  }
}
