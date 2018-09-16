import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image,
    Dimensions, ScrollView, TouchableOpacity
} from 'react-native';



import img1 from '../../../../media/image/newFashion/1.jpg';
import img2 from '../../../../media/image/newFashion/2.jpg';
import img3 from '../../../../media/image/newFashion/3.jpg';
import img4 from '../../../../media/image/newFashion/4.jpg';

const back = require('../../../../media/appIcon/back.png');
const info = require('../../../../media/appIcon/info.png');



export default class DetailNewFashion extends Component {
    render() {
        const {
            wrapper, cardStyle, header, txtPrice,
            footer, backStyle, txtColorweb, titleStyle,
            imageContainer, cartStyle, textBlack,
            textSmoke, textHighlight, textMain, titleContainer,
            descContainer, productImageStyle, descStyle, txtMaterial, txtColor
        } = styles;
        return (
            <ScrollView style={wrapper}>
                <View style={cardStyle}>
                    <View style={header}>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                            <Image style={backStyle} source={back} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>Detail Product</Text>
                        <Image style={cartStyle} source={info} />

                    </View>


                    <View style={imageContainer}>
                        <ScrollView style={{ flexDirection: 'row', padding: 10, height: swiperHeight }} horizontal >
                            <Image source={img1} style={productImageStyle} />
                            <Image source={img2} style={productImageStyle} />
                            <Image source={img3} style={productImageStyle} />
                            <Image source={img4} style={productImageStyle} />
                        </ScrollView>
                    </View>


                    <View style={footer}>
                        <View style={titleContainer}>
                            <Text style={textMain}>
                                <Text style={textBlack}>{'back of the'.toUpperCase()}</Text>
                                <Text style={textHighlight}> / </Text>
                                <Text style={textSmoke}>100$</Text>
                            </Text>
                        </View>


                        <View style={descContainer}>
                            <Text style={txtPrice}>Year of Release: 2018</Text>
                            <Text style={txtColorweb}>ssense.com.</Text>
                            <Text style={descStyle}>A delicate layer of eyelash lace brings dreamy elegance to this piece, while smooth, lightweight lining feels luxurious against your skin. We love it with heels for a look that fits in on date night, or with cool booties to add an edge.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
                                <Text style={txtMaterial}>Material Fur</Text>
                                <View style={{ flexDirection: 'row' }} >
                                    <Text style={txtColor}>Color Black</Text>
                                    <View style={{ height: 15, width: 15, backgroundColor: 'black'.toLowerCase(), borderRadius: 15, marginLeft: 10, borderWidth: 1, borderColor: '#C21C70' }} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const { width } = Dimensions.get('window');
const swiperWidth = (width / 1.8) - 30;
const swiperHeight = (swiperWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#D6D6D6',
    },
    cardStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 20
    },
    cartStyle: {
        width: 30,
        height: 30
    },
    backStyle: {
        width: 25,
        height: 25
    },
    productStyle: {
        width: width / 2,
        height: width / 2
    },
    footer: {
        flex: 6
    },
    imageContainer: {
        flex: 6,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10,
        paddingTop: 20
    },
    textMain: {
        paddingLeft: 20,
        marginVertical: 10
    },
    textBlack: {
        fontFamily: 'Avenir',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3F3F46'
    },
    textSmoke: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#9A9A9A'
    },
    textHighlight: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#7D59C8'
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderColor: '#F6F6F6',
        marginHorizontal: 20,
        paddingBottom: 5
    },
    descContainer: {
        margin: 10,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    descStyle: {
        color: '#AFAFAF'
    },
    linkStyle: {
        color: '#7D59C8'
    },
    productImageStyle: {
        width: swiperWidth,
        height: swiperHeight,
        marginHorizontal: 5
    },
    mainRight: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        paddingLeft: 20
    },
    txtColor: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        fontFamily: 'sans-serif',
        color: '#B10D65',
    },
    txtColorweb: {
        fontFamily: 'sans-serif',
        color: 'red',
        fontStyle: 'italic'
    },
    titleStyle: {
        fontFamily: 'sans-serif',
        color: 'black',
        fontSize: 20,
    },
});