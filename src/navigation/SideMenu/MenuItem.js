import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight,
} from 'react-native';
import HeaderComponent from './HeaderComponent';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ArrowRight from '../../icons/ArrowRight'
export default class MenComponent extends Component {
    render() {
        return (
            <View style={{ marginLeft: 10, flexDirection: 'row', alignItems: "center", marginTop: 12, justifyContent: "space-between",marginBottom:10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {this.props.icon}
                    <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>{this.props.label}</Text>
                </View>
        <View>{this.props.hiddenArrow?null:<ArrowRight height={20} width={20} fill={'#B8B8B8'}></ArrowRight>}</View>
            </View>
        );
    }
}