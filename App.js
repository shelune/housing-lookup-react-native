import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import reducers from './src/reducers';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'remote-redux-devtools';
import ReduxThunk from 'redux-thunk';

import Router from './src/Router';

import Header from './src/components/Header';

const composeEnhancers = composeWithDevTools({ 
  realtime: true, 
  port: 5678, 
  name: Platform.OS, 
  hostname: 'localhost' 
});
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(ReduxThunk)));
// console.log(store.getState());

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.viewContainer}>
        <Provider store={store}>
          <Router />
        </Provider>
      </View>
    );
  }
}

const styles = {
  viewContainer: {
    flex: 1
  }
}
