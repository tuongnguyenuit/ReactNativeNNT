import React, { Component } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';


export default class Main extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow'}}>
				<Text>Main Component</Text> 


				<TouchableOpacity style={{ backgroundColor: 'green'}}								//TouchableOpacity dùng để tạo button click vào
					onPress={() => { this.props.navigation.navigate('ManHinh_Authentication')}}				//onPress để xử lý chuyển màn hình	.navigate() là hàm di chuyển đến một màn hình bất kỳ, truyền tham số đi
				>
				<Text style={{ color: '#fff', fontSize: 20, padding: 10}}>Go to Authentication</Text>
				</TouchableOpacity>




				<TouchableOpacity style={{ backgroundColor: 'green'}}								//TouchableOpacity dùng để tạo button click vào
					onPress={() => { this.props.navigation.navigate('ManHinh_ChangeInfo')}}				//onPress để xử lý chuyển màn hình	.navigate() là hàm di chuyển đến một màn hình bất kỳ, truyền tham số đi
				>
				<Text style={{ color: '#fff', fontSize: 20, padding: 10}}>Go to ChangeInfo</Text>
				</TouchableOpacity>




				<TouchableOpacity style={{ backgroundColor: 'green'}}								//TouchableOpacity dùng để tạo button click vào
					onPress={() => { this.props.navigation.navigate('ManHinh_OrderHistory')}}				//onPress để xử lý chuyển màn hình	.navigate() là hàm di chuyển đến một màn hình bất kỳ, truyền tham số đi
				>
				<Text style={{ color: '#fff', fontSize: 20, padding: 10}}>Go to OrderHistory</Text>
				</TouchableOpacity>

				
			</View> 
    );
  }
}



