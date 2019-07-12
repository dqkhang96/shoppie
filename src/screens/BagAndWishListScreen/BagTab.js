import React from 'react'
import { View, ScrollView, TextInput, Text } from 'react-native'
import BagItem from './BagItem'
import Icons from '../../../res/icons'
import { Size} from '../../theme/sizes'
import ButtonGradient from '../../components/ButtonGradient';
import CheckDelivery from '../../components/CheckDelivery'
import {withNavigation} from 'react-navigation'
import styles from '../../theme/screens/BagAndWishListScreen/BagTab'
import Color from '../../theme/colors';
import {connect} from 'react-redux';
import CustomI18n from '../../util/i18n'

 class BagTab extends React.Component {

    _renderCoupons() {
        return (
            <View style={styles.coupons}>
                <Text style={styles.titleCoupons}>{CustomI18n.t("BagAndWishListScreen").coupons}</Text>
                <View style={styles.inputViewCoupons}>
                    <View style={styles.iconPercel}>
                        <Icons.Percel with={Size.Icon.width} height={Size.Icon.height} fill="gray" />
                    </View>
                    <TextInput style={styles.inputCoupons} placeholder={CustomI18n.t("BagAndWishListScreen").enterCoupon} />
                    <ButtonGradient style={styles.buttonCoupons} title={CustomI18n.t("BagAndWishListScreen").apply.toUpperCase()} fromColor="#00BBE1" toColor="#08D6CC" />
                </View>
            </View>
        )

    }

    _renderOrderSummary(){
        return(
            <View style={styles.orderSummaryContainer}>  
                <Text style={styles.orderSummaryTitle}>{CustomI18n.t("BagAndWishListScreen").orderSummary}</Text>
                <View style={styles.orderSummaryContent}>
                    <View style={styles.orderSummaryItem}>
                        <Text style={styles.summaryTitle}>{CustomI18n.t("BagAndWishListScreen").subTotal}</Text>
                        <Text style={styles.summaryValue}>Rs. 5700</Text>
                    </View>
                    <View style={styles.devideDash}/>
                    <View style={styles.orderSummaryItem}>
                        <Text style={styles.summaryTitle}>{CustomI18n.t("BagAndWishListScreen").deliveryCharges}</Text>
                        <Text style={styles.summaryValue}>{CustomI18n.t("BagAndWishListScreen").free}</Text>
                    </View>
                    <View style={styles.devideDash}/>
                    <View style={styles.orderSummaryItem}>
                        <Text style={styles.summaryTitle}>{CustomI18n.t("BagAndWishListScreen").totalPayableAmount}</Text>
                        <Text style={styles.summaryValue}>Rs. 5700</Text>
                    </View>
                </View>
            </View>
        )
    }
    render() {
        return (<View style={styles.container}>
            <ScrollView>
                {this.props.cart.map((product,key)=><BagItem product={product} key={key}></BagItem>)}
                {this._renderCoupons()}
                <CheckDelivery />
                <View style={styles.gift}>
                    <View style={styles.giftContent}>
                        <Icons.Gift width={Size.Icon.width} height={Size.Icon.height} fill="#cccccc" />
                        <Text style={styles.giftText}>{CustomI18n.t("BagAndWishListScreen").gift}</Text>
                    </View>
                    <View style={styles.goGift}>
                        <Icons.Right width={Size.Icon.width} height={Size.Icon.height} fill="black" />
                    </View>
                </View>
                {this._renderOrderSummary()}
            </ScrollView>
            <View style={styles.viewPlaceOrder}>
                <View style={styles.totalPriceOrder}><Text style={styles.textTotalPriceOrder}>Rs .5700</Text></View>
                <ButtonGradient style={styles.buttonPlaceOrder} 
                        fromColor={Color.Button.PrimaryGradient.fromColor} 
                        toColor={Color.Button.PrimaryGradient.toColor} title={CustomI18n.t("BagAndWishListScreen").placeOrder}
                onPress={()=>this.props.navigation.navigate('Payment')}/>
            </View>
        </View>)
    }
}
const mapStateToProp=(state)=>{
 return {cart :state.cart}
}
export default connect(mapStateToProp)(withNavigation(BagTab))
