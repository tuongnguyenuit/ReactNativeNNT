import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

import bannerImage from '../../../../media/temp/banner.jpg'

const { width, height } = Dimensions.get('window');

//Công thức tính chiều dài, rộng của Image
const imageWidth = width - 35;
const imageHeight = (imageWidth / 933) * 465;

//Image: 933* 465

export default class Collection extends Component {
    render() {
        const { wrapper, textStyle, imageStyle} = styles;

        return (
            <View style={wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={ textStyle }>NEW FASHION 2018</Text>
                </View>



                <TouchableOpacity style={{ flex: 5}}
                    onPress={this.props.onOpen}
                >
                    <Image source={bannerImage} style={imageStyle} />
                </TouchableOpacity>
            </View>
        );
    }
};


//Style
const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.33,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 4,
        // shadowColor: 'red',
        // shadowOffset: { width: 10, height: 10},
        // shadowOpacity: 1,   
        padding: 10  ,
        paddingLeft: 8,
        paddingBottom: 10 ,
        paddingRight: 8,
        paddingTop: 8
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF',
        paddingBottom: 10

    },
    imageStyle: {
        height: imageHeight, 
        width: imageWidth,
        borderRadius: 8,
    }
});



