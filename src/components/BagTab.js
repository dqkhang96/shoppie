import React from 'react'
import { View, StyleSheet, ScrollView, TextInput, Text } from 'react-native'
import BagItem from './BagItem'
import Icons from '../icons'
import { sp, wp } from '../untils'
import ButtonGradient from './ButtonGradient';
import CheckDelivery from './CheckDelivery'
import {withNavigation} from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler';


 class BagTab extends React.Component {

    _renderCoupons() {
        return (
            <View style={styles.coupons}>
                <Text style={styles.titleCoupons}>Coupons</Text>
                <View style={styles.inputViewCoupons}>
                    <View style={styles.iconPercel}>
                        <Icons.Percel with={sp(5)} height={sp(5)} fill="gray" />
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
                        <Icons.Gift width={sp(5)} height={sp(5)} fill="#cccccc" />
                        <Text style={styles.giftText}>Gift wrap for this gift for free</Text>
                    </View>
                    <View style={styles.goGift}>
                        <Icons.Right width={sp(5)} height={sp(5)} fill="black" />
                    </View>
                </View>
                {this._renderOrderSummary()}
            </ScrollView>
            <View style={{flexDirection:'row'}}>
                <View style={{width:wp(30),justifyContent:'center',height:sp(12)}}><Text style={{textAlign:'center'}}>Rs .5700</Text></View>
                <ButtonGradient style={{height:sp(12) ,width:wp(70),fontSize:sp(5)}} fromColor={'#08D6CC'} toColor={'#0cf9ee'} title={'Place Order'}
                onPress={()=>this.props.navigation.navigate('Payment')}/>
            </View>
        </View>)
    }
}
export default withNavigation(BagTab)
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    coupons: {
        padding: sp(4),
        backgroundColor: 'white',
        marginBottom: sp(1)
    },
    titleCoupons: {
        fontSize: sp(4.5),
        marginBottom: sp(2.5)
    },
    inputViewCoupons: {
        alignItems: 'center',
        flexDirection: 'row',
        overflow: 'hidden',
        borderRadius: 4,
        width:"100%"
    
    },
    inputCoupons: {
        height: sp(12),
        borderWidth: 1,
        borderColor: '#DCDCDC',
        paddingLeft: sp(9),
        width: (wp(100) - 2 * sp(4)) * 0.7,
        borderRightWidth: 0,
        fontSize: sp(4),
        borderBottomLeftRadius: 4,
        borderTopLeftRadius:4
    },
    buttonCoupons: {
        width: (wp(100) - 2 * sp(4)) * 0.3,
        height: sp(12),
        borderRadius:4,
        borderColor: '#00BBE1',
    },
    iconPercel: {
        position: 'absolute',
        left: sp(2),
        height: sp(5),
        width: sp(5)
    },

    gift: {
        padding: sp(3.5),
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection:'row',
        marginBottom:sp(1)
    },
    giftText: {
        fontSize: sp(4),
        marginLeft: sp(2)
    },
    giftContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    goGift:{
        height:sp(5),
        width:sp(5)
    },
    orderSummaryContainer:{
        padding:sp(3.5),
        backgroundColor:'white'
    },
    orderSummaryTitle:{
        fontSize:sp(5),
        marginBottom:sp(2)
    },
    orderSummaryContent:{
        borderWidth:1,
        borderColor:"#E1E1E1",
        borderRadius:6,
        paddingHorizontal:sp(3)
    },
    orderSummaryItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:sp(4)
    },
    devideDash:{
        width:"100%",
        borderColor:"#E1E1E1",
        borderBottomWidth:1,
        borderStyle: 'dotted'
    },
    summaryTitle:{
        fontSize:sp(4.5)
    },
    summaryValue:{
        fontSize:sp(4.5)
    }

})