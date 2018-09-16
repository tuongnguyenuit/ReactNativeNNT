import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ListProductSpring from '../ListProduct/ListProductSpring';
import ListProductSummer from '../ListProduct/ListProductSummer';
import ListProductAutumn from '../ListProduct/ListProductAutumn';
import ListProductWinter from '../ListProduct/ListProductWinter';
import ListSaleProduct from '../ListProduct/ListSaleProduct';
import ListTopProduct from '../ListProduct/ListTopProduct';
import NewFashion from '../NewFashion';
import ProductDetail from '../ProductDetail/ProductDetail';
import DetailNewFashion from '../ProductDetail/DetailNewFashion';
import Category from './Category';

import topsp1 from '../../../../media/temp/sp1.jpeg';
import topsp2 from '../../../../media/temp/sp2.jpeg';
import topsp3 from '../../../../media/temp/sp3.jpeg';


import salesp1 from '../../../../media/image/saleOff/1.jpg';
import salesp2 from '../../../../media/image/saleOff/2.jpg';
import salesp3 from '../../../../media/image/saleOff/3.jpg';

import newsp1 from '../../../../media/image/newFashion/1.jpg';
import newsp2 from '../../../../media/image/newFashion/2.jpg';
import newsp3 from '../../../../media/image/newFashion/3.jpg';

import springsp1 from '../../../../media/temp/spring1.jpg';
import springsp2 from '../../../../media/temp/spring2.jpg';
import springsp3 from '../../../../media/temp/spring3.jpg';

import summersp1 from '../../../../media/temp/summer1.jpg';
import summersp2 from '../../../../media/temp/summer2.jpg';
import summersp3 from '../../../../media/temp/summer3.jpg';

import autumnsp1 from '../../../../media/temp/autumn1.jpg';
import autumnsp2 from '../../../../media/temp/autumn2.jpg';
import autumnsp3 from '../../../../media/temp/autumn3.jpg';

import wintersp1 from '../../../../media/temp/winter1.jpg';
import wintersp2 from '../../../../media/temp/winter2.jpg';
import wintersp3 from '../../../../media/temp/winter3.jpg';

import viewall from '../../../../media/appIcon/viewall.png';



const { width, height } = Dimensions.get('window');
const productWidth = (width - 50) / 3;
const productHeight = (productWidth * 452) / 361;

//kích thước ảnh 361x452

export default class Cart extends Component {
    render() {
        return (
            <CartStack />
        );
    }
}


class CartView extends Component {
    render() {
        const {
            container, header, backStyle, titleStyle,
            body, productContainer, productImage, productPricePercent,
            productName, productPrice, textFooter, productPriceSale,
            body0, productImage0, text0, image0
        } = styles;

        return (
            <ScrollView style={{ backgroundColor: '#fff' }}>
                <View style={container}>
                    <View style={header}>
                        <Text style={titleStyle}>CATEGORY</Text>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('Category_Stack') }}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={titleStyle}>View all</Text>
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
                                <Image source={topsp2} style={productImage0} />
                                <Text style={text0}>Top Product</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Sale_Stack') }}>
                            <View style={{ padding: 10 }}>
                                <Image source={salesp1} style={productImage0} />
                                <Text style={text0}>Sale Product</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Spring_Stack') }}>
                            <View style={{ padding: 10 }}>
                                <Image source={springsp1} style={productImage0} />
                                <Text style={text0}>Spring Product</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>






                <View style={container}>
                    <View style={header}>
                        <Text style={titleStyle}>NEW FASHION</Text>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('New_Stack') }}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={titleStyle}>View all</Text>
                                <Image source={viewall} style={image0} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={body}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_DetailNewFashion') }} style={productContainer}>
                            <Image source={newsp1} style={productImage} />
                            <Text style={productName}>80s Sporty</Text>
                            <Text style={productPrice}>teenvogue.com</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_DetailNewFashion') }} style={productContainer}>
                            <Image source={newsp2} style={productImage} />
                            <Text style={productName}>Originals</Text>
                            <Text style={productPrice}>ssense.com</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_DetailNewFashion') }} style={productContainer}>
                            <Image source={newsp3} style={productImage} />
                            <Text style={productName}>Bustiers</Text>
                            <Text style={productPrice}>teenvogue.com</Text>
                        </TouchableOpacity>
                    </View>

                </View>




                <View style={container}>
                    <View style={header}>
                        <Text style={titleStyle}>TOP PRODUCT</Text>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('Top_Stack') }}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={titleStyle}>View all</Text>
                                <Image source={viewall} style={image0} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={body}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                            <Image source={topsp1} style={productImage} />
                            <Text style={productName}>Dress Speel</Text>
                            <Text style={productPrice}>250$</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                            <Image source={topsp2} style={productImage} />
                            <Text style={productName}>Jean Woman</Text>
                            <Text style={productPrice}>200$</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                            <Image source={topsp3} style={productImage} />
                            <Text style={productName}>Hotfashion</Text>
                            <Text style={productPrice}>150$</Text>
                        </TouchableOpacity>
                    </View>
                </View>




                <View style={container}>
                    <View style={header}>
                        <Text style={titleStyle}>SALE PRODUCT</Text>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('Sale_Stack') }}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={titleStyle}>View all</Text>
                                <Image source={viewall} style={image0} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={body}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                            <Image source={salesp1} style={productImage} />
                            <Text style={productName}>Layered Tees</Text>
                            <Text style={productPriceSale}>Sale 30%</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={productPricePercent}>250$</Text>
                                <Text style={productPrice}>375$</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                            <Image source={salesp2} style={productImage} />
                            <Text style={productName}>Knowlita New</Text>
                            <Text style={productPriceSale}>Sale 30%</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={productPricePercent}>250$</Text>
                                <Text style={productPrice}>375$</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                            <Image source={salesp3} style={productImage} />
                            <Text style={productName}>Statement</Text>
                            <Text style={productPriceSale}>Sale 30%</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={productPricePercent}>250$</Text>
                                <Text style={productPrice}>375$</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>



                <View style={container}>
                    <View style={header}>
                        <Text style={titleStyle}>SPRING PRODUCT</Text>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('Spring_Stack') }}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={titleStyle}>View all</Text>
                                <Image source={viewall} style={image0} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={body}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                            <Image source={springsp1} style={productImage} />
                            <Text style={productName}>Sleeve Si</Text>
                            <Text style={productPrice}>250$</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                            <Image source={springsp2} style={productImage} />
                            <Text style={productName}>Jacket Hand</Text>
                            <Text style={productPrice}>200$</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                            <Image source={springsp3} style={productImage} />
                            <Text style={productName}>Dress Sleeve</Text>
                            <Text style={productPrice}>180$</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={container}>
                    <View style={header}>
                        <Text style={titleStyle}>SUMMER PRODUCT</Text>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('Summer_Stack') }}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={titleStyle}>View all</Text>
                                <Image source={viewall} style={image0} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={body}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                            <Image source={summersp1} style={productImage} />
                            <Text style={productName}>Simple Jean</Text>
                            <Text style={productPrice}>350$</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                            <Image source={summersp2} style={productImage} />
                            <Text style={productName}>Jacket Love</Text>
                            <Text style={productPrice}>230$</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                            <Image source={summersp3} style={productImage} />
                            <Text style={productName}>Dress Silver</Text>
                            <Text style={productPrice}>350$</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={container}>
                    <View style={header}>
                        <Text style={titleStyle}>AUTUMN PRODUCT</Text>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('Autumn_Stack') }}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={titleStyle}>View all</Text>
                                <Image source={viewall} style={image0} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={body}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                            <Image source={autumnsp1} style={productImage} />
                            <Text style={productName}>Autumn Spean</Text>
                            <Text style={productPrice}>200$</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                            <Image source={autumnsp2} style={productImage} />
                            <Text style={productName}>Dress Heal</Text>
                            <Text style={productPrice}>220$</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                            <Image source={autumnsp3} style={productImage} />
                            <Text style={productName}>Team fashion</Text>
                            <Text style={productPrice}>210$</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={container}>
                    <View style={header}>
                        <Text style={titleStyle}>WINTER PRODUCT</Text>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate('Winter_Stack') }}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={titleStyle}>View all</Text>
                                <Image source={viewall} style={image0} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={body}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                            <Image source={wintersp1} style={productImage} />
                            <Text style={productName}>Dress Winter</Text>
                            <Text style={productPrice}>350$</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                            <Image source={wintersp2} style={productImage} />
                            <Text style={productName}>Jean Green</Text>
                            <Text style={productPrice}>280$</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }} style={productContainer}>
                            <Image source={wintersp3} style={productImage} />
                            <Text style={productName}>White Jacket</Text>
                            <Text style={productPrice}>250$</Text>
                        </TouchableOpacity>
                    </View>
                </View>





            </ScrollView>
        );
    }
}



//Stack Navigator
export const CartStack = StackNavigator({
    Cart_Stack: {
        screen: CartView
    },
    Spring_Stack: {
        screen: ListProductSpring
    },
    Summer_Stack: {
        screen: ListProductSummer
    },
    Autumn_Stack: {
        screen: ListProductAutumn
    },
    Winter_Stack: {
        screen: ListProductWinter
    },
    Sale_Stack: {
        screen: ListSaleProduct
    },
    Top_Stack: {
        screen: ListTopProduct
    },
    New_Stack: {
        screen: NewFashion
    },
    Category_Stack: {
        screen: Category
    },
    ManHinh_ProductDetail: {
        screen: ProductDetail
    },
    ManHinh_DetailNewFashion: {
        screen: DetailNewFashion
    }
},
    {
        headerMode: 'none'
    }
);




const styles = StyleSheet.create({
    container: {
        // height: height * 0.6,
        // backgroundColor: '#93d4f8',
        backgroundColor: '#b1b1b1',
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
    body0: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // flexWrap: 'wrap',
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
    productImage0: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    productName: {
        paddingLeft: 10,
        fontFamily: 'sans-serif',
        color: '#662F90',
        fontWeight: '300',
        paddingTop: 5,
    },
    productPrice: {
        paddingLeft: 10,
        fontFamily: 'sans-serif',
        color: 'red',
        fontSize: 12
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
        paddingRight: 10,
        alignItems: 'center'
    },
    backStyle: {
        width: 30,
        height: 30,
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
    productPriceSale: {
        paddingLeft: 15,
        fontFamily: 'sans-serif',
        color: 'red',
        fontSize: 12
    },
    productPricePercent: {
        paddingLeft: 15,
        fontFamily: 'sans-serif',
        color: '#630ee4',
        fontSize: 12
    },
});














// import React, { Component } from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import { TabNavigator } from 'react-navigation';

// import NewFashion from '../../Shop/NewFashion';
// import ListProductSpring from '../ListProduct/ListProductSpring';
// import ListTopProduct from '../ListProduct/ListTopProduct';
// import ListSaleProduct from '../ListProduct/ListSaleProduct';

// import homeIcon from '../../../../media/appIcon/home0.png';
// import homeIconS from '../../../../media/appIcon/home.png';
// import cartIcon from '../../../../media/appIcon/cart0.png';
// import cartIconS from '../../../../media/appIcon/cart.png';
// import searcIcon from '../../../../media/appIcon/search0.png';
// import searchIconS from '../../../../media/appIcon/search.png';
// import contactIcon from '../../../../media/appIcon/contact0.png';
// import contactIconS from '../../../../media/appIcon/contact.png';

// export default class Cart extends Component {
//     render() {
//         return (
//             <View style={{ flex: 1}}>
//                 <CartNavigator />
//             </View>
//         );
//     }
// }


// //Tabbar Navigator
// export const CartNavigator = TabNavigator({            //Tabbar là dạng TabNabigator dùng để quản lý các danh sách giao diện
//     New_Tab: {
//         screen: NewFashion,
//         navigationOptions: {
//             tabBarLabel: 'NEW',
//             tabBarIcon: ({ focused }) => (                                     //Lưu ý nhớ đây là hàm set icon khi được active và inactive
//                 focused
//                     ? <Image source={homeIconS} style={styles.iconStyle} />     //Set image icon khi active
//                     : <Image source={homeIcon} style={styles.iconStyle} />      //Set image icon khi inactive
//             )
//         }
//     },
//     Spring_Tab: {
//         screen: ListProductSpring,
//         navigationOptions: {
//             tabBarLabel: 'SPRING',
//             tabBarIcon: ({ focused }) => (                                     //Lưu ý nhớ đây là hàm set icon khi được active và inactive
//                 focused
//                     ? <Image source={cartIconS} style={styles.iconStyle} />
//                     : <Image source={cartIcon} style={styles.iconStyle} />
//             )
//         }
//     },
//     Top_Tab: {
//         screen: ListTopProduct,
//         navigationOptions: {
//             tabBarLabel: 'TOP',
//             tabBarIcon: ({ focused }) => (                                     //Lưu ý nhớ đây là hàm set icon khi được active và inactive
//                 focused
//                     ? <Image source={searchIconS} style={styles.iconStyle} />
//                     : <Image source={searcIcon} style={styles.iconStyle} />
//             )
//         }
//     },
//     Sale_Tab: {
//         screen: ListSaleProduct,
//         navigationOptions: {
//             tabBarLabel: 'Sale',
//             tabBarIcon: ({ focused }) => (                                     //Lưu ý nhớ đây là hàm set icon khi được active và inactive
//                 focused
//                     ? <Image source={contactIconS} style={styles.iconStyle} /> 
//                     : <Image source={contactIcon} style={styles.iconStyle} />
//             )
//         }
//     },

// },
//     {
//         tabBarPosition: 'top',                   //thuộc tính xét vị trí thanh Tabbar
//         tabBarOptions: {                            //hàm tùy chỉnh các thuộc tính của Tabbar
//             style: {
//                 backgroundColor: '#fff'
//             },
//             activeTintColor: '#34B089',                //set màu cho TabBar khi active
//             // inactiveTintColor: 'black',
//             showIcon: true,
//             showLabel:false,                            //Ẩn label của Tabbar
//             tabStyle: {
//                 height: 50,
//             },
//             // labelStyle: {
//             //     fontSize: 12,
//             // },
//         },
//         swipeEnabled: true                           //thuộc tính cho phép lướt màn hình để chuyển Tabbar, mặc định trong Android là true rồi
//     });


//     //Style
// const styles = StyleSheet.create({
//     iconStyle: {
//         width: 30,
//         height: 30
//     }
// });

