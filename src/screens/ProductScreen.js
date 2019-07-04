import React from 'react'
import { View, ScrollView, Text, TextInput, StyleSheet } from 'react-native'
import Swiper from '../components/Swiper'
import { wp, WIDTH_SCREEN ,sp} from '../untils'
import Icons from '../icons'
import SizePicker from '../components/SizePicker'
import ColorPicker from '../components/ColorPicker'
import { Svg, LinearGradient, Stop, Defs, Rect } from 'react-native-svg'
import  CheckDelivery from '../components/CheckDelivery'

export default class ProductScreen extends React.Component {
    static navigationOptions = {
        title:"Product",
        tabBarVisible: false,
    };

    _renderInforPrice() {
        return (
            <View style={styles.priceInfor}>
                <View style={styles.newLabelWrap}>
                    <Text style={styles.newLabel}>NEW</Text>
                </View>
                <View>
                    <Text style={styles.nameProduct}>{"MONTEIL & MUNERO"}</Text>
                </View>
                <View style={styles.priceWrap}>
                    <Text style={styles.price}>Rs. 2,100</Text>
                    <Text style={styles.priceRoot}>Rs. 5,999</Text>
                    <Text style={styles.saleOff}>65% off</Text>
                </View>
                <View>
                    <Text style={styles.nameProduct}>{"Men Solid Bomber Jacket"}</Text>
                </View>
                <View style={styles.like}>
                    <Icons.Heart width={sp(6)} height={sp(6)} fill='#08D6CC' />
                </View>
            </View>
        )
    }

    _renderSwiper() {
        return (
            <View
                style={{
                    height: wp(100)
                }}
            >
                <Swiper>
                    <View style={{
                        height: wp(100),
                        width: wp(100),
                        backgroundColor: "#EEEEEE"
                    }} />
                    <View style={{
                        height: wp(100),
                        width: wp(100),
                        backgroundColor: "#EEEEEE"
                    }} />
                    <View style={{
                        height: wp(100),
                        width: wp(100),
                        backgroundColor: "#EEEEEE"
                    }} />
                    <View style={{
                        height: wp(100),
                        width: wp(100),
                        backgroundColor: "#EEEEEE"
                    }} />
                </Swiper>
            </View>
        )
    }

    _renderColorPicker() {
        return (
            <View style={styles.colorPicker}>
                <Text style={styles.titlePickColor}>Select a color</Text>
                <ColorPicker/>
            </View>
        )
    }

    _renderSizePicker() {
        return (
            <View style={styles.sizePicker}>
                <Text style={styles.titleSizePicker}>Select a Size</Text>
                <SizePicker listSizes={["XL", "S", "L", "XXL"]} />
            </View>
        )
    }
  
    _renderOther() {
        return (
            <React.Fragment>
                <View style={styles.content}>
                    <Text style={styles.title}>Product Summary</Text>
                    <Text style={styles.contentText}>
                        Flaunt a stylish look by wearing this jacket on any casual day out. Available in a slim fit, it will go well with a pair of cargo pants and boat shoes.
                    </Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{'Product Info & Care'}</Text>
                    <Text style={styles.contentText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dui nisi, dignissim quis euismod eget, efficitur ac ligula. Nunc laoreet fermentum odio eu cursus. Nulla non turpis nisi. Cras aliquet cursus pretium. Praesent sed nibh sapien.
                        </Text>
                    <Text style={styles.contentText}>
                        Care Instructions
                    </Text>
                    <Text style={styles.contentText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dui nisi, dignissim quis euismod eget, efficitur ac ligula.
                    </Text>

                </View>
            </React.Fragment >
        )
    }

    _renderButtonAddToCart() {

        return (
            <View style={styles.buttonAddToCart}>
                <View
                    style={styles.gradientAddToCart}
                >
                    <Svg
                        width={WIDTH_SCREEN}
                        height={sp(12)}
                    >
                        <Defs>
                            <LinearGradient id="grad" x1={0} y1={0} x2={WIDTH_SCREEN} y2={sp(12)}>
                                <Stop offset="0" stopColor="#00BBE1" stopOpacity="1" />
                                <Stop offset="1" stopColor="#08D6CC" stopOpacity="1" />
                            </LinearGradient>
                        </Defs>
                        <Rect
                            x={0}
                            y={0}
                            width={WIDTH_SCREEN}
                            height={sp(12)}
                            fill="url(#grad)" />
                    </Svg>
                </View>
                <Text style={styles.textAddToCart}>Add to cart</Text>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {this._renderSwiper()}
                    {this._renderInforPrice()}
                    {this._renderColorPicker()}
                    {this._renderSizePicker()}
                    <CheckDelivery/>
                    {this._renderOther()}
                </ScrollView>
                {this._renderButtonAddToCart()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE'
    },
    priceInfor: {
        padding: sp(3.5),
        marginBottom: sp(1),
        backgroundColor: 'white'
    },
    newLabelWrap: {
        height: sp(5),
        width: sp(14),
        borderColor: '#08D6CC',
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        marginBottom: sp(1)
    },
    newLabel: {
        fontSize: sp(4),
        color: '#08D6CC'
    },
    priceWrap: {
        flexDirection: 'row',
        marginBottom: sp(1)
    },
    price: {
        fontSize: sp(5),
        marginRight: sp(3.5)
    },
    priceRoot: {
        fontSize: sp(4.5),
        textDecorationLine: 'line-through',
        color: "#afafaf",
        marginRight: sp(3.5)
    },
    saleOff: {
        fontSize: sp(4.5),
        color: '#08D6CC'
    },
    like: {
        position: 'absolute',
        top: sp(3.5),
        right: sp(5)
    },
    colorPicker: {
        padding: sp(3.5),
        backgroundColor: 'white',
        marginBottom: sp(1)
    },
    titlePickColor: {
        fontSize: sp(4.5),
        marginBottom: sp(2)
    },
    
    sizePicker: {
        padding: sp(3.5),
        backgroundColor: 'white',
        marginBottom: sp(1),
    },
    titleSizePicker: {
        fontSize: sp(4.5),
        marginBottom: sp(2)
    },
    title: {
        fontSize: sp(4.5),
        marginBottom: sp(1.5)
    },
    
    content: {
        padding: sp(3.5),
        backgroundColor: 'white',
        marginBottom: sp(1)
    },
    contentText: {
        fontSize: sp(4),
        color: 'gray',
        marginBottom: sp(1)
    },
    buttonAddToCart: {
        marginTop: -sp(1),
        height: sp(12),
        width: WIDTH_SCREEN,
        justifyContent:'center'
    },
    gradientAddToCart: {
        height: sp(12),
        width: WIDTH_SCREEN,
        position: 'absolute',
        top: 0,
        left: 0
    },
    textAddToCart: {
        fontSize: sp(4),
        color: 'white',
        textAlign: 'center'
    }
})