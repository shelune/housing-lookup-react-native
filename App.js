import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import reducers from './src/reducers';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';

import Router from './src/Router';

import Header from './src/components/Header';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
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
