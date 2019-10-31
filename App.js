import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { SafeAreaView, StyleSheet } from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import firebaseConfig from './firebaseConfig.json';
import LoginForm from './src/components/LoginForm';

class App extends Component {

  componentDidMount() {
    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
  }

 render() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <SafeAreaView>
        <LoginForm />
      </SafeAreaView>
    </Provider>
  )
 }
}

const styles = StyleSheet.create({});

export default App;