import React from 'react'
import { View, StyleSheet, ScrollView, TextInput, Text } from 'react-native'
import BagItem from '../../components/BagItem'
import Icons from '../../../res/icons'
import { wp ,Size} from '../../theme/sizes'
import ButtonGradient from '../../components/ButtonGradient';
import CheckDelivery from '../../components/CheckDelivery'
import {withNavigation} from 'react-navigation'
import styles from '../../theme/screens/BagAndWishListScreen/BagTab'
import Color from '../../theme/colors';


 class BagTab extends React.Component {

    _renderCoupons() {
        return (
            <View style={styles.coupons}>
                <Text style={styles.titleCoupons}>Coupons</Text>
                <View style={styles.inputViewCoupons}>
                    <View style={styles.iconPercel}>
                        <Icons.Percel with={Size.Icon.width} height={Size.Icon.height} fill="gray" />
                    </View>
                    <TextInput style={styles.inputCoupons} placeholder="Enter coupon code" />
                    <ButtonGradient style={styles.buttonCoupons} title="APPLY" fromColor="#00BBE1" toColor="#08D6CC" />
                </View>
            </View>
        )

    }

    _renderOrderSummary(){
        return(
            <View style={styles.orderSummaryContainer}>  
                <Text style={styles.orderSummaryTitle}>Order Summary</Text>
                <View style={styles.orderSummaryContent}>
                    <View style={styles.orderSummaryItem}>
                        <Text style={styles.summaryTitle}>Sub Total</Text>
                        <Text style={styles.summaryValue}>Rs. 5700</Text>
                    </View>
                    <View style={styles.devideDash}/>
                    <View style={styles.orderSummaryItem}>
                        <Text style={styles.summaryTitle}>Delivery Charges</Text>
                        <Text style={styles.summaryValue}>Free</Text>
                    </View>
                    <View style={styles.devideDash}/>
                    <View style={styles.orderSummaryItem}>
                        <Text style={styles.summaryTitle}>Total Payable Amount</Text>
                        <Text style={styles.summaryValue}>Rs. 5700</Text>
                    </View>
                </View>
            </View>
        )
    }
    render() {
        return (<View style={styles.container}>
            <ScrollView>
                <BagItem />
                <BagItem />
                {this._renderCoupons()}
                <CheckDelivery />
                <View style={styles.gift}>
                    <View style={styles.giftContent}>
                        <Icons.Gift width={Size.Icon.width} height={Size.Icon.height} fill="#cccccc" />
                        <Text style={styles.giftText}>Gift wrap for this gift for free</Text>
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
                        toColor={Color.Button.PrimaryGradient.toColor} title={'Place Order'}
                onPress={()=>this.props.navigation.navigate('Payment')}/>
            </View>
        </View>)
    }
}
export default withNavigation(BagTab)
