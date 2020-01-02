import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreatePoll from './views/CreatePoll';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <CreatePoll/>
    </View>
  );
}
