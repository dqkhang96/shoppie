import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import {removeLikeProduct,addToCart} from '../redux/actions'
import {connect} from 'react-redux';
 class Wishlist extends Component {
    render() {
        const { product } = this.props
        return (
            <View style={{ flex: 1, padding: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ height: 120, width: 86, backgroundColor: '#eaeaea' }}
                        source={{ uri: this.props.product.urlImage }}
                    ></Image>
                    <View style={{ marginLeft: 15, }}>
                        <Text>{this.props.product.name}</Text>
                        <Text style={{ marginTop: 5 }}>Men’s Slim Fit Printed jacket</Text>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Text>Rs 2,100</Text>
                            <Text style={{ textDecorationLine: 'line-through', marginLeft: 10 }}>Rs 5,900</Text>
                            <Text style={{ color: '#08D6CC', marginLeft: 10 }}>65% off</Text>
                        </View>
                        <Text style={{ marginTop: 20 }}>Typically shipps within 3-5 working days</Text>
                    </View>
                </View>
                <View style={{ width: '100%', borderBottomWidth: 1, borderColor: '#eaeaea', marginTop: 15 }}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                    <TouchableOpacity
                    onPress={()=>this.props.remove(product.id)}
                    ><Text>Remove</Text></TouchableOpacity>
                    <Text>|</Text>
                    <TouchableOpacity
                    onPress={()=>this.props.addToCart(this.props.product)}
                    ><Text style={{ color: '#08D6CC' }}>Move To Bag</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}
const mapDispatchToProp =(dispatch)=>{
    return {remove: (id)=>{dispatch(removeLikeProduct(id))},
            addToCart:(product)=>dispatch(addToCart(product))
}
}
export default connect (null,mapDispatchToProp)(Wishlist)