import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class DemoWidthHeight extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: 'green'}}></View>
        <View style={{flex: 2, backgroundColor: 'yellow'}}></View>
        <View style={{flex: 1, backgroundColor: 'blue'}}></View>        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 20,
    backgroundColor: 'yellow',
  },
  container: {
    backgroundColor: 'black',
    flex: 2
    // width: 300,
    // height: 200,
  }
})