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
          updateCellsRequest: {
            rows: [
              {
                values: [
                  {userEnteredValue: {stringValue: this.state.poll}},
                  {userEnteredValue: {stringValue: this.state.answers.answer1}},
                  {userEnteredValue: {stringValue: this.state.answers.answer2}},
                  {userEnteredValue: {stringValue: this.state.answers.answer3}},
                  {userEnteredValue: {stringValue: this.state.answers.answer4}},
                  {userEnteredValue: {stringValue: this.state.answers.answer5}},
                  {userEnteredValue: {stringValue: 'ethan'}},
                  {userEnteredValue: {numberValue: 123}},
                  {userEnteredValue: {stringValue: '12/23/19 12:45:07'}}
                ]
              }
            ],
            fields: '*',
            start: {
              rowIndex: 0,
              columnIndex: 2
            },
            range: {
              startRowIndex: 1,
              endRowIndex: 2,
              startColumnIndex: 0,
              endColumnIndex: 7
            }
          }
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
