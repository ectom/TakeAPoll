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
  
  googleSheetsPOST(){
    const SHEET_ID = '1yEd1zJKWnwbHImi7U08MXjO1R356Ft-evq7TwQDECu4';
    const ACCESS_TOKEN = 'ya29.Il-5B9MKUgD0wvNpFHTSlDZsTrzOgZD__boEU88erDGphS5jjw8D2FlcP7jqgFLJ6gVPQaqOitFvggw1noj5uVmfyHOvyQ_tsPTxRVzY9FMjOdGqi3fRmz1FBFrrzwpLiA';
    
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //update this token with yours.
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        requests: [{
          range: "Sheet1!A2:H2",
          majorDimension: "ROWS",
          values: [
            [
              this.state.poll,
              this.state.answers.answer1,
              this.state.answers.answer2,
              this.state.answers.answer3,
              this.state.answers.answer4,
              this.state.answers.answer5,
              'me',
              10
            ]
          ],
        }]
      })
    })
   }
  
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
      onPress={() => {
        this.googleSheetsPOST()
        this.props.navigation.navigate('Home')
      }}
      />
    </View>
    );
  }
}
