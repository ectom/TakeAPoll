import React, {Component} from 'react';
import {Text, TextInput, View, Button, Alert} from 'react-native';

const classes = {
  textInput: {
    height: 30,
    width: 350,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  }
};

const AnswerInput = (ans, handleChange, val) => {
  return(
  <TextInput
    ans={ans}
    onChangeText={(text) => handleChange(text, ans)}
    defaultValue={val}
    style={classes.textInput}
  />
  )
}

export default class CreatePoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poll: '',
      inputs: [],
      answers: {
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
        answer5: '',
      },
      next: false,
    };
    this.handleNextClick = this.handleNextClick.bind(this)
    this.renderInputs = this.renderInputs.bind(this)
    this.answersLength = this.answersLength.bind(this)
    // this.handleTextChange = this.handleTextChange.bind(this)
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
  
  handleTextChange = e => {
    // this.setState({answers: text})
    console.log(e)
  }
  handleTextChangeNew = (text, ans) => {
    // this.setState({answers: text})
    console.log(text, ans)
  }

  handleNextClick() {
    let inputs = this.state.inputs;
    inputs.push(AnswerInput('answer1', this.handleTextChangeNew, this.state.answers['answer1']))
    // inputs.push(<TextInput key={1} onChangeText={(text) => this.handleTextChange(text)} defaultValue={this.state.answers['answer1']} style={this.classes.textInput}/>)
    inputs.push(<TextInput key={2} onChangeText={(text) => this.handleTextChange(text)} defaultValue={this.state.answers['answer2']} style={this.classes.textInput}/>)
    this.setState({next: true, inputs: inputs});
  }
  
  renderOneInput = (i) => {
    if(this.answersLength() < 5) {
      let inputs = this.state.inputs;
      let answers = this.state.answers;
      const num = 'answer' + inputs.length + 1;
      inputs.push(<TextInput onChangeText={(text, e) => this.handleTextChange(e)} defaultValue={this.state.answers[num]} style={this.classes.textInput}/>);
      this.setState({ inputs, answers});
    }
  }
  
  addInputButton() {
    if (this.state.inputs.length === 2) {
      return <Button title='+' onPress={() => this.renderOneInput(this.state.answers.length)} />
    } else if (this.state.inputs.length >= 5) {
      return <Button title='-' onPress={() => this.subtractOneInput()} />
    } else if (this.state.inputs.length < 5 && this.state.inputs.length > 2){
      return (
        <>
          <Button title='+' onPress={() => this.renderOneInput(this.state.answers.length)} />
          <Button title='-' onPress={() => this.subtractOneInput()} />
        </>
      )
    }
  }
  
  subtractOneInput(length) {
    let inputs = this.state.inputs;
    let answers = this.state.answers;
    const num = 'answer' + inputs.length;
    inputs.pop()
    answers[num] = '' // Clear answer
    this.setState({inputs: inputs, answers: answers});
  }
  
  renderInputs() {
    return (
    <>
      {this.state.inputs.map((element, index) => {
        console.log(element)
        return element
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
