import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class DemoApp extends Component {
  render(){
    return(
      <View style={styles.nen}>
        <Text style={{color: 'red'}}>Hello</Text>
        <Text style={styles.chu}>Xin chao</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chu: {
    color:'yellow',
    fontSize: 18
  },
  nen: {
    backgroundColor: 'green'
  }
});