import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import Swiper from '../../components/Swiper'
import Icons from '../../../res/icons'
import SizePicker from './SizePicker'
import ColorPicker from './ColorPicker'
import CheckDelivery from '../../components/CheckDelivery'
import ButtonGradient from '../../components/ButtonGradient';
import styles from '../../theme/screens/ProductScreen/ProductScreen'
import Color from '../../theme/colors';
import {wp} from '../../theme/sizes'
import BagAndWishListButton from '../../components/BagAndWishListButtons'

export default class ProductScreen extends React.Component {
    static navigationOptions = {
        title:"Product",
        headerRight:<BagAndWishListButton/>
    };

    constructor(props){
        super(props)

    }

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
                    <Icons.Heart width={styles.like.width} height={styles.like.height} fill={Color.primary} />
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
                <ButtonGradient style={styles.gradientAddToCart} 
                    fromColor={Color.Button.PrimaryGradient.fromColor} 
                    toColor={Color.Button.PrimaryGradient.toColor}
                    title="Add to cart"
                    onPress={(event)=>{
                        console.log(this.props.navigation.state)
                        console.log(event.nativeEvent)
                    }}
                    />
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

