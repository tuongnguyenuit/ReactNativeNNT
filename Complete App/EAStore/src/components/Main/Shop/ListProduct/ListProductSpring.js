import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';


import backListSpring from '../../../../media/appIcon/backListSpring.png';
import spring1 from '../../../../media/temp/spring1.jpg';
import spring2 from '../../../../media/temp/spring2.jpg';
import spring3 from '../../../../media/temp/spring3.jpg';

export default class ListProductSpring extends Component {
    render() {
        const {
            container, header, wraper, backStyle, titleStyle,
            productContainer, productImage, productInfo, lastRowInfo,
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail, iconColor
        } = styles;

        return (
            <View style={container}>
                <ScrollView style={wraper}>

                    <View style={header}>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                            <Image source={backListSpring} style={backStyle} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>Spring Fashion</Text>
                        <View style={{ width: 30 }} />
                    </View>


                    <View style={productContainer}>
                        <Image style={productImage} source={spring1} />
                        <View style={productInfo}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>250$</Text>
                            <Text style={txtMaterial}>Yame Shop</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color RoyalBlue</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    <View style={productContainer}>
                        <Image style={productImage} source={spring2} />
                        <View style={productInfo}>
                            <Text style={txtName}>Jacket Hand</Text>
                            <Text style={txtPrice}>200$</Text>
                            <Text style={txtMaterial}>Oversize Shop</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color green</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={productContainer}>
                        <Image style={productImage} source={spring3} />
                        <View style={productInfo}>
                            <Text style={txtName}>Dress Sleeve</Text>
                            <Text style={txtPrice}>180$</Text>
                            <Text style={txtMaterial}>Hamter Shop</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color Flower</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={productContainer}>
                        <Image style={productImage} source={spring1} />
                        <View style={productInfo}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>250$</Text>
                            <Text style={txtMaterial}>Yame Shop</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color RoyalBlue</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={productContainer}>
                        <Image style={productImage} source={spring2} />
                        <View style={productInfo}>
                            <Text style={txtName}>Jacket Hand</Text>
                            <Text style={txtPrice}>200$</Text>
                            <Text style={txtMaterial}>Oversize Shop</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color green</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={productContainer}>
                        <Image style={productImage} source={spring3} />
                        <View style={productInfo}>
                            <Text style={txtName}>Dress Sleeve</Text>
                            <Text style={txtPrice}>180$</Text>
                            <Text style={txtMaterial}>Hamter Shop</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color Flower</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={productContainer}>
                        <Image style={productImage} source={spring1} />
                        <View style={productInfo}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>250$</Text>
                            <Text style={txtMaterial}>Yame Shop</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color RoyalBlue</Text>
                                <View style={iconColor} />
                                <TouchableOpacity 
                                onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={productContainer}>
                        <Image style={productImage} source={spring2} />
                        <View style={productInfo}>
                            <Text style={txtName}>Jacket Hand</Text>
                            <Text style={txtPrice}>200$</Text>
                            <Text style={txtMaterial}>Oversize Shop</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>Color green</Text>
                                <View style={iconColor} />
                                <TouchableOpacity 
                                onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </ScrollView>

            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBDB',
        padding: 10
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // padding: 10,
        alignItems: 'center'
    },
    wraper: {
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    backStyle: {
        width: 30,
        height: 30,
    },
    titleStyle: {
        fontFamily: 'sans-serif',
        color: '#05f518',
        fontSize: 20,
    },
    productContainer: {
        flexDirection: 'row',
        // paddingLeft: 20,
        paddingTop: 15,
        borderTopColor: '#D6D6D6',
        borderBottomColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1,
        paddingBottom: 10
    },
    productImage: {
        width: 80,
        height: (80 * 452) / 361,
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 10,
        flex: 1,
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        fontFamily: 'sans-serif',
        color: '#BCBCBC',
        fontSize: 18,
        fontWeight: '400'
    },
    txtPrice: {
        fontFamily: 'sans-serif',
        color: '#B10D65',
    },
    txtMaterial: {
        fontFamily: 'sans-serif',
    },
    txtColor: {
        fontFamily: 'sans-serif',
    },
    txtShowDetail: {
        fontFamily: 'sans-serif',
        color: '#05f518',
        fontSize: 12
    },
    iconColor: {
        backgroundColor: '#05f518',
        height: 12,
        width: 12,
        borderRadius: 6
    }
});



//onPress={() => { this.props.navigation.goBack() }}