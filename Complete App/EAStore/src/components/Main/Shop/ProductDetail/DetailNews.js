import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image,
    Dimensions, ScrollView, TouchableOpacity
} from 'react-native';



import sp1 from '../../../../media/image/news/1.jpg';
import sp11 from '../../../../media/image/news/1_1.jpg';

const back = require('../../../../media/appIcon/backListBlack.png');
const info = require('../../../../media/appIcon/info.png');

const { width } = Dimensions.get('window');
const widthImage = width - 40;
const heightImage = (widthImage * 706) / 565;


export default class ProductDetail extends Component {
    render() {
        const {
            wrapper, container, cardStyle, header, backStyle, titleStyle, cartStyle, infoContainer,
            txtName, txtLink, image, contentDetail, contentView
        } = styles;

        return (
            <ScrollView style={wrapper}>
                <View style={container}>
                    <View style={header}>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                            <Image style={backStyle} source={back} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>Detail Product</Text>
                        <Image style={cartStyle} source={info} />
                    </View>

                    <View style={infoContainer}>
                        <Text style={txtName}>Of Course This VS Angel Looks Chic on a Trip to Antarctica </Text>
                        <Text />
                        <Text style={txtLink}>www.whowhatwear.com</Text>
                        <View style={{ padding: 20 }}>
                            <Image source={sp1} style={image} />
                        </View>
                        <View style={contentView}>
                            <Text style={contentDetail}>If you're on the East Coast, you're already well acquainted with
                            frigid temperatures courtesy of the so-called "bomb cyclone." But would you trade a blizzard
                            for ice-covered Antarctica? Victoria's Secret Angel Josephine Skriver is currently on an amazing
                            trip to the remote continent, and we're ogling at her beautiful photos.
                            Naturally, one still looks chic in negative temperatures if they're a VS Angel. For proof, just
                            look at Skriver's Instagram, where the model has shared photos of a boat ride and a penguin encounter
                            in cozy, Antarctica-approved layers. Remind us to tap Skriver the next time we need to buy clothes
                            for a winter storm.
                            Scroll down to see Instagrams from Josephine Skriver's trip to Antarctica.
                        </Text>
                        </View>
                        <View style={{ padding: 10 }}>
                            <Image source={sp11} style={image} />
                        </View>
                    </View>
                </View>


            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#D6D6D6',
        padding: 10
    },
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 5
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
        paddingTop: 20,
        borderBottomColor: '#D6D6D6',
        borderTopColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1,
        paddingBottom: 15
    },
    cartStyle: {
        width: 30,
        height: 30
    },
    backStyle: {
        width: 30,
        height: 30
    },
    titleStyle: {
        fontFamily: 'sans-serif',
        color: 'black',
        fontSize: 20,
    },
    infoContainer: {
        padding: 10,
        // backgroundColor: '#e6e6e6',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    txtName: {
        fontFamily: 'sans-serif',
        color: '#f88328',
        fontSize: 22,
        // fontWeight: '400',
        // paddingLeft: 20,
        // paddingRight: 20,
        textAlign: 'center'
    },
    txtLink: {
        fontFamily: 'sans-serif',
        color: '#B10D65',
        fontStyle: 'italic',
        fontSize: 10,
        textDecorationLine: 'underline'
    },
    image: {
        width: widthImage,
        height: heightImage,
    },
    contentDetail: {
        textAlign: 'auto',
        fontSize: 14,
        letterSpacing: 10,
        lineHeight: 25,
        textAlign: 'center'
    },
    contentView: {
        padding: 10,
    }
});