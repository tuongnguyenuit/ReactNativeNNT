import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, TextInput, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';


import icBack from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';

export default class SignIn extends Component {


    // onSuccess() {
    //     Alert.alert(
    //         'Notice',
    //         'Login Sucessfully',
    //         [
    //           { text: 'OK', onPress: () => console.log('Ask me later pressed')},
    //         ],
    //         { cancelable: false }
    //       );
    // } 

    render() {
        const {
            row1, iconStyle, titleStyle, container,
            signInStyle, signUpStyle, controlStyle,
            inputStyle, bigButton, buttonText
        } = styles;

        return (
            <View style={container}>

                <View style={row1}>
                    <Text style={titleStyle}>FASHION NEWS</Text>

                    <Image source={icLogo} style={iconStyle}/>
                </View>



                <View style={{ paddingTop: 70 }}>
                    <TextInput
                        style={inputStyle}
                        placeholder="Enter your email"
                        underlineColorAndroid='rgba(0,0,0,0)'
                    />
                    <TextInput
                        style={inputStyle}
                        placeholder="Enter your password"
                        underlineColorAndroid='rgba(0,0,0,0)'
                        secureTextEntry
                    />
                </View>


                <View style={{ paddingBottom: 100 }}>
                    <TouchableOpacity style={bigButton}
                        onPress={() => { this.props.navigation.navigate('Tabs_Slide') }}
                    >
                        <Text style={buttonText}>SIGN IN NOW</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{ paddingBottom: 10, fontStyle: 'italic', textDecorationLine: 'underline' }}>
                        You don't have account
                    </Text>
                </View>
                <View style={controlStyle}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_SignUp') }}>
                        <Text style={signInStyle}>Register Account Now</Text>
                    </TouchableOpacity>
                </View>


            </View >
        );
    }
}


//style
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3EBA77',
        padding: 30,
        paddingTop: 40,
        justifyContent: 'space-between',
        flex: 1
    },
    row1: {
        // flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleStyle: {
        color: '#fff',
        fontFamily: 'sans-serif-medium',
        fontSize: 35,
        paddingBottom: 6,
        fontStyle: 'italic'
    },
    iconStyle: {
        width: (110 * 588) / 348,
        height: 110,
    },
    controlStyle: {
        // alignSelf: 'stretch',
        alignItems: 'center'
    },
    signInStyle: {
        backgroundColor: '#fff',
        // flex: 1,
        // alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 30,
        paddingLeft: 60,
        paddingRight: 60
        // justifyContent: 'space-between'

    },
    // signUpStyle: {
    //     backgroundColor: '#fff',
    //     flex: 1,
    //     alignItems: 'center',
    //     paddingVertical: 15,
    //     borderBottomRightRadius: 30,
    //     borderTopRightRadius: 30,
    //     marginLeft: 1
    // },
    // inactiveStyle: {
    //     color: '#D7D7D7',
    // },
    // activeStyle: {
    //     color: '#3EBA77'
    // },
    inputStyle: {
        height: 40,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30,
    },
    bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'sans-serif',
        color: '#fff',
        fontWeight: '400'
    }
});

