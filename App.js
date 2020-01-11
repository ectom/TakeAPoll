import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './views/AppNavigator';

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
      <AppNavigator/>
    </View>
  );
}
