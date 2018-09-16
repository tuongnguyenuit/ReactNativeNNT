// import React, { Component } from 'react';
// import { Text, View, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';

// import icBack from '../../media/appIcon/back_white.png';
// import icLogo from '../../media/appIcon/ic_logo.png';

// import Shop from '../Main/Shop/Shop';

// export default class Authentication extends Component {

//   //khởi tạo constructor xét trạng thái
//   constructor(props) {
//     super(props);
//     this.state = { isSignIn: false };
//   }

//   //hàm xét trạng thái khi Sign In
//   signIn() {
//     this.state = { isSignIn: true };
//   }


//   //hàm xét trạng thái khi Sign Up
//   signUp() {
//     this.state = { isSignIn: false };
//   }


//   render() {
//     const {
//       row1, iconStyle, titleStyle, container,
//       controlStyle, signInStyle, signUpStyle,
//       inactiveStyle, activeStyle, inputStyle,
//       bigButton, buttonText
//     } = styles;


//     //giao diện hiển thị với trạng thái thứ nhất
//     const signInJSX = (
//       <View>
//         <TextInput style={inputStyle} placeholder="Enter your email" underlineColorAndroid='rgba(0,0,0,0)' />
//         <TextInput style={inputStyle} placeholder="Enter your password" underlineColorAndroid='rgba(0,0,0,0)' />
//         <TouchableOpacity style={bigButton}>
//           <Text style={buttonText}>SIGN IN NOW</Text>
//         </TouchableOpacity>
//       </View>
//     );


//     //giao diện hiển thị với trạng thái thứ hai  
//     const signUpJSX = (
//       <View>
//         <TextInput style={inputStyle} placeholder="Enter your email" underlineColorAndroid='rgba(0,0,0,0)' />
//         <TextInput style={inputStyle} placeholder="Re-enter your password" underlineColorAndroid='rgba(0,0,0,0)' />
//         <TextInput style={inputStyle} placeholder="Enter your password" underlineColorAndroid='rgba(0,0,0,0)' />
//         <TextInput style={inputStyle} placeholder="RE-enter your password" underlineColorAndroid='rgba(0,0,0,0)' />
//         <TouchableOpacity style={bigButton}>
//           <Text style={buttonText}>SIGN UP NOW</Text>
//         </TouchableOpacity>
//       </View>
//     );


//     //hàm xét trạng trái (dạng như if)
//     const mainJSX = this.state.isSignIn ? signInJSX : signUpJSX;

//     return (
//       <View style={container}>

//         <View style={row1}>
//           <TouchableOpacity
//             onPress={() => { this.props.navigation.goBack()}}
//           >
//             <Image source={icBack} style={iconStyle} />
//           </TouchableOpacity>

//           <Text style={titleStyle}>Wearing a Dress</Text>

//           <Image source={icLogo} style={iconStyle} />
//         </View>

//         {mainJSX}

//         <View style={controlStyle}>
//           <TouchableOpacity style={signInStyle} onPress={ this.props.navigation.signUpJSX}>
//             <Text style={activeStyle}>SIGN IN</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={signUpStyle} onPress={ this.props.navigation.signInJSX}>
//             <Text style={inactiveStyle}>SIGN UP</Text>
//           </TouchableOpacity>
//         </View>


//       </View>
//     );
//   }
// }


// //style
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#3EBA77',
//     padding: 20,
//     justifyContent: 'space-between'
//   },
//   row1: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   titleStyle: {
//     color: '#fff',
//     fontFamily: 'sans-serif',
//     fontSize: 25,
//     paddingBottom: 6
//   },
//   iconStyle: {
//     width: 25,
//     height: 25
//   },
//   controlStyle: {
//     flexDirection: 'row',       //xếp theo chiều ngang
//     alignSelf: 'stretch'
//   },
//   signInStyle: {
//     backgroundColor: '#fff',
//     flex: 1,
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomLeftRadius: 30,
//     borderTopLeftRadius: 30,
//     marginRight: 1,
//   },
//   signUpStyle: {
//     backgroundColor: '#fff',
//     flex: 1,
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomRightRadius: 30,
//     borderTopRightRadius: 30,
//     marginLeft: 1
//   },
//   inactiveStyle: {
//     color: '#D7D7D7',
//   },
//   activeStyle: {
//     color: '#3EBA77'
//   },
//   inputStyle: {
//     height: 40,
//     backgroundColor: '#fff',
//     marginBottom: 10,
//     borderRadius: 20,
//     paddingLeft: 30,
//     paddingBottom: 5
//   },
//   bigButton: {
//     height: 50,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   buttonText: {
//     fontFamily: 'sans-serif',
//     color: '#fff',
//     fontWeight: '400'
//   }
// });
