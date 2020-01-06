import React, {Component} from 'react';
import {Text, TextInput, View, Button, Alert} from 'react-native';
import NewInputs from '../components/NewInputs';


export default class CreatePoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poll: '',
      answers: [<TextInput key={0} style={this.classes.textInput}/>, <TextInput key={1} style={this.classes.textInput}/>],
      next: false,
    };
    this.handleNextClick = this.handleNextClick.bind(this)
    this.renderInputs = this.renderInputs.bind(this)
    this.answersLength = this.answersLength.bind(this)
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
  
  handleNextClick() {
    this.setState({next: true});
  }
  
  subtractOneInput(length) {
    let answers = this.state.answers;
    answers.pop()
    this.setState({answers});
  }
  
  addInputButton() {
    if (this.answersLength() < 4){
      return <Button title='+' onPress={() => this.renderOneInput(this.state.answers.length)} />
    } else {
      return <Button title='-' onPress={() => this.subtractOneInput()} />
    }
  }

  renderInputs() {
    return (
    <>
      {this.state.answers.map((value, index) => {
        return value
      })}
      {this.addInputButton()}
    </>
    );
  }
  
  answersLength(){
    let size = 0;
    for(const answer in this.state.answers){
      size++;
    }
    return size;
  }
  
  renderOneInput = (key) => {
    if(this.answersLength() < 4) {
      let answers = this.state.answers;
      answers.push(<TextInput key={key} style={this.classes.textInput}/>);
      this.setState({ answers});
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
    let inputs = this.state.answers
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
