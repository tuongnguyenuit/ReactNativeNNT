import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';



const { width, height } = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productHeight = (productWidth * 452) / 361;

//kích thước ảnh 361x452

export default class TopProduct extends Component {
    render() {
        const {
            container, titleContainer, title,
            body, productContainer, productImage,
            productName, productPrice, textFooter
        } = styles;

        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP SELLING 2017</Text>
                </View>

                <View style={body}>
                    <TouchableOpacity onPress={this.props.onOpenDetail} style={productContainer}>
                        <Image source={sp1} style={productImage} />
                        <Text style={productName}>Dress Speel</Text>
                        <Text style={productPrice}>250$</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.props.onOpenDetail} style={productContainer}>
                        <Image source={sp2} style={productImage} />
                        <Text style={productName}>Jean Woman Jacket</Text>
                        <Text style={productPrice}>200$</Text>
                    </TouchableOpacity>

                    <View style={{ height: 10, width }} />

                    <TouchableOpacity onPress={this.props.onOpenDetail} style={productContainer}>
                        <Image source={sp3} style={productImage} />
                        <Text style={productName}>Woman Hotfashion</Text>
                        <Text style={productPrice}>150$</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.props.onOpenDetail} style={productContainer}>
                        <Image source={sp4} style={productImage} />
                        <Text style={productName}>Body Dress</Text>
                        <Text style={productPrice}>300$</Text>
                    </TouchableOpacity>

                </View>

                <View style={body}>
                    <TouchableOpacity onPress={this.props.onOpenListTopProduct}> 
                        <Text style={textFooter}>Xem thêm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // height: height * 0.6,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 4,
        // shadowColor: 'red',
        // shadowOffset: { width: 10, height: 10},
        // shadowOpacity: 1,   
        // padding: 10    
    },
    titleContainer: {                               //???????????
        height: 40,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    title: {
        fontSize: 20,
        color: '#AFAEAF',
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },
    productContainer: {
        width: productWidth,
        paddingBottom: 10,
        backgroundColor: '#fafafa',
        borderRadius: 4,
    },
    productImage: {
        width: productWidth,
        height: productHeight,
        borderRadius: 4,
    },
    productName: {
        paddingLeft: 10,
        fontFamily: 'sans-serif',
        color: '#662F90',
        fontWeight: '300',
        paddingTop: 5
    },
    productPrice: {
        paddingLeft: 10,
        fontFamily: 'sans-serif',
        color: 'red'
    },
    textFooter: {
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        paddingTop: 10,
    }
});