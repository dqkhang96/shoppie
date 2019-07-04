import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, Dimensions, ScrollView, StyleSheet ,TouchableWithoutFeedback } from 'react-native'
import CheckButton from '../icons/CheckButton.js'
import MasterCard from '../icons/MasterCard.js'
import Visa from '../icons/Visa.js'
import ButtonGradient from '../components/ButtonGradient.js'
import CircleCheck from '../icons/CircleCheck'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {normalize} from '../utils'
const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height
export default class PaymentScreen extends Component {
    static navigationOptions={
        title:'Payment'
    }
    constructor(props){
        super(props)
        this.state = {select:0}
    }
    //0 khong chon cai nao
    //1 la chon Visa
    //2 la chon Master Card

    _renderHeader() {
        return (
            <View style={{ width: SCREEN_WIDTH, padding: normalize(10), marginTop: normalize(15) }}>
                <ImageBackground source={require('../image/Rectangle6.png')}
                    style={{ height: normalize(50), width: '100%', elevation: 10,justifyContent:'center' }}
                >
                    <View style={styles.TotalPayable}>
                        <View >
                            <Text style={{ color: 'white' }}>- Standard Delivery on 21st July -</Text>
                            <Text style={{ color: 'white' }}>2 items -view details</Text>
                        </View>
                        <View >
                            <Text style={{ color: 'white' }}>Total Payable</Text>
                            <Text style={{ color: 'white' }}>RS.5700</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
    _renderPayUsing() {
        return (
            <View style={{ marginBottom: normalize(15) }}>
                <Text style={{ marginLeft: normalize(10), marginBottom: normalize(5) }}> Pay using saved cards </Text>
                <View style={{ backgroundColor: '#FFFFFF', width: SCREEN_WIDTH, padding: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ justifyContent: "flex-start", flexDirection: 'row' }}>

                           <View style={{height:normalize(15),width:normalize(15)}}>
                           <TouchableWithoutFeedback onPress={()=>{
                               if (this.state.select===1) {this.setState({select:0})}
                               else {this.setState({select:1})}
                           }}>
                           {this.state.select==1 ? <CheckButton  height={normalize(15)} width={normalize(15)} fill={'#08D6CC'}/>:<CircleCheck  height={normalize(15)} width={normalize(15)} fill={'#eaeaea'}/> }
                           </TouchableWithoutFeedback>
                           </View>
                            <View style={{ flexDirection: 'row', marginLeft: normalize(10) }}>
                                <View>
                                    <Text>ICICI Debit Card</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <Text>****</Text>
                                        <Text>1234</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: normalize(-10) }}>
                            <View style={{ justifyContent: 'flex-end' }}>
                                <TouchableOpacity>
                                    <Visa height={normalize(40)} width={normalize(40)}></Visa>
                                </TouchableOpacity>
                                <Text style={{ fontSize: normalize(15) }}>ARUN KUMAR</Text>
                            </View>
                            <View style={styles.CVV}></View>
                        </View>
                    </View>
                    <View style={styles.DIVIED}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <View style={{ justifyContent: "flex-start", flexDirection: 'row' }}>
                        <View style={{height:normalize(15),width:normalize(15)}}>
                           <TouchableWithoutFeedback onPress={()=>{
                               if (this.state.select===2) {this.setState({select:0})}
                               else {this.setState({select:2})}
                           }}>
                           {this.state.select==2 ? <CheckButton  height={normalize(15)} width={normalize(15)} fill={'#08D6CC'}/>:<CircleCheck  height={normalize(15)} width={normalize(15)} fill={'#eaeaea'}/> }
                           </TouchableWithoutFeedback>
                           </View>
                            <View style={{ flexDirection: 'row', marginLeft: normalize(10) }}>
                                <View>
                                    <Text>Axis Credit Card</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <Text>****</Text>
                                        <Text>1234</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: normalize(-10) }}>
                            <View style={{ justifyContent: 'flex-end' }}>
                                <MasterCard height={normalize(40)} width={normalize(40)}></MasterCard>
                                <Text style={{ fontSize: normalize(15) }}>ARUN KUMAR</Text>
                            </View>
                            <View style={styles.CVV}></View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    _renderOtherPayment() {
        return (
            <View style={{ marginTop: normalize(15) }}>
                <Text style={{ marginLeft: normalize(15), marginBottom: normalize(5) }}> Other Payment Options </Text>
                <View style={{ backgroundColor: '#FFFFFF', width: SCREEN_WIDTH, padding: normalize(5) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: normalize(10) }}>
                        <Text>Credit / Debit Card</Text>
                        <Text style={{ color: '#08D6CC' }}>SELECT</Text>
                    </View>
                    <View style={styles.DIVIED}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: normalize(10) }}>
                        <Text>Net Banking</Text>
                        <Text style={{ color: '#08D6CC' }}>SELECT</Text>
                    </View>
                    <View style={styles.DIVIED}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
                        <Text>Cash on Delivery</Text>
                        <Text style={{ color: '#08D6CC' }}>SELECT</Text>
                    </View>
                    <View style={styles.DIVIED}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
                        <Text>Wallets</Text>
                        <Text style={{ color: '#08D6CC' }}>SELECT</Text>
                    </View>

                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F6F6F6' }}>
                <ScrollView>
                    {this._renderHeader()}
                    {this._renderPayUsing()}
                    {this._renderOtherPayment()}
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ marginLeft: normalize(10), marginBottom: normalize(5) }}> Deliver To </Text>
                        <View style={{ backgroundColor: '#FFFFFF', width: SCREEN_WIDTH, padding: normalize(10) }}>
                            <Text>Arun Kumar</Text>
                            <Text>J, Saket Rd, Block J, Eastern Avenue</Text>
                            <Text>Delhi</Text>
                            <Text>SDelhi - Delhi 110062</Text>
                            <Text style={{ color: '#08D6CC' }}>Change Address</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ marginTop: normalize(15) }}>
                    <View style={{ backgroundColor: '#FFFFFF', width: SCREEN_WIDTH, padding: normalize(10), flexDirection: 'row',justifyContent:'space-between' }}>
                        <View>
                            <Text>Rs.5700</Text>
                            <Text style={{ color: '#08D6CC' }}>View Details</Text>
                        </View>
                        <ButtonGradient style={{ height: normalize(40), width: SCREEN_WIDTH * 0.4,borderRadius:4,overflow:'hidden'}} fromColor={'#08D6CC'} toColor={'#00BBE1'} title={'PAY NOW'} ></ButtonGradient>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    CVV: {
        height: normalize(45),
        marginLeft: normalize(5),
        width: normalize(65),
        borderWidth: normalize(1),
        borderRadius: normalize(5),
        marginTop: normalize(10),
        borderColor: '#eaeaea'
    },
    TotalPayable: {
        paddingHorizontal: normalize(30),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    DIVIED: {
        height: 0,
        width: '100%',
        borderBottomWidth: 0.8,
        borderColor: '#eaeaea',
        marginTop: normalize(5)
    }
})