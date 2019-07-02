import React, { Component } from 'react';
import {
  Text, View, Image, TouchableHighlight,Dimensions
} from 'react-native';
import HeaderComponent from './HeaderComponent';
import Ionicons from 'react-native-vector-icons/Ionicons'
export default class WithdrawalComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    let drawerLabel =() => null
    let drawerIcon = () => null
    return { drawerLabel, drawerIcon };
  }
  
  render() {
    return (
      <View style={{flex:1, flexDirection: 'column' }}>
        <HeaderComponent {...this.props} />
        <View style={{
        flex: 1,
        backgroundColor: '#964f8e',
        alignItems: 'center',
        justifyContent: 'center'
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>This is Withdrawal Component</Text>
      </View>
      </View>
    );
  }
}