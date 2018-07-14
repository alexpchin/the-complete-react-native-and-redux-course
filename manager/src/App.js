import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCtaD9mg9Gj9oj2L6s3LlxCsaQIwBrGezg',
      authDomain: 'manager-ad9b8.firebaseapp.com',
      databaseURL: 'https://manager-ad9b8.firebaseio.com',
      projectId: 'manager-ad9b8',
      storageBucket: 'manager-ad9b8.appspot.com',
      messagingSenderId: '848947302266'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm/>
        </View>
      </Provider>
    );
  }
}

export default App;