import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';

import icLogo from '../../../media/appIcon/ic_logo.png';
import icThanks from '../../../media/appIcon/ic_thanks.png';


const { height } = Dimensions.get('window');


export default class Header extends Component {
    render() {
        const { wrapper, row1, iconStyle, titleStyle, iconStyleLogo, viewText } = styles;

        return (
            <View style={wrapper}>
                <View style={row1}>

                    <Image source={icLogo} style={iconStyleLogo} />

                    <Text style={titleStyle}>Fashion News </Text>

                    <TouchableOpacity
                        onPress={this.props.onOpen}
                    >
                        <Image source={icThanks} style={iconStyle} />
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.1,
        backgroundColor: '#34B089',
        padding: 10,
        justifyContent: 'space-around',
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 6,
        alignItems: 'center'
    },
    // textInput: {
    //     height: height / 20,
    //     backgroundColor: '#fff',
    //     paddingLeft: 10,
    //     paddingBottom: 6,
    //     borderRadius: 4

    // },
    titleStyle: {
        color: '#fff',
        fontFamily: 'sans-serif',
        fontSize: 24,
        // paddingBottom: 10
    },
    iconStyleLogo: {
        width: (40 * 588) / 348,
        height: 40,
    },
    iconStyle: {
        width: 36,
        height: 36,
    },
});



// Các thuộc tính của View:
// - flex: 1                               dùng để bao hết màn hình
// - flexDirection: 'row'                  dùng để xét chiều View sang ngang
// - justifyContent: 'space-between'       dùng cách đều các phần tử trên cùng 1 View      


//<TextInput
//style={textInput}
//placeholder="What do you want to buy?"
//underlineColorAndroid='rgba(0,0,0,0)'
///>