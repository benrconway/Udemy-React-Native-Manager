import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import reducers from './src/reducers';

class App extends Component {
 render() {
  return (
    <Provider store={createStore(reducers)}>
      <SafeAreaView>
        <Text>Manager App</Text>
      </SafeAreaView>
    </Provider>
  )
 }
}

const styles = StyleSheet.create({});

export default App;