import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';


export default class HomePage extends Component{
  styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  render() {
        return (
          <View style={this.styles.container}>
            <Button
              title="Create A Poll"
              onPress={() =>
                this.props.navigation.navigate('CreatePoll')
              }
            />
          </View>
        );
    }
}