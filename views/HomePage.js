import React, {Component} from 'react';
import {View, Button} from 'react-native';


export default class HomePage extends Component{
    render() {
        return (
          <View style={styles.container}>
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