/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StatusBar} from 'react-native';
import { SlideMenu } from './Router';


StatusBar.setHidden(true);

export default class App extends Component {
  render() {
    return (
      <SlideMenu />
    );
  }
}

//Dùng trang Shop để chứa 4 trang nhỏ, dễ custom top hơn
//Dự kiến bỏ trang Main đi, bỏ luôn trang Menu

//Còn thiếu phần thiết kế giao diện menu, chưa custom được
