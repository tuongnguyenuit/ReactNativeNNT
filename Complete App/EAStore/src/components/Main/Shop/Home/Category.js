import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import spring from '../../../../media/temp/spring.jpg';
import summer from '../../../../media/temp/summer.jpg';
import autumn from '../../../../media/temp/autumn.jpg';
import winter from '../../../../media/temp/winter.jpg';



const { width, height } = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productHeight = productWidth;

//kích thước ảnh 361x452

export default class Category extends Component {
    render() {
        const { 
            container, titleContainer, title, 
            body, productContainer, productImage, 
            productNameSpring, productNameSummer, productNameAutumn, 
            productNameWinter, productPrice,
        } = styles;

        return (
            <View style={container}>
                <View style={ titleContainer }>
                    <Text style={ title }>SEASONAL FASHION</Text>
                </View>

                <View style={body}>
                    <TouchableOpacity onPress={this.props.onOpenListSpring} style={productContainer}>
                        <Image source={spring} style={productImage} />
                        <Text style={productNameSpring}>SPRING</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.props.onOpenListSummer} style={productContainer}>
                        <Image source={summer} style={productImage} />
                        <Text style={productNameSummer}>SUMMER</Text>
                    </TouchableOpacity>

                    <View style={{ height: 10, width}} />

                    <TouchableOpacity onPress={this.props.onOpenListAutumn} style={productContainer}>
                        <Image source={autumn} style={productImage} />
                        <Text style={productNameAutumn}>AUTUMN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.props.onOpenListWinter} style={productContainer}>
                        <Image source={winter} style={productImage} />
                        <Text style={productNameWinter}>WINTER</Text>
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
        paddingBottom: 10,
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
    productNameSpring: {
        paddingLeft: 50,
        fontFamily: 'sans-serif',
        color: '#05f518',
        fontWeight: '400',
        paddingTop: 5
    },
    productNameSummer: {
        paddingLeft: 50,
        fontFamily: 'sans-serif',
        color: '#ff3b16',
        fontWeight: '400',
        paddingTop: 5
    },
    productNameAutumn: {
        paddingLeft: 50,
        fontFamily: 'sans-serif',
        color: '#e6dc00',
        fontWeight: '400',
        paddingTop: 5
    },
    productNameWinter: {
        paddingLeft: 50,
        fontFamily: 'sans-serif',
        color: '#0808ee',
        fontWeight: '400',
        paddingTop: 5
    },
});















// import React, { Component } from 'react';
// import { Image, View, Text, StyleSheet, Dimensions } from 'react-native';
// import Swiper from 'react-native-swiper';

// import littleIcon from '../../../../media/temp/little.jpg';
// import maxiIcon from '../../../../media/temp/maxi.jpg';
// import partyIcon from '../../../../media/temp/party.jpg';
// import midiIcon from '../../../../media/temp/midi.jpg';

// const { width, height } = Dimensions.get('window');

// //Công thức tính chiều dài, rộng của Image
// const imageWidth = width - 40;
// const imageHeight = imageWidth / 2;

// //Image: 800* 400

// export default class Category extends Component {
//     render() {
//         const { wrapper, textStyle, imageStyle, cateTitle } = styles;

//         return (
//             <View style={wrapper}>                
//                 <View style={{ flex: 1, justifyContent: 'center' }}>
//                     <Text style={textStyle}>LIST OF CATEGORY</Text>                   
//                 </View>

//                 <View style={{ flex: 5 }}>
//                     <Swiper
//                         showsButtons
//                         showsPagination
//                         width={imageWidth}
//                         height={imageHeight}
//                         autoplay
//                         autoplayTimeout={2}
//                         removeClippedSubviews={false}
//                     >
//                         <Image source={littleIcon} style={imageStyle} />
//                         <Image source={midiIcon} style={imageStyle} />
//                         <Image source={maxiIcon} style={imageStyle} />
//                     </Swiper>
//                 </View>
//             </View>
//         );
//     }
// };



// //Style
// const styles = StyleSheet.create({
//     wrapper: {
//         height: height * 0.35,
//         backgroundColor: '#fff',
//         margin: 10,
//         borderRadius: 4,
//         // shadowColor: 'red',
//         // shadowOffset: { width: 10, height: 10},
//         // shadowOpacity: 1,   
//         padding: 10
//     },
//     textStyle: {
//         fontSize: 20,
//         color: '#AFAEAF',
//         paddingBottom: 10

//     },
//     imageStyle: {
//         height: imageHeight,
//         width: imageWidth,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     cateTitle: {
//         fontSize: 20,
//         fontFamily: 'sans-serif',
//         color: 'red'
//     }
// });



// //Slide Image dùng thư viện React Native Swiper
// //Cài đặt: yarn add react-native-swiper


// //<Image source={littleIcon} style={imageStyle} />

// // {/* <Text style={cateTitle}>Maxi Dress</Text> */ }
// // {/* </Image> */ }

// // <Image source={maxiIcon} style={imageStyle} />
// // {/* <Text style={cateTitle}>Maxi Dress</Text> */ }
// // {/* </Image> */ }

// // <Image source={partyIcon} style={imageStyle} />
// // {/* <Text style={cateTitle}>Maxi Dress</Text> */ }
// // {/* </Image> */ }

// // <Image source={midiIcon} style={imageStyle} />
// // {/* <Text style={cateTitle}>Maxi Dress</Text> */ }
// // {/* </Image> */ }