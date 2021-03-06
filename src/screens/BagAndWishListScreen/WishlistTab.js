import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import Wishlist from './Wishlist'
import {connect} from 'react-redux'

class WishlishTab extends Component {
    render() {
        return (
            <View style={{ flex: 1 ,backgroundColor:"#eaeaea"}}>
                <ScrollView>
                    {this.props.wishList.map((value,key)=><Wishlist key={value.id} product={value} moveToBag={this.props.moveToBag}/>)}
                </ScrollView>
            </View>
        )
    }
} 
const mapStateToProps=(state)=>{
    return{
        wishList:state.wishList
    }
}
export default connect(mapStateToProps)(WishlishTab)