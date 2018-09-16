import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';
import sp5 from '../../../../media/temp/sp5.jpeg';
import sp6 from '../../../../media/temp/sp6.jpeg';
import sp7 from '../../../../media/temp/sp7.jpeg';
import sp8 from '../../../../media/temp/sp8.jpeg';
import backListWinter from '../../../../media/appIcon/backListWinter.png';


const { width, height } = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productHeight = (productWidth * 452) / 361;

//kích thước ảnh 361x452

export default class ListTopProduct extends Component {
    render() {
        const {
            container, header, backStyle, titleStyle,
            body, productContainer, productImage,
            productName, productPrice, textFooter
        } = styles;

        return (
            <ScrollView>
                <View style={container}>
                    <View style={header}>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                            <Image source={backListWinter} style={backStyle} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>TOP PRODUCT</Text>
                        <View style={{ width: 30 }} />
                    </View>

                    <View style={body}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                        <Image source={sp1} style={productImage} />
                        <Text style={productName}>Dress Speel</Text>
                        <Text style={productPrice}>250$</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                        <Image source={sp2} style={productImage} />
                        <Text style={productName}>Jean Woman Jacket</Text>
                        <Text style={productPrice}>200$</Text>
                    </TouchableOpacity>

                    <View style={{ height: 10, width }} />

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                        <Image source={sp3} style={productImage} />
                        <Text style={productName}>Woman Hotfashion</Text>
                        <Text style={productPrice}>150$</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                        <Image source={sp4} style={productImage} />
                        <Text style={productName}>Body Dress</Text>
                        <Text style={productPrice}>300$</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                        <Image source={sp5} style={productImage} />
                        <Text style={productName}>Sequins</Text>
                        <Text style={productPrice}>340$</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                        <Image source={sp6} style={productImage} />
                        <Text style={productName}>Zoe Finn Sequined</Text>
                        <Text style={productPrice}>400$</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                        <Image source={sp7} style={productImage} />
                        <Text style={productName}>Teen Vogue</Text>
                        <Text style={productPrice}>380$</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                        <Image source={sp8} style={productImage} />
                        <Text style={productName}>Gallery Dress</Text>
                        <Text style={productPrice}>230$</Text>
                    </TouchableOpacity>

                    </View>
                    
                    
                </View>
            </ScrollView>
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
        // shadowOffset: {width: 10, height: 10},
        // shadowOpacity: 1,
        // padding: 10
    },
    // titleContainer: {                               //???????????
    //     height: 40,
    //     justifyContent: 'center',
    //     paddingLeft: 10,
    // },
    // title: {
    //     fontSize: 20,
    //     color: '#AFAEAF',
    // },
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
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // padding: 10,
        alignItems: 'center'
    },
    backStyle: {
        width: 30,
        height: 30,
    },
    titleStyle: {
        fontFamily: 'sans-serif',
        color: '#AFAEAF',
        fontSize: 20,
    },
});