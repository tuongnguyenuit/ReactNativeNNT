import React, { Component } from 'react';       //imrc
import { ScrollView } from 'react-native';      //imrn

import { StackNavigator } from 'react-navigation';      //imrn


import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';
import SaleOff from './SaleOff';
import ListProduct from '../ListProduct/ListProduct';
import ProductDetail from '../ProductDetail/ProductDetail';
import NewFashion from '../NewFashion';
import ListProductSpring from '../ListProduct/ListProductSpring';
import ListProductSummer from '../ListProduct/ListProductSummer';
import ListProductAutumn from '../ListProduct/ListProductAutumn';
import ListProductWinter from '../ListProduct/ListProductWinter';
import ListTopProduct from '../ListProduct/ListTopProduct';
import ListSaleProduct from '../ListProduct/ListSaleProduct';
import DetailNewFashion from '../ProductDetail/DetailNewFashion';
import Search from '../Search/Search';




export default class Home extends Component {                      //ccs
    render() {
        // const { types } = this.props;
        return (
            <HomeStack />
        );

    }
};


class HomeView extends Component {                      //ccs
    render() {
        // const { types } = this.props;
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Collection onOpen={() => { this.props.navigation.navigate('ManHinh_NewFashion') }} />
                <Category
                    onOpenListSpring={() => { this.props.navigation.navigate('ManHinh_ListProductSpring') }}
                    onOpenListSummer={() => { this.props.navigation.navigate('ManHinh_ListProductSummer') }}
                    onOpenListAutumn={() => { this.props.navigation.navigate('ManHinh_ListProductAutumn') }}
                    onOpenListWinter={() => { this.props.navigation.navigate('ManHinh_ListProductWinter') }}
                />
                <TopProduct
                    onOpenDetail={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }}
                    onOpenListTopProduct={() => { this.props.navigation.navigate('ManHinh_ListTopProduct') }}
                />
                <SaleOff
                    onOpenDetail={() => { this.props.navigation.navigate('ManHinh_ProductDetail') }}
                    onOpenListSaleProduct={() => { this.props.navigation.navigate('ManHinh_ListSaleProduct') }}
                />
            </ScrollView>
        );

    }
};



export const HomeStack = StackNavigator({               //Router dùng để quản lý điều hướng và HomeStack là quản lý danh sách các màn hỉnh của Stack đó
    ManHinh_Home: {                                      //Và HomeStack được gọi ra trong App.js để chạy
        screen: HomeView,
        navigationOptions: {
            title: 'Home'
        }
    },
    ManHinh_ListProduct: {
        screen: ListProduct,
        navigationOptions: {
            title: 'ListProduct'
        }
    },
    ManHinh_ListProductSpring: {
        screen: ListProductSpring,
        navigationOptions: {
            title: 'ListProductSpring'
        }
    },
    ManHinh_ListProductSummer: {
        screen: ListProductSummer,
        navigationOptions: {
            title: 'ListProductSummer'
        }
    },
    ManHinh_ListProductAutumn: {
        screen: ListProductAutumn,
        navigationOptions: {
            title: 'ListProductAutumn'
        }
    },
    ManHinh_ListProductWinter: {
        screen: ListProductWinter,
        navigationOptions: {
            title: 'ListProductWinter'
        }
    },
    ManHinh_ListTopProduct: {
        screen: ListTopProduct,
        navigationOptions: {
            title: 'ListTopProduct'
        }
    },
    ManHinh_ProductDetail: {
        screen: ProductDetail,
        navigationOptions: {
            title: 'ProductDetail'
        }
    },
    ManHinh_ListSaleProduct: {
        screen: ListSaleProduct,
        navigationOptions: {
            title: 'ProductDetail'
        }
    },
    ManHinh_NewFashion: {
        screen: NewFashion,
    },
    ManHinh_DetailNewFashion: {
        screen: DetailNewFashion,
    },
    ManHinh_Search: {
        screen: Search,
    }
},
    {
        headerMode: 'none'
    }
);


//header...



