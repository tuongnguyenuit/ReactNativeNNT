import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class App extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.items}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  items: {
    backgroundColor: 'red',
    width: 200,
    height: 200,
  }
})