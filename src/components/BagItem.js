import React from 'react'
import { View, Text, Picker, StyleSheet } from 'react-native'
import Icons from '../../res/icons';
import { wp, sp } from '../util';
import { Svg, Defs, Stop, LinearGradient } from 'react-native-svg';

export default class BagItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.image} />
                    <View style={styles.infor}>
                        <Text style={styles.title}>Lawman</Text>
                        <Text style={styles.name}>Men’s Slim Fit Printed jacket</Text>
                        <View style={styles.groupViewInputSelect}>
                            <View style={styles.viewInputSelect}>
                                <Text style={styles.labelInput}>Size</Text>
                                <Picker style={styles.picker}>
                                    <Picker.Item label="XL" />
                                    <Picker.Item label="XX" />
                                </Picker>
                            </View>
                            <View style={styles.viewInputSelect}>
                                <Text style={styles.labelInput}>Size</Text>
                                <Picker style={styles.picker}>
                                    <Picker.Item label="XL" />
                                    <Picker.Item label="XX" />
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.viewPrice}>
                            <Text style={styles.price}>Rs. 2,100</Text>
                            <Text style={styles.rootPrice}>Rs. 2,200</Text>
                            <Text style={styles.saleOff}>65% off</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.gift}>Gift Wrap available</Text>
                <View style={styles.devide} />
                <View style={styles.offer}>
                    <Icons.Percel width={sp(5)} height={sp(5)} fill="#08D6CC"/>
                    <Text style={styles.titleOffer}>2 Offers Applicable for this Product</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: sp(3.5),
        marginBottom: sp(1),
        backgroundColor: 'white'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: sp(2)
    },
    image: {
        height: sp(30),
        width: wp(25),
        marginRight: sp(3),
        backgroundColor: '#eeeeee'
    },
    infor: {

    },
    title: {
        fontSize: sp(5),
        marginBottom: sp(1.5)
    },
    name: {
        fontSize: sp(4.5),
        color: 'gray',
        marginBottom: sp(1.5)
    },
    groupViewInputSelect: {
        flexDirection: 'row',
        marginBottom: sp(2)
    },
    viewInputSelect: {
        flexDirection: 'row',
        marginRight: sp(3),
        alignItems: 'center'
    },
    labelInput: {
        color: 'gray',
        fontSize: sp(5),
    },
    picker: {
        height: sp(5),
        fontSize: sp(5),
        borderColor: "#eeeeee",
        borderRadius: 5
    },
    price: {
        fontSize: sp(4.5)
    },
    rootPrice: {
        fontSize: sp(4.3),
        textDecorationLine: 'line-through',
        marginLeft: sp(1.5)
    },
    saleOff: {
        fontSize: sp(4),
        color: '#08D6CC',
        marginLeft: sp(1.5)
    },
    gift: {
        fontSize: sp(4),
        color: "#707070",
        marginBottom: sp(2)
    },
    devide: {
        width: "100%",
        height: 0,
        borderWidth: 1,
        borderColor: '#eeeeee',
    },
    offer: {
        paddingTop: sp(4),
        paddingBottom: sp(1.5),
        flexDirection: 'row',
        alignItems: "center"
    },
    titleOffer: {
        fontSize: sp(4),
        color: "#707070",
        marginLeft: sp(2)
    },
    viewPrice: {
        flexDirection: "row",
        alignItems: 'center'
    }
})