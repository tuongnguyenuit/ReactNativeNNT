import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, TextInput, Dimensions } from 'react-native';


import metro from '../media/appIcon/metro.png';

const { width } = Dimensions.get('window');
const widthImage = width - 30;
const heightImage = (width * 528) / 600;

export default class metroScreen extends Component {
    render() {
        const {
            row1, iconStyle, container,
            controlStyle, signInStyle, signUpStyle,
            inactiveStyle, inputStyle,
            viewText
        } = styles;

        return (
            <View style={container}>

                <View style={row1}>
                    <Image source={metro} style={iconStyle} />
                </View>

                <View style={viewText}>
                    <Text style={inputStyle}>With Fashion News App</Text>
                    <Text style={inputStyle}>News of Fashion in Your Hand</Text>
                    <Text>------------------------------</Text>
                    <Text style={inputStyle}>- If Anyone know One, Sure You will know Two -</Text>
                </View>



                <View style={controlStyle}>
                    <TouchableOpacity style={signInStyle} onPress={() => { this.props.navigation.navigate('Tabs_Slide') }}>
                        <Text style={inactiveStyle}>SKIP ALL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signUpStyle} onPress={() => { this.props.navigation.navigate('ManHinh_SignIn') }}>
                        <Text style={inactiveStyle}>NEXT STEP</Text>
                    </TouchableOpacity>
                </View>


            </View>
        );
    }
}


//style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'space-between'
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconStyle: {
        width: widthImage,
        height: heightImage
    },
    controlStyle: {
        flexDirection: 'row',       //xếp theo chiều ngang
        alignSelf: 'stretch'
    },
    signInStyle: {
        backgroundColor: '#D7D7D7',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        marginRight: 1,
    },
    signUpStyle: {
        backgroundColor: '#D7D7D7',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        marginLeft: 1
    },
    inactiveStyle: {
        color: '#ac0000',
    },
    inputStyle: {
        height: 30,        
    },
    viewText: {
        backgroundColor: '#ecebeb',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10
    },
});
