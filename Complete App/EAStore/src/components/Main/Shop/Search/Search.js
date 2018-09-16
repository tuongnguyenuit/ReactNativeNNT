import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';

import DetailNews from '../ProductDetail/DetailNews';


import sp1 from '../../../../media/image/news/1.jpg';
import sp2 from '../../../../media/image/news/2.jpg';
import sp3 from '../../../../media/image/news/3.jpg';
import sp4 from '../../../../media/image/news/4.jpg';
import sp5 from '../../../../media/image/news/5.jpg';
import sp6 from '../../../../media/image/news/6.jpg';
import sp7 from '../../../../media/image/news/7.jpg';
import sp8 from '../../../../media/image/news/8.jpg';
import sp9 from '../../../../media/image/news/9.jpg';
import sp10 from '../../../../media/image/news/10.jpg';


export default class Search extends Component {
    render() {
        return (
            <SearchStack />
        );
    }
}

class SearchView extends Component {
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
                        <View style={{ width: 30 }} />
                        <Text style={titleStyle}>Hot News</Text>
                        <View style={{ width: 30 }} />
                    </View>


                    <View style={productContainer}>
                        <View style={{ borderRadius: 40 }}>
                            <Image style={productImage} source={sp1} />
                        </View>
                        <View style={productInfo}>
                            <Text style={txtName}>Of Course This VS Angel Looks Chic on a Trip to Antarctica</Text>
                            <Text style={txtColor}>See all of Josephine Skriver's stunning photos</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtPrice}>www.whowhatwear.com</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('Detail_Stack') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>



                 
                    <View style={productContainer}>
                        <View style={{ borderRadius: 40 }}>
                            <Image style={productImage} source={sp2} />
                        </View>
                        <View style={productInfo}>
                            <Text style={txtName}>The Comfortable Heels That "Never Stay in Stock for Long" Are Back</Text>
                            <Text style={txtColor}>This Day Heel never stays in stock for long</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtPrice}>http://www.vogue.co.uk</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('Detail_Stack') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>



                    <View style={productContainer}>
                        <View style={{ borderRadius: 40 }}>
                            <Image style={productImage} source={sp3} />
                        </View>
                        <View style={productInfo}>
                            <Text style={txtName}>Get Ready: H&M Is Launching a New Brand Just for Millennials</Text>
                            <Text style={txtColor}>We love spotlighting our favorite thrifty finds from the retailer</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtPrice}>www.whowhatwear.com</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('Detail_Stack') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    


                    <View style={productContainer}>
                        <View style={{ borderRadius: 40 }}>
                            <Image style={productImage} source={sp4} />
                        </View>
                        <View style={productInfo}>
                            <Text style={txtName}>Khloé Kardashian Already Has the Cutest Baby Boy Name Picked Out</Text>
                            <Text style={txtColor}>she's disclosing her top baby name choice if she has a boy</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtPrice}>http://www.vogue.co.uk</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('Detail_Stack') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>



                    <View style={productContainer}>
                        <View style={{ borderRadius: 40 }}>
                            <Image style={productImage} source={sp5} />
                        </View>
                        <View style={productInfo}>
                            <Text style={txtName}>Selena Gomez Wore the Coolest $24 Leggings for Yoga With Justin Bieber</Text>
                            <Text style={txtColor}>We have a feeling they'll sell out pronto.</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtPrice}>http://www.vogue.co.uk</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('Detail_Stack') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>



                    <View style={productContainer}>
                        <View style={{ borderRadius: 40 }}>
                            <Image style={productImage} source={sp6} />
                        </View>
                        <View style={productInfo}>
                            <Text style={txtName}>5 Fun Facts About the Dreamiest Movie Costumes of Award Season</Text>
                            <Text style={txtColor}>Woodcock eventually finds his "perfectly tailored life disrupted by love" </Text>
                            <View style={lastRowInfo}>
                                <Text style={txtPrice}>www.whowhatwear.com</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('Detail_Stack') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>



                    <View style={productContainer}>
                        <View style={{ borderRadius: 40 }}>
                            <Image style={productImage} source={sp7} />
                        </View>
                        <View style={productInfo}>
                            <Text style={txtName}>This Is How Pregnant Khloé Kardashian Styles Leggings for the Airport</Text>
                            <Text style={txtColor}>We can't wait to see how her maternity style progresses over the next three months</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtPrice}>www.whowhatwear.com</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('Detail_Stack') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>



                    <View style={productContainer}>
                        <View style={{ borderRadius: 40 }}>
                            <Image style={productImage} source={sp8} />
                        </View>
                        <View style={productInfo}>
                            <Text style={txtName}>Ellen Page Just Revealed Her Minimal Wedding Ring—and We're Obsessed</Text>
                            <Text style={txtColor}>"Can't believe I get to call this extraordinary woman my wife"</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtPrice}>www.whowhatwear.com</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('Detail_Stack') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>



                    <View style={productContainer}>
                        <View style={{ borderRadius: 40 }}>
                            <Image style={productImage} source={sp9} />
                        </View>
                        <View style={productInfo}>
                            <Text style={txtName}>Inside The February 2018 Issue Of Vogue</Text>
                            <Text style={txtColor}>go inside Edward Enninful’s third iteration of #NewVogue</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtPrice}>http://www.vogue.co.uk</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('Detail_Stack') }}
                                >
                                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>



                    <View style={productContainer}>
                        <View style={{ borderRadius: 40 }}>
                            <Image style={productImage} source={sp10} />
                        </View>
                        <View style={productInfo}>
                            <Text style={txtName}>DVF Appoints Chief Design Officer</Text>
                            <Text style={txtColor}>“I want to make great clothes that resonate with women”</Text>
                            <View style={lastRowInfo}>
                                <Text style={txtPrice}>http://www.vogue.co.uk</Text>
                                <View style={iconColor} />
                                <TouchableOpacity
                                    onPress={() => { this.props.navigation.navigate('Detail_Stack') }}
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




//Stack Navigator
export const SearchStack = StackNavigator({
    Search_Stack: {
        screen: SearchView
    },
    Detail_Stack: {
        screen: DetailNews
    }
},
    {
        headerMode: 'none'
    }
);



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
        paddingHorizontal: 5
    },
    backStyle: {
        width: 30,
        height: 30,
    },
    titleStyle: {
        fontFamily: 'sans-serif',
        color: '#fd7e08',
        fontSize: 20,
    },
    productContainer: {
        flexDirection: 'row',
        // paddingLeft: 20,
        paddingTop: 20,
        borderTopColor: '#D6D6D6',
        borderBottomColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1,
        paddingBottom: 15
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 40
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
        color: 'black',
        fontSize: 12,
        fontWeight: '400'
    },
    txtPrice: {
        fontFamily: 'sans-serif',
        color: '#B10D65',
        fontStyle: 'italic',
        fontSize: 10,
        textDecorationLine: 'underline'
    },
    // txtMaterial: {
    //     fontFamily: 'sans-serif',
    //     fontSize: 6
    // },
    txtColor: {
        fontFamily: 'sans-serif',
        color: '#BCBCBC',
        fontSize: 10,

    },
    txtShowDetail: {
        fontFamily: 'sans-serif',
        color: '#2d71b1',
        fontSize: 12,
    },
    iconColor: {
        backgroundColor: '#2d71b1',
        height: 12,
        width: 12,
        borderRadius: 6
    }
});



//onPress={() => { this.props.navigation.goBack() }}