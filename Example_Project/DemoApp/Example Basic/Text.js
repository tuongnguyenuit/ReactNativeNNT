import React, {Component} from 'react';
import {
  Text,
  View, 
  StyleSheet
} from 'react-native';

export default class App extends Component {
  ClickMe(){
    alert("This is Alert in React Native - OnPress")
  }

  ClickMeLong(){
    alert("This is Alert in React Native - OnLongPress")
  }

  render(){
    return(
      <View>
        <Text style={styles.text}>Text in React Native</Text>
        <Text 
          onPress={this.ClickMe}
          style={styles.text}
        >
          Touch Handing - OnPress
        </Text>

        <Text 
          onLongPress={this.ClickMe}
          style={styles.text}
        >
          Touch Handing - OnLongPress
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "red",
    backgroundColor: "yellow",
  }
})