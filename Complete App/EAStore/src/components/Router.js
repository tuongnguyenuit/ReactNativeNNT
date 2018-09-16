import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

// import Authentication from './Authentication/Authentication';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';
import ChangeInfo from './ChangeInfo/ChangeInfo';

import Shop from './Main/Shop/Shop';
import Menu from './Main/Menu';
import SignIn from './Authentication/SignIn';
import SignUp from './Authentication/SignUp';
import metroScreen from './metroScreen';


// import Home from './Main/Shop/Home/Home';
// import Contact from './Main/Shop/Contact/Contact';
// import Cart from './Main/Shop/Cart/Cart';
// import Search from './Main/Shop/Search/Search';




// export const HomeStack = StackNavigator({               //Router dùng để quản lý điều hướng và HomeStack là quản lý danh sách các màn hỉnh của Stack đó
//     ManHinh_Main: {                                      //Và HomeStack được gọi ra trong App.js để chạy
//         screen: Main,
//         navigationOptions: {
//             title: 'Main Component'
//         }
//     },
//     ManHinh_Authentication: {
//         screen: Authentication,
//         navigationOptions: {
//             title: 'Authentication'
//         }
//     },
//     ManHinh_ChangeInfo: {
//         screen: ChangeInfo,
//         navigationOptions: {
//             title: 'ChangeInfo'
//         }
//     },
//     ManHinh_OrderHistory: {
//         screen: OrderHistory,
//         navigationOptions: {
//             title: 'OrderHistory'
//         }
//     }
// });



//  export const Tabs = TabNavigator({            //Tabbar là dạng TabNabigator dùng để quản lý các danh sách giao diện
//     Home_Tabs: {
//         screen: Home,
//         navigationOptions: {
//             tabBarLabel: 'HOME'
//         }
//     },
//     TCart_Tabs: {
//         screen: Cart,
//         navigationOptions: {
//             tabBarLabel: 'CART'
//         }
//     },
//     Search_Tabs: {
//         screen: Search,
//         navigationOptions: {
//             tabBarLabel: 'SEARCH'
//         }
//     },
//     Contact_Tabs: {
//         screen: Contact,
//         navigationOptions: {
//             tabBarLabel: 'Contact'
//         }
//     },

// }, 
// { 
//     tabBarPosition: 'bottom',                   //thuộc tính xét vị trí thanh Tabbar
//     tabBarOptions: {                            //hàm tùy chỉnh các thuộc tính của Tabbar
//         style: {
//             backgroundColor: '#f00'
//         },
//         activeTintColor: 'blue',                //set màu cho TabBar khi active
//         inactiveTintColor: 'yellow'
//     },
//     swipeEnabled: true                          //thuộc tính cho phép lướt màn hình để chuyển Tabbar, mặc định trong Android là true rồi
// });




export const SlideMenu = StackNavigator({
    ManHinh_metro: {
        screen: metroScreen,
        navigationOptions: {
            title: 'metro'
        }
    },
    ManHinh_SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: 'SignIn'
        }
    },
    Tabs_Slide: {                               //Exist 1 error at Slide Menu
        screen: Shop,
        navigationOptions: {
            title: 'Back',
        }
    },
    ManHinh_Menu: {
        screen: Menu,
        navigationOptions: {
            title: 'Menu',
            
        }
    },
    ManHinh_SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: 'SignUp'
        }
    },
    ManHinh_OrderHistory: {
        screen: OrderHistory
    },
    ManHinh_ChangeInfo: {
        screen: ChangeInfo
    }
},
{
    headerMode: 'none'
});



