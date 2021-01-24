import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Wellcome to Buglândia!!</Text>
        <Text style={styles.p}>A Minecraft Server</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#8257e6',
    fontSize: 24,
    fontWeight: 'bold',
  },
  p: {
    color: '#e1e1e6',
    fontSize: 18,
    // fontWeight: 'bold',
  }
});
