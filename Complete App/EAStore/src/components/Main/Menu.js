import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, TextInput, Dimensions } from 'react-native';


import metro from '../../media/appIcon/metro.png';
import thanksImage from '../../media/appIcon/thanksImage.png';

const { width } = Dimensions.get('window');
const widthImage = width - 80;
const heightImage = (widthImage * 256) / 306;

export default class Menu extends Component {
    render() {
        const {
            row1, iconStyle, container, inputStyle, viewText, controlStyle, signInStyle
        } = styles;

        return (
            <View style={container}>

                <View style={row1}>
                    <Image source={thanksImage} style={iconStyle} />
                </View>

                <View style={viewText}>
                    <Text style={inputStyle}>Thank You for Using Our Application</Text>
                    <Text style={inputStyle}>Hopefully Our Application make You</Text>
                    <Text style={inputStyle}>Many Interesting Things</Text>
                    <Text>------------------------------</Text>
                    <Text style={inputStyle}>- Please support our next product -</Text>
                </View>

                <View />
                <View />
                <View style={controlStyle}>
                    <TouchableOpacity onPress={() => { this.props.navigation.goBack()} }>
                        <Text style={signInStyle}>BACK TO APP</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}


//style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#81def5',
        padding: 20,
        justifyContent: 'space-between'
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 70,
        paddingLeft: 20
    },
    iconStyle: {
        width: widthImage,
        height: heightImage
    },
    inputStyle: {
        height: 30,
    },
    viewText: {
        backgroundColor: '#a2e7f8',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    controlStyle: {
        // alignSelf: 'stretch',
        alignItems: 'center'
    },
    signInStyle: {
        backgroundColor: '#2d71b1',
        // flex: 1,
        // alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 30,
        paddingLeft: 80,
        paddingRight: 80
        // justifyContent: 'space-between'

    },
});








// import React, { Component } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


// // import global from '../global';
// import profileIcon from '../../media/temp/profile.png';
// // import saveToken from '../../api/saveToken';


// class Menu extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { user: true };                    //gán trạng thái là null
//         // global.onSignIn = this.onSignIn.bind(this);
//     }

//     //hàm xét trạng thái user
//     onSignIn(user) {
//         this.setState({ user });
//     }

//     onSignOut(user) {
//         this.setState({ user: null });
//         // saveToken('');
//     }


//     render() {
//         const { 
//             container, profile, btnStyle, btnText, 
//             btnSignInStyle, btnTextSignIn, loginContainer,
//             username
//         } = styles;

//         const { user } = this.state;


//         const logoutJSX = (
//             <View style={{ flex: 1 }}>
//                 <TouchableOpacity style={btnStyle} onPress={() => { this.props.navigation.navigate('ManHinh_SignIn') }}>
//                     <Text style={btnText}>Sign In</Text>
//                 </TouchableOpacity>
//             </View>
//         );


//         const loginJSX = (
//             <View style={loginContainer}>
//                 <Text style={username}>Nguyen Ngoc Tuong</Text>
//                 <View>
//                     <TouchableOpacity style={btnSignInStyle} 
//                         onPress={() => { this.props.navigation.navigate('ManHinh_OrderHistory') }}
//                     >
//                         <Text style={btnTextSignIn}>Order History</Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity style={btnSignInStyle} 
//                         onPress={() => { this.props.navigation.navigate('ManHinh_ChangeInfo') }}
//                     >
//                         <Text style={btnTextSignIn}>Change Info</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={btnSignInStyle} 
//                         onPress={this.props.onSignOut}
//                     >
//                         <Text style={btnTextSignIn}>Sign out</Text>
//                     </TouchableOpacity>
//                 </View>
//                 <View />
//             </View>
//         );


//         const mainJSX = this.state.user ? loginJSX : logoutJSX;

//         return (
//             <View style={container}>
//                 <Image source={profileIcon} style={profile} />
//                 { mainJSX }
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#34B089',
//         borderRightWidth: 3,
//         borderColor: '#fff',
//         alignItems: 'center'
//     },
//     profile: {
//         width: 120,
//         height: 120,
//         borderRadius: 60,
//         marginVertical: 30
//     },
//     btnStyle: {
//         height: 50,
//         backgroundColor: '#fff',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 5,
//         paddingHorizontal: 70
//     },
//     btnText: {
//         color: '#34B089',
//         fontFamily: 'Avenir', 
//         fontSize: 20
//     },
//     btnSignInStyle: {
//         height: 50,
//         backgroundColor: '#fff',
//         borderRadius: 5,
//         width: 200,
//         marginBottom: 10,
//         justifyContent: 'center',
//         paddingLeft: 10
//     },
//     btnTextSignIn: {
//         color: '#34B089',
//         fontSize: 15
//     },
//     loginContainer: {
//         flex: 1, 
//         justifyContent: 'space-between', 
//         alignItems: 'center'
//     },
//     username: {
//         color: '#fff', 
//         fontFamily: 'Avenir', 
//         fontSize: 15
//     }
// });

// export default Menu;
