import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import sp1 from '../../../../media/image/saleOff/1.jpg';
import sp2 from '../../../../media/image/saleOff/2.jpg';
import sp3 from '../../../../media/image/saleOff/3.jpg';
import sp4 from '../../../../media/image/saleOff/4.jpg';




const { width, height } = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productHeight = (productWidth * 452) / 361;

//kích thước ảnh 361x452

export default class SaleOff extends Component {
    render() {
        const {
            container, titleContainer, title,
            body, productContainer, productImage,
            productName, productPrice, textFooter,
            productPriceSale, productPricePercent
        } = styles;

        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>SALE OFF</Text>
                </View>

                <View style={body}>
                    <TouchableOpacity onPress={this.props.onOpenDetail} style={productContainer}>
                        <Image source={sp1} style={productImage} />
                        <Text style={productName}>Layered Graphic Tees</Text>
                        <Text style={productPriceSale}>Sale 30%</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={productPricePercent}>250$</Text>
                            <Text style={productPrice}>375$</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.props.onOpenDetail} style={productContainer}>
                        <Image source={sp2} style={productImage} />
                        <Text style={productName}>Knowlita New</Text>
                        <Text style={productPriceSale}>Sale 30%</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={productPricePercent}>250$</Text>
                            <Text style={productPrice}>375$</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{ height: 10, width }} />

                    <TouchableOpacity onPress={this.props.onOpenDetail} style={productContainer}>
                        <Image source={sp3} style={productImage} />
                        <Text style={productName}>Statement Socks</Text>
                        <Text style={productPriceSale}>Sale 30%</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={productPricePercent}>250$</Text>
                            <Text style={productPrice}>375$</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.props.onOpenDetail} style={productContainer}>
                        <Image source={sp4} style={productImage} />
                        <Text style={productName}>Raey Metallic Ribbed</Text>
                        <Text style={productPriceSale}>Sale 30%</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={productPricePercent}>250$</Text>
                            <Text style={productPrice}>375$</Text>
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={body}>
                    <TouchableOpacity onPress={this.props.onOpenListSaleProduct}>
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
    productPriceSale: {
        paddingLeft: 15,
        fontFamily: 'sans-serif',
        color: 'red',
        fontSize: 18
    },
    productPrice: {
        paddingLeft: 15,
        fontFamily: 'sans-serif',
        color: '#5f5a5a',
        textDecorationLine: 'line-through'
    },
    productPricePercent: {
        paddingLeft: 15,
        fontFamily: 'sans-serif',
        color: '#630ee4',
    },
    textFooter: {
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        paddingTop: 10,
    }
});