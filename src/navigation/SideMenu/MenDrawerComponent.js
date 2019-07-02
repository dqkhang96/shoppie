import React, { Component } from 'react';
import {
  Text, View, Image, TouchableHighlight,
} from 'react-native';
import HeaderComponent from './HeaderComponent';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Men from'../../icons/Men'
import MenuItem from './MenuItem'
export default class MenComponent extends Component {
  render() {
    return (
     <MenuItem icon={<Men height={20} width ={20} fill={'black'} ></Men>} label="Men" hiddenArrow={false}/>
    );
  }
}