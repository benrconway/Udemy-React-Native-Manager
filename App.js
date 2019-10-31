import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import reducers from './src/reducers';
import firebaseConfig from './firebaseConfig.json';
import LoginForm from './src/components/LoginForm';

class App extends Component {

  componentDidMount() {
    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
  }

 render() {
  return (
    <Provider store={createStore(reducers)}>
      <SafeAreaView>
        <LoginForm />
      </SafeAreaView>
    </Provider>
  )
 }
}

const styles = StyleSheet.create({});

export default App;