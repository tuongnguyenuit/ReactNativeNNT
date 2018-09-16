import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

import sp1 from '../../../../media/image/saleOff/1.jpg';
import sp2 from '../../../../media/image/saleOff/2.jpg';
import sp3 from '../../../../media/image/saleOff/3.jpg';
import sp4 from '../../../../media/image/saleOff/4.jpg';
import sp5 from '../../../../media/image/saleOff/5.jpg';
import sp6 from '../../../../media/image/saleOff/6.jpg';
import sp7 from '../../../../media/image/saleOff/7.jpg';
import sp8 from '../../../../media/image/saleOff/8.jpg';
import sp9 from '../../../../media/image/saleOff/9.jpg';
import sp10 from '../../../../media/image/saleOff/10.jpg';

import backListWinter from '../../../../media/appIcon/backListWinter.png';



const { width, height } = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productHeight = (productWidth * 452) / 361;

//kích thước ảnh 361x452

export default class ListSaleProduct extends Component {
    render() {
        const {
            container, header, backStyle, titleStyle,
            body, productContainer, productImage,
            productName, productPrice, textFooter,
            productPriceSale, productPricePercent
        } = styles;

        return (
            <ScrollView>
                <View style={container}>
                    <View style={header}>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                            <Image source={backListWinter} style={backStyle} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>SALE OFF</Text>
                        <View style={{ width: 30 }} />
                    </View>


                    <View style={body}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                        <Image source={sp1} style={productImage} />
                        <Text style={productName}>Layered Graphic Tees</Text>
                        <Text style={productPriceSale}>Sale 30%</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={productPricePercent}>250$</Text>
                            <Text style={productPrice}>375$</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                        <Image source={sp2} style={productImage} />
                        <Text style={productName}>Knowlita New</Text>
                        <Text style={productPriceSale}>Sale 30%</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={productPricePercent}>250$</Text>
                            <Text style={productPrice}>375$</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{ height: 10, width }} />

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                        <Image source={sp3} style={productImage} />
                        <Text style={productName}>Statement Socks</Text>
                        <Text style={productPriceSale}>Sale 30%</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={productPricePercent}>250$</Text>
                            <Text style={productPrice}>375$</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                        <Image source={sp4} style={productImage} />
                        <Text style={productName}>Raey Metallic Ribbed</Text>
                        <Text style={productPriceSale}>Sale 30%</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={productPricePercent}>250$</Text>
                            <Text style={productPrice}>375$</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                        <Image source={sp5} style={productImage} />
                        <Text style={productName}>Pastels</Text>
                        <Text style={productPriceSale}>Sale 20%</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={productPricePercent}>350$</Text>
                            <Text style={productPrice}>475$</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                        <Image source={sp6} style={productImage} />
                        <Text style={productName}>Mango Buckles</Text>
                        <Text style={productPriceSale}>Sale 35%</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={productPricePercent}>220$</Text>
                            <Text style={productPrice}>320$</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                        <Image source={sp7} style={productImage} />
                        <Text style={productName}>Bold Florals</Text>
                        <Text style={productPriceSale}>Sale 10%</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={productPricePercent}>405$</Text>
                            <Text style={productPrice}>450$</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                        <Image source={sp8} style={productImage} />
                        <Text style={productName}>Joseph Inga</Text>
                        <Text style={productPriceSale}>Sale 30%</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={productPricePercent}>350$</Text>
                            <Text style={productPrice}>500$</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                        <Image source={sp9} style={productImage} />
                        <Text style={productName}>Exposed Hips</Text>
                        <Text style={productPriceSale}>Sale 20%</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={productPricePercent}>240$</Text>
                            <Text style={productPrice}>300$</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                        <Image source={sp10} style={productImage} />
                        <Text style={productName}>Babaton Chandler</Text>
                        <Text style={productPriceSale}>Sale 33%</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={productPricePercent}>350$</Text>
                            <Text style={productPrice}>520$</Text>
                        </View>
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