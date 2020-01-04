import React, {Component} from "react";
import {Text, View, TextInput} from 'react-native';


const NewInputs = (props) => {

    return (
    props.inputs.map((val, idx)=> {
      let ansId = `ans-${idx}`;
      return (
      <View key={`${idx}`}>
        <Text htmlFor={ansId}>{`Answer #${idx + 1}`}</Text>
        <TextInput
        name={ansId}
        data-id={idx}
        id={ansId}
        value={props.inputs[idx].answer}
        className={'answer'}
        />
      </View>
      )
    })
    )
  
  
}
export default NewInputs;