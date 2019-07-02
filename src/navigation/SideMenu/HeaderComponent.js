import React, { Component } from 'react';
import {
  Text, View, Image, TouchableHighlight, Alert
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { DrawerActions,withNavigation } from 'react-navigation';


 class HeaderComponent extends Component {
  render() {
    return (
      <View style={{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:"#FFFFFF"
        }}
      >
        <TouchableHighlight
          style={{ marginLeft: 10, marginTop: 10 }}
          onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Ionicons 
                   name="ios-menu"
                   size={30}
                   color={'#B8B8B8'}>
                 </Ionicons>
        </TouchableHighlight>
      </View>
    );
  }
}
export default withNavigation(HeaderComponent)