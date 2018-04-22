'use strict';

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';



import PreviewScreen from './PreviewScreen';
export default class App extends React.Component {
    render() {
      return (     
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <PreviewScreen/>
        </View>
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
  