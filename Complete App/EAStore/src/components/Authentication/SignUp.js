import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, TextInput, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

import icBack from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';

export default class SignIn extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         email: '',
    //         password: '',
    //         rePassword: ''
    //     };
    // }

    // registerUser() {
    //     const { name, email, password } = this.state;
    //     register( email, name, password )
    //     .then(res => {
    //         console.log(res);
    //     });
    // }


    onSuccess() {
        Alert.alert(
            'Notice',
            'Register Sucessfully',
            [
                { text: 'OK', onPress: () => console.log('Ask me later pressed') },
            ],
            { cancelable: false }
        );
    }


    render() {
        const {
            row1, iconStyle, titleStyle, container,
            controlStyle, signInStyle, signUpStyle,
            inactiveStyle, activeStyle, inputStyle,
            bigButton, buttonText
        } = styles;

        return (
            <View style={container}>

                <View style={row1}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.goBack() }}
                    >
                        <Image source={icBack} style={iconStyle} />
                    </TouchableOpacity>

                    <Text style={titleStyle}>Wearing a Dress</Text>

                    <View />
                </View>



                <View style={{ paddingTop: 40 }}>
                    <TextInput 
                        style={inputStyle} 
                        placeholder="Enter your name" 
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        // value={this.state.name}
                        // onChangeText={text => this.setState({name: text})}
                    />
                    <TextInput 
                        style={inputStyle} 
                        placeholder="Enter your email" 
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        // value={this.state.email}
                        // onChangeText={text => this.setState({email: text})}
                    />
                    <TextInput
                        style={inputStyle}
                        placeholder="Enter your password"
                        underlineColorAndroid='rgba(0,0,0,0)'
                        secureTextEntry
                        // value={this.state.password}
                        // onChangeText={text => this.setState({password: text})}
                    />
                    <TextInput
                        style={inputStyle}
                        placeholder="Re-enter your password"
                        underlineColorAndroid='rgba(0,0,0,0)'
                        secureTextEntry
                        // value={this.state.rePassword}
                        // onChangeText={text => this.setState({rePassword: text})}
                    />
                </View>


                <View style={{ paddingBottom: 150 }}>
                    <TouchableOpacity style={bigButton} onPress={this.onSuccess}>
                        <Text style={buttonText}>SIGN UP NOW</Text>
                    </TouchableOpacity>
                </View>


                {/* <View style={controlStyle}>
                    <TouchableOpacity style={signInStyle}>
                        <Text style={activeStyle}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity tyle={signUpStyle} >
                        <Text style={inactiveStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View> */}


            </View >
        );
    }
}


//style
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3EBA77',
        padding: 20,
        justifyContent: 'space-between',
        flex: 1
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleStyle: {
        color: '#fff',
        fontFamily: 'sans-serif',
        fontSize: 25,
        paddingBottom: 6
    },
    iconStyle: {
        width: 25,
        height: 25
    },
    controlStyle: {
        flexDirection: 'row',       //xếp theo chiều ngang
        alignSelf: 'stretch'
    },
    signInStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        marginRight: 1,
    },
    signUpStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        marginLeft: 1
    },
    inactiveStyle: {
        color: '#D7D7D7',
    },
    activeStyle: {
        color: '#3EBA77'
    },
    inputStyle: {
        height: 40,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30,
        paddingBottom: 5
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

