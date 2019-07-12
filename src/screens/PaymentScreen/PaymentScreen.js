import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, Dimensions, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import CheckButton from '../../../res/icons/CheckButton.js'
import MasterCard from '../../../res/icons/MasterCard.js'
import Visa from '../../../res/icons/Visa.js'
import ButtonGradient from '../../components/ButtonGradient.js'
import CircleCheck from '../../../res/icons/CircleCheck'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImageRes from '../../util/images'
import styles from '../../theme/screens/PaymentScreen/PaymentScreen';
import Colors from '../../theme/colors'
import Size from '../../theme/sizes.js';
import CustomI18n from '../../util/i18n'
const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height
export default class PaymentScreen extends Component {
    static navigationOptions = {
        title: 'Payment'
    }
    constructor(props) {
        super(props)
        this.state = { select: 0 }
    }
    //0 khong chon cai nao
    //1 la chon Visa
    //2 la chon Master Card

    _renderHeader() {
        return (
            <View style={{ width: SCREEN_WIDTH, padding: 10, marginTop: 15 }}>
                <ImageBackground source={ImageRes.rectangle}
                    style={styles.imagebackground}
                >
                    <View style={styles.totalpayable}>
                        <View >
                            <Text style={{ color: 'white' ,fontSize:Size.Text.normal}}>- Standard Delivery on 21st July -</Text>
                            <Text style={{ color: 'white' ,fontSize:Size.Text.normal}}>2 items -view details</Text>
                        </View>
                        <View >
                            <Text style={{ color: 'white' ,fontSize:Size.Text.normal}}>Total Payable</Text>
                            <Text style={{ color: 'white' ,fontSize:Size.Text.normal}}>RS.5700</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
    _renderPayUsing() {
        return (
            <View style={{ marginBottom: 15 }}>
                <Text style={{ marginLeft: 10, marginBottom: 5 }}>{CustomI18n.t('Payment').useCard} </Text>
                <View style={{ backgroundColor: '#FFFFFF', width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.19, padding: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableWithoutFeedback onPress={() => {
                            if (this.state.select === 1) { this.setState({ select: 0 }) }
                            else { this.setState({ select: 1 }) }
                        }}>
                            <View style={{ justifyContent: "flex-start", flexDirection: 'row' }}>

                                <View style={{ height: 15, width: 15 }}>

                                    {this.state.select == 1 ? <CheckButton height={15} width={15} fill={'#08D6CC'} /> : <CircleCheck height={15} width={15} fill={'#eaeaea'} />}

                                </View>
                                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                    <View>
                                        <Text>ICICI Debit Card</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <Text>****</Text>
                                            <Text>1234</Text>
                                        </View>
                                    </View>
                                </View>

                            </View>
                        </TouchableWithoutFeedback>
                        <View style={{ flexDirection: 'row', marginTop: -10 }}>
                            <View style={{ justifyContent: 'flex-end' }}>
                                <TouchableOpacity>
                                    <Visa height={40} width={40}></Visa>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 15 }}>ARUN KUMAR</Text>
                            </View>
                            <View style={styles.cvv}></View>
                        </View>
                    </View>
                    <View style={styles.divide}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <TouchableWithoutFeedback onPress={() => {
                            if (this.state.select === 2) { this.setState({ select: 0 }) }
                            else { this.setState({ select: 2 }) }
                        }}>
                            <View style={{ justifyContent: "flex-start", flexDirection: 'row' }}>
                                <View style={{ height: 15, width: 15 }}>

                                    {this.state.select == 2 ? <CheckButton height={15} width={15} fill={'#08D6CC'} /> : <CircleCheck height={15} width={15} fill={'#eaeaea'} />}

                                </View>
                                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                    <View>
                                        <Text>Axis Credit Card</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <Text>****</Text>
                                            <Text>1234</Text>
                                        </View>
                                    </View>
                                </View>

                            </View>
                        </TouchableWithoutFeedback>
                        <View style={{ flexDirection: 'row', marginTop: -10 }}>
                            <View style={{ justifyContent: 'flex-end' }}>
                                <MasterCard height={40} width={40}></MasterCard>
                                <Text style={{ fontSize: 15 }}>ARUN KUMAR</Text>
                            </View>
                            <View style={styles.cvv}></View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    _renderOtherPayment() {
        return (
            <View style={{ marginTop: 15 }}>
                <Text style={{ marginLeft: 10, marginBottom: 5 }}> {CustomI18n.t('Payment').otherPayment} </Text>
                <View style={{ backgroundColor: Colors.ItemMenu.background, width: SCREEN_WIDTH, padding: 10 }}>
                    <View style={styles.paymentitem}>
                        <Text>Credit / Debit Card</Text>
                        <Text style={{ color: Colors.Text.name }}>{CustomI18n.t('Payment').select.toUpperCase()}</Text>
                    </View>
                    <View style={styles.divide}></View>
                    <View style={styles.paymentitem}>
                        <Text>Net Banking</Text>
                        <Text style={{ color: Colors.Text.name }}>{CustomI18n.t('Payment').select.toUpperCase()}</Text>
                    </View>
                    <View style={styles.divide}></View>
                    <View style={styles.paymentitem}>
                        <Text>Cash on Delivery</Text>
                        <Text style={{ color: Colors.Text.name }}>{CustomI18n.t('Payment').select.toUpperCase()}</Text>
                    </View>
                    <View style={styles.divide}></View>
                    <View style={styles.paymentitem}>
                        <Text>Wallets</Text>
                        <Text style={{ color: Colors.Text.name }}>{CustomI18n.t('Payment').select.toUpperCase()}</Text>
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
                        <Text style={{ marginLeft: 10, marginBottom: 5 }}> {CustomI18n.t('Payment').deliverTo} </Text>
                        <View style={{ backgroundColor: Colors.ItemMenu.background, width: SCREEN_WIDTH, padding: 10 }}>
                            <Text>Arun Kumar</Text>
                            <Text>J, Saket Rd, Block J, Eastern Avenue</Text>
                            <Text>Delhi</Text>
                            <Text>SDelhi - Delhi 110062</Text>
                            <Text style={{ color: Colors.Text.name }}>{CustomI18n.t('Payment').changeAddress}</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ marginTop: 15 }}>
                    <View style={styles.pay}>
                        <View>
                            <Text>Rs.5700</Text>
                            <Text style={{ color: Colors.Text.name }}>{CustomI18n.t('Payment').viewDetails}</Text>
                        </View>
                        <ButtonGradient style={styles.buttongradient} fromColor={'#08D6CC'} toColor={'#00BBE1'} title={CustomI18n.t('Payment').payNow.toUpperCase()} ></ButtonGradient>
                    </View>
                </View>
            </View>
        )
    }
}
