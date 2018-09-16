import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';


import backListWinter from '../../../media/appIcon/backListWinter.png';
import sp1 from '../../../media/image/newFashion/1.jpg';
import sp2 from '../../../media/image/newFashion/2.jpg';
import sp3 from '../../../media/image/newFashion/3.jpg';
import sp4 from '../../../media/image/newFashion/4.jpg';
import sp5 from '../../../media/image/newFashion/5.jpg';
import sp6 from '../../../media/image/newFashion/6.jpg';
import sp7 from '../../../media/image/newFashion/7.jpg';
import sp8 from '../../../media/image/newFashion/8.jpg';

export default class NewFashion extends Component {
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
                            <Image source={backListWinter} style={backStyle} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>New Fashion 2018</Text>
                        <View style={{ width: 30 }} />
                    </View>


                    <View style={productContainer}>
                        <Image style={productImage} source={sp2} />
                        <View style={productInfo}>
                            <Text style={txtName}>Adidas Originals Gold</Text>
                            <Text style={txtPrice}>Year of Release: 2018</Text>
                            <Text style={txtPrice}>73$</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>ssense.com.</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('ManHinh_DetailNewFashion') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={productContainer}>
                        <Image style={productImage} source={sp3} />
                        <View style={productInfo}>
                            <Text style={txtName}>Bustiers</Text>
                            <Text style={txtPrice}>Year of Release: 2018</Text>
                            <Text style={txtPrice}>200$</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>teenvogue.com</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('ManHinh_DetailNewFashion') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={productContainer}>
                        <Image style={productImage} source={sp4} />
                        <View style={productInfo}>
                            <Text style={txtName}>Silvia Tcherassi Agnello</Text>
                            <Text style={txtPrice}>Year of Release: 2018</Text>
                            <Text style={txtPrice}>290$</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>net-a-porter.com.</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('ManHinh_DetailNewFashion') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    <View style={productContainer}>
                        <Image style={productImage} source={sp1} />
                        <View style={productInfo}>
                            <Text style={txtName}>80s Sporty</Text>
                            <Text style={txtPrice}>Year of Release: 2018</Text>
                            <Text style={txtPrice}>250$</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>teenvogue.com</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('ManHinh_DetailNewFashion') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={productContainer}>
                        <Image style={productImage} source={sp5} />
                        <View style={productInfo}>
                            <Text style={txtName}>Head-to-Toe Red</Text>
                            <Text style={txtPrice}>Year of Release: 2018</Text>
                            <Text style={txtPrice}>350$</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>teenvogue.com</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('ManHinh_DetailNewFashion') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={productContainer}>
                        <Image style={productImage} source={sp6} />
                        <View style={productInfo}>
                            <Text style={txtName}>Theory Classic Fitted</Text>
                            <Text style={txtPrice}>Year of Release: 2018</Text>
                            <Text style={txtPrice}>623$</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>farfetch.com.</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('ManHinh_DetailNewFashion') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={productContainer}>
                        <Image style={productImage} source={sp7} />
                        <View style={productInfo}>
                            <Text style={txtName}>Sheer Dresses</Text>
                            <Text style={txtPrice}>Year of Release: 2018</Text>
                            <Text style={txtPrice}>323$</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>farfetch.com.</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('ManHinh_DetailNewFashion') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    <View style={productContainer}>
                        <Image style={productImage} source={sp8} />
                        <View style={productInfo}>
                            <Text style={txtName}>Sheer Tiered Dress</Text>
                            <Text style={txtPrice}>Year of Release: 2018</Text>
                            <Text style={txtPrice}>387$</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtColor}>farfetch.com.</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('ManHinh_DetailNewFashion') }}
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
        color: '#0808ee',
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
        color: 'red',
        fontStyle: 'italic'
    },
    txtShowDetail: {
        fontFamily: 'sans-serif',
        color: '#0808ee',
        fontSize: 12
    },
    iconColor: {
        backgroundColor: '#0808ee',
        height: 12,
        width: 12,
        borderRadius: 6
    }
});



//onPress={() => { this.props.navigation.goBack() }}