import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Alert, Image ,LayoutAnimation} from 'react-native'
import { removeLikeProduct, addToCart } from '../../redux/actions'
import { connect } from 'react-redux';
import CustomI18n from '../../util/i18n'
import styles from '../../theme/screens/BagAndWishListScreen/Wishlist'
import {animationChangeListProduct} from '../../util/constants'

class Wishlist extends Component {
    render() {
        const { product } = this.props
        return (
            <View style={styles.container}>
                <View style={ styles.content}>
                    <Image style={styles.image}
                        source={{ uri: this.props.product.urlImage }}
                    ></Image>
                    <View style={styles.infor}>
                        <Text style={styles.title}>{this.props.product.name}</Text>
                        <Text style={styles.name}>Men’s Slim Fit Printed jacket</Text>
                        <View style={styles.viewPrice}>
                            <Text style={styles.price}>Rs 2,100</Text>
                            <Text style={styles.rootPrice}>Rs 5,900</Text>
                            <Text style={styles.saleOff}>65% off</Text>
                        </View>
                        <Text style={{ alignSelf:'flex-end' }}>Typically shipps within 3-5 working days</Text>
                    </View>
                </View>
                <View style={styles.devideHorizontal}></View>
                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={() => this.props.remove(product.id)}
                    ><Text style={styles.remove}>{CustomI18n.t("BagAndWishListScreen").remove}</Text></TouchableOpacity>
                    <View style={styles.devideVertical}/>
                    <TouchableOpacity
                        onPress={() => {
                            if(this.props.cart.find(pr=>pr.id===this.props.product.id))
                                Alert.alert(CustomI18n.t('title').alert,CustomI18n.t('message').productIsInBag)
                            else{
                                this.props.addToCart(this.props.product)
                                this.props.moveToBag()
                                this.props.remove(this.props.product.id)
                            }
                        }}
                    ><Text style={styles.moveToBag}>{CustomI18n.t("BagAndWishListScreen").moveToBag}</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        remove: (id) => { 
            dispatch(removeLikeProduct(id)) 
            LayoutAnimation.configureNext(animationChangeListProduct)
        },
        addToCart: (product) => {
            dispatch(addToCart(product))
            LayoutAnimation.configureNext(animationChangeListProduct)
        }
    }
}
const mapStateToProps= state=>({
    cart:state.cart
})
export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)