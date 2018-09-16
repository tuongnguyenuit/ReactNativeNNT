import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

import viewall from '../../../../media/appIcon/viewall.png';

import topsp1 from '../../../../media/temp/sp1.jpeg';
import newsp1 from '../../../../media/image/newFashion/1.jpg';
import salesp1 from '../../../../media/image/saleOff/1.jpg';
import springsp1 from '../../../../media/temp/spring1.jpg';
import summersp1 from '../../../../media/temp/summer1.jpg';
import autumnsp1 from '../../../../media/temp/autumn1.jpg';
import wintersp1 from '../../../../media/temp/winter1.jpg';


const { width, height } = Dimensions.get('window');
const productWidth = (width - 50) / 3;
const productHeight = (productWidth * 452) / 361;

export default class Category extends Component {
    render() {

        const {
            container, header, titleStyle,
            body0, productImage0, text0, image0
        } = styles;

        return (
            <View style={container}>
                <View style={header}>
                    <Text style={titleStyle}>CATEGORY</Text>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.goBack() }}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={titleStyle}>Back</Text>
                            <Image source={viewall} style={image0} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={body0}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('New_Stack') }}>
                        <View style={{ padding: 10 }}>
                            <Image source={newsp1} style={productImage0} />
                            <Text style={text0}>New Fashion</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Top_Stack') }}>
                        <View style={{ padding: 10 }}>
                            <Image source={topsp1} style={productImage0} />
                            <Text style={text0}>Top Product</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Sale_Stack') }}>
                        <View style={{ padding: 10 }}>
                            <Image source={salesp1} style={productImage0} />
                            <Text style={text0}>Sale Product</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={body0}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Spring_Stack') }}>
                        <View style={{ padding: 10 }}>
                            <Image source={springsp1} style={productImage0} />
                            <Text style={text0}>Spring Product</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Summer_Stack') }}>
                        <View style={{ padding: 10 }}>
                            <Image source={summersp1} style={productImage0} />
                            <Text style={text0}>Summer Product</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Autumn_Stack') }}>
                        <View style={{ padding: 10 }}>
                            <Image source={autumnsp1} style={productImage0} />
                            <Text style={text0}>Autumn Product</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={body0}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Winter_Stack') }}>
                        <View style={{ padding: 10 }}>
                            <Image source={wintersp1} style={productImage0} />
                            <Text style={text0}>Winter Product</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}


const styles = StyleSheet.create({
    container: {
        // height: height * 0.6,
        backgroundColor: '#b1b1b1',
        margin: 10,
        borderRadius: 4,
        flex: 1
    },
    body0: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // flexWrap: 'wrap',
        paddingBottom: 10
    },
    productImage0: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // padding: 10,
        paddingRight: 10,
        alignItems: 'center'
    },
    titleStyle: {
        fontFamily: 'sans-serif',
        color: '#fff',
        paddingLeft: 10,
        fontSize: 16
    },
    text0: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 10
    },
    image0: {
        width: 20,
        height: 20
    },
});






