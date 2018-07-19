import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import firebase from 'firebase';
// ReduxThunk is a middleware
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

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
    // Last argument is a store enhancer
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
