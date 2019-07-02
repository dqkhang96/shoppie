import React, { Component } from 'react'
import {TouchableOpacity,Text,View} from 'react-native'
export default class WishlistScreen extends Component {
    render() {
        return (
            <View style={{flex:1,padding:20}}>
                <View style={{flexDirection:'row',}}>
                    <View style={{height:150,width:'30%',backgroundColor:'green',marginRight:15}}></View>
                    <View style={{height:150}}> 
                        <Text style={{fontWeight:'bold'}}>LAWMAN</Text>
                        <Text>ABCXYsdsdfhsdfjh</Text>
                        <View style={{flexDirection:'row',width:'70%'}}>
                            <Text>Rs.2100</Text>
                            <Text style={{textDecorationLine:'line-through',marginLeft:10}}>Rs.5900</Text>
                            <Text style={{color:'#08D6CC',marginLeft:10}}>65 % off</Text>
                        </View>
                    </View>
                </View>
                <View style={{height:0,width:'100%',borderBottomWidth:0.8,borderColor:'#eaeaea',marginTop:5}}></View>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                    <TouchableOpacity><Text>Remove</Text></TouchableOpacity>
                    <Text>|</Text>
                    <TouchableOpacity><Text style={{color:'#08D6CC'}}>Move to Bag</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}
