'use strict';

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';



import HomeScreen from './src/components/HomeScreen';
import PreviewScreen from './src/components/PreviewScreen';
import DetailScreen from './src/components/DetailScreen';
import store from './src/store'; //Import the store

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



