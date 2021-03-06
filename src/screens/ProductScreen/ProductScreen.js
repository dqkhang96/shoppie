import React from 'react'
import { View, ScrollView, Text, Image, TouchableWithoutFeedback, Animated, Easing, Alert } from 'react-native'
import Swiper from '../../components/Swiper'
import Icons from '../../../res/icons'
import SizePicker from './SizePicker'
import ColorPicker from './ColorPicker'
import CheckDelivery from '../../components/CheckDelivery'
import ButtonGradient from '../../components/ButtonGradient';
import styles from '../../theme/screens/ProductScreen/ProductScreen'
import Color from '../../theme/colors';
import Size, { wp } from '../../theme/sizes'
import data from '../../../res/data'
import { Header, HeaderBackButton } from 'react-navigation'
import { connect } from 'react-redux';
import { likeProduct, addToCart, removeLikeProduct } from '../../redux/actions/index';
import BagAndWishListButtons from '../../components/BagAndWishListButtons'
import HeaderBar from '../../components/HeadBar'
import CustomI18n from '../../util/i18n'
class ProductScreen extends React.Component {
    static navigationOptions = {
        header: () => null
    };
    constructor(props) {
        super(props)
        this.state = {
            product: data.find(pr => pr.id === this.props.navigation.getParam('id')),
            isLiked: this.props.wishList.find(pr => pr.id === this.props.navigation.getParam('id')) ? true : false,
            isAnimationAddToBagRun: false,
            enableLikeButton: true
        }
        this.animationLike = new Animated.Value(0)
        this.toggleLike = this.toggleLike.bind(this)
        this.onPressButtonAddToCart = this.onPressButtonAddToCart.bind(this)
        this.animationScaleAddToBag = new Animated.Value(0)
        this.animationOpacityAddToBag = new Animated.Value(1)
    }

    toggleLike() {
        if (this.state.isLiked) {
            this.setState({ isLiked: false })
            this.props.removeLikeProduct(this.state.product.id)
        }
        else {
            this.setState({ isLiked: !this.state.isLiked, enableLikeButton: false }, () => {
                if (this.state.isLiked) {
                    this.animationLike.setValue(0)
                    Animated.timing(this.animationLike, {
                        toValue: 1,
                        duration: 350,
                        easing: Easing.linear,
                        useNativeDriver: true
                    }).start(() => {
                        this.props.likeProduct(this.state.product)
                        this.setState({ enableLikeButton: true })
                    })
                }

            })
        }

    }

    _renderInforPrice() {
        let viewScale = this.animationLike.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 1.8, 1]
        })
        let transformStyle = { ...styles.like, transform: [{ scale: viewScale }] };
        return (
            <View style={styles.priceInfor}>
                <View style={styles.newLabelWrap}>
                    <Text style={styles.newLabel}>{CustomI18n.t('Product').new.toUpperCase()}</Text>
                </View>
                <View>
                    <Text style={styles.nameProduct}>{this.state.product.name}</Text>
                </View>
                <View style={styles.priceWrap}>
                    <Text style={styles.price}>{this.state.product.des}</Text>
                    <Text style={styles.priceRoot}>Rs. 5,999</Text>
                    <Text style={styles.saleOff}>65% off</Text>
                </View>
                <View>
                    <Text style={styles.nameProduct}>{"Men Solid Bomber Jacket"}</Text>
                </View>

                <Animated.View style={transformStyle}>
                    <TouchableWithoutFeedback onPress={this.toggleLike} disabled={!this.state.enableLikeButton}>
                        {this.state.isLiked ?
                            <Icons.Like width={styles.like.width} height={styles.like.height} fill="red" /> :
                            <Icons.Heart width={styles.like.width} height={styles.like.height} fill={Color.primary} />
                        }
                    </TouchableWithoutFeedback>
                </Animated.View>
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
                    <Image style={{
                        height: wp(100),
                        width: wp(100),
                        backgroundColor: "#EEEEEE"

                    }} source={{ uri: this.state.product.urlImage }} />
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
                <Text style={styles.titlePickColor}>{CustomI18n.t('Product').selectColor}</Text>
                <ColorPicker />
            </View>
        )
    }

    _renderSizePicker() {
        return (
            <View style={styles.sizePicker}>
                <Text style={styles.titleSizePicker}>{CustomI18n.t('Product').selectSize} </Text>
                <SizePicker listSizes={["XL", "S", "L", "XXL"]} />
            </View>
        )
    }

    _renderOther() {
        return (
            <React.Fragment>
                <View style={styles.content}>
                    <Text style={styles.title}>{CustomI18n.t('Product').productSummary}</Text>
                    <Text style={styles.contentText}>
                        Flaunt a stylish look by wearing this jacket on any casual day out. Available in a slim fit, it will go well with a pair of cargo pants and boat shoes.
                    </Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{CustomI18n.t('Product').productInforAndCare}</Text>
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
    onPressButtonAddToCart(event) {
        if (this.props.cart.find(pr => pr.id == this.state.product.id)) {
            Alert.alert(CustomI18n.t('title').alert, CustomI18n.t('message').productIsInBag)
            return
        }

        const { pageX, pageY } = event.nativeEvent
        const { positionCartButton } = this.state
        this.animationAddToBag = new Animated.ValueXY({
            x: pageX - styles.miniProductImage.width / 2,
            y: pageY
        })
        this.animationScaleAddToBag = new Animated.Value(0)
        this.animationOpacityAddToBag = new Animated.Value(1)
        this.setState({ isAnimationAddToBagRun: true })
        Animated.parallel([
            Animated.timing(this.animationAddToBag, {
                toValue: {
                    x: positionCartButton.pageX - Size.Icon.width + 1,
                    y: positionCartButton.pageY - Size.Icon.height - 2
                },
                duration: 500,
                easing: Easing.linear
            }),
            Animated.timing(this.animationScaleAddToBag, {
                toValue: 1,
                duration: 900,
                easing: Easing.linear
            }),
            Animated.timing(this.animationOpacityAddToBag, {
                toValue: 0.02,
                duration: 1100,
                easing: Easing.quad
            })
        ]).start(() => {
            this.setState({ isAnimationAddToBagRun: false })
            this.props.addToCart(this.state.product)
        })


    }

    _renderButtonAddToCart() {
        return (
            <View style={styles.buttonAddToCart}
            >
                <ButtonGradient style={styles.gradientAddToCart} disabled={this.state.isAnimationAddToBagRun}
                    fromColor={Color.Button.PrimaryGradient.fromColor}
                    toColor={Color.Button.PrimaryGradient.toColor}
                    title={CustomI18n.t('Product').addToCart}
                    onPress={this.onPressButtonAddToCart}
                />
            </View>
        )
    }

    render() {

        let scaleProductImage = this.animationScaleAddToBag.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.25]
        })
        return (
            <View style={styles.container}>
                <HeaderBar
                    title="Product"
                    headerLeft={<HeaderBackButton onPress={() => this.props.navigation.goBack(null)} />}
                    headerRight={<BagAndWishListButtons setPositionBagButton={(x, y) => this.setState({
                        positionCartButton: {
                            pageX: x, pageY: y
                        }
                    })}
                    />}
                />
                <ScrollView>
                    {this._renderSwiper()}
                    {this._renderInforPrice()}
                    {this._renderColorPicker()}
                    {this._renderSizePicker()}
                    <CheckDelivery />
                    {this._renderOther()}
                </ScrollView>
                {this._renderButtonAddToCart()}
                {this.state.isAnimationAddToBagRun ?
                    <Animated.Image style={[styles.miniProductImage,
                    this.animationAddToBag.getLayout(),
                    {
                        transform: [{ scale: scaleProductImage }],
                        opacity: this.animationOpacityAddToBag
                    }]} source={{ uri: this.state.product.urlImage }} />
                    : null}
            </View>
        )
    }
}

const mapDispatchToDispatchProps = dispatch => {
    return {
        likeProduct: (product) => dispatch(likeProduct(product)),
        removeLikeProduct: (id) => dispatch(removeLikeProduct(id)),
        addToCart: (product) => dispatch(addToCart(product))
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
    wishList: state.wishList
})
export default connect(mapStateToProps, mapDispatchToDispatchProps)(ProductScreen)