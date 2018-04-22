import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import PreviewScreen from './src/components/PreviewScreen';
import DetailScreen from './src/components/DetailScreen';
export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
      <PreviewScreen/>
      </View>
    );
  }
}


/*
const App = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
*/



