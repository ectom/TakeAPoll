import React, {Component} from 'react';
import {Text, TextInput, View, Button} from 'react-native';


const AnswerInput = (ans, handleChange, val, classes, key) => {
  return(
  <TextInput
    key={key}
    ans={ans}
    onChangeText={(text) => handleChange(text, ans)}
    defaultValue={val}
    style={classes}
  />
  )
};

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
    this.handleAddAnswersClick = this.handleAddAnswersClick.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
  }
  
  classes = {
    container: {
      // flex: 1,
      paddingTop: 60,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
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
  
  handleTextChange = (text, ans) => {
    let answers = this.state.answers;
    answers[ans] = text;
    this.setState({answers});
  };

  handleAddAnswersClick() {
    let inputs = this.state.inputs;
    inputs.push(AnswerInput('answer1', this.handleTextChange, this.state.answers['answer1'], this.classes.textInput, 'answer1'));
    inputs.push(AnswerInput('answer2', this.handleTextChange, this.state.answers['answer2'], this.classes.textInput, 'answer2'));
    this.setState({next: true, inputs: inputs});
  }
  
  renderOneInput() {
    if(this.state.inputs.length < 5) {
      let inputs = this.state.inputs;
      let answers = this.state.answers;
      const num = 'answer' + (inputs.length + 1);
      inputs.push(AnswerInput(num, this.handleTextChange, this.state.answers[num], this.classes.textInput, num))
      this.setState({inputs, answers});
    }
  }
  
  addInputButton() {
    if (this.state.inputs.length === 2) {
      return <Button title='+' onPress={() => this.renderOneInput()} />
    } else if (this.state.inputs.length >= 5) {
      return <Button title='-' onPress={() => this.subtractOneInput()} />
    } else if (this.state.inputs.length < 5 && this.state.inputs.length > 2){
      return (
        <>
          <Button title='+' onPress={() => this.renderOneInput()} />
          <Button title='-' onPress={() => this.subtractOneInput()} />
        </>
      )
    }
  }
  
  subtractOneInput() {
    let inputs = this.state.inputs;
    let answers = this.state.answers;
    const num = 'answer' + inputs.length;
    inputs.pop();
    answers[num] = '';
    this.setState({inputs: inputs, answers: answers});
  }
  
  isNullOrWhiteSpace(str) {
    return (!str || str.length === 0 || /^\s*$/.test(str))
  }
  
  renderInputs() {
    return (
    <>
      {this.state.inputs.map((element, index) => {
        return element;
      })}
      {this.addInputButton()}
    </>
    );
  }
  
  renderNextButton() {
    let isPoll = false;
    let isAnswers = true;
    if(!this.isNullOrWhiteSpace(this.state.poll)) {
      isPoll = true;
    }
    for(let i = 1; i <= this.state.inputs.length; i++) {
      if(this.isNullOrWhiteSpace(this.state.answers['answer'+i])) {
        isAnswers = false;
      }
    }
    if(isPoll && isAnswers && this.state.next) {
      return (
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('CreatePollSettings', {poll: this.state.poll, answers: this.state.answers})}
        />
      )
    }
  }
  
  render() {
    
    const classes = {
      container: {
        // flex: 1,
        paddingTop: 60,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
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
    
    const NextButton = <Button style={this.classes.button} title="Add Answers" onPress={() => {this.handleAddAnswersClick()}}/>;
    
    return (
    <View style={this.classes.container}>
      <Text style={classes.text}>Start a poll</Text>
      <TextInput
      style={classes.textInput}
      multiline
      numberOfLine={4}
      onChangeText={(text) => this.setState({poll: text})}
      value={this.state.poll}
      />
      {(this.state.next) ? this.renderInputs() : NextButton}
      <Button
        title="Cancel"
        onPress={() => this.props.navigation.navigate('Home')}
      />
      {this.renderNextButton()}
    </View>
    );
  }
}
