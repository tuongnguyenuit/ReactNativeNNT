import React, { Component } from 'react';       //imrc
import { View, Image, StyleSheet } from 'react-native';      //imrn
import { TabNavigator, StackNavigator } from 'react-navigation';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';

import Header from './Header';
// import ProductDetail from '../Shop/ProductDetail/ProductDetail';

import homeIcon from '../../../media/appIcon/home0.png';
import homeIconS from '../../../media/appIcon/home.png';
import cartIcon from '../../../media/appIcon/cart0.png';
import cartIconS from '../../../media/appIcon/cart.png';
import searcIcon from '../../../media/appIcon/search0.png';
import searchIconS from '../../../media/appIcon/search.png';
import contactIcon from '../../../media/appIcon/contact0.png';
import contactIconS from '../../../media/appIcon/contact.png';


export default class Shop extends Component {                      //ccs

    // constructor(props) {
    //     super(props);
    //     this.state = { 
    //         types: []
    //     };
    // }

    // componentDidMount() {
    //     fetch('http://192.168.0.23/api/')
    //     .then(res => res.json())
    //     .then(resJSON => {
    //         const { type } = resJSON;
    //         this.setState({ types: type });
    //     });
    // }

    render() {
        // const { types } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <Header onOpen={() => { this.props.navigation.navigate('ManHinh_Menu') }}  />

                <Tabs />
            </View>
        );
    }
};





//Tabbar Navigator
export const Tabs = TabNavigator({            //Tabbar là dạng TabNabigator dùng để quản lý các danh sách giao diện
    Home_Tabs: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'HOME',
            tabBarIcon: ({ focused }) => (                                     //Lưu ý nhớ đây là hàm set icon khi được active và inactive
                focused
                    ? <Image source={homeIconS} style={styles.iconStyle} />     //Set image icon khi active
                    : <Image source={homeIcon} style={styles.iconStyle} />      //Set image icon khi inactive
            )
        }
    },
    Cart_Tabs: {
        screen: Cart,
        navigationOptions: {
            tabBarLabel: 'CART',
            tabBarIcon: ({ focused }) => (                                     //Lưu ý nhớ đây là hàm set icon khi được active và inactive
                focused
                    ? <Image source={cartIconS} style={styles.iconStyle} />
                    : <Image source={cartIcon} style={styles.iconStyle} />
            )
        }
    },
    Search_Tabs: {
        screen: Search,
        navigationOptions: {
            tabBarLabel: 'SEARCH',
            tabBarIcon: ({ focused }) => (                                     //Lưu ý nhớ đây là hàm set icon khi được active và inactive
                focused
                    ? <Image source={searchIconS} style={styles.iconStyle} />
                    : <Image source={searcIcon} style={styles.iconStyle} />
            )
        }
    },
    Contact_Tabs: {
        screen: Contact,
        navigationOptions: {
            tabBarLabel: 'Contact',
            tabBarIcon: ({ focused }) => (                                     //Lưu ý nhớ đây là hàm set icon khi được active và inactive
                focused
                    ? <Image source={contactIconS} style={styles.iconStyle} /> 
                    : <Image source={contactIcon} style={styles.iconStyle} />
            )
        }
    },

},
    {
        tabBarPosition: 'bottom',                   //thuộc tính xét vị trí thanh Tabbar
        tabBarOptions: {                            //hàm tùy chỉnh các thuộc tính của Tabbar
            style: {
                backgroundColor: '#fff'
            },
            activeTintColor: '#34B089',                //set màu cho TabBar khi active
            // inactiveTintColor: 'black',
            showIcon: true,
            showLabel:false,                            //Ẩn label của Tabbar
            tabStyle: {
                height: 50,
            },
            // labelStyle: {
            //     fontSize: 12,
            // },
        },
        swipeEnabled: true                           //thuộc tính cho phép lướt màn hình để chuyển Tabbar, mặc định trong Android là true rồi
    });



//Style
const styles = StyleSheet.create({
    iconStyle: {
        width: 30,
        height: 30
    }
});

