import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Icons from '../../res/icons'
import { Svg, Defs, Stop, Circle, LinearGradient } from 'react-native-svg'
import {sp,Size} from '../theme/sizes'
import styles from '../theme/components/CheckDelivery'
import Color from '../theme/colors';



export default class CheckDelivery extends React.Component {

    render() {
        const SIZE_BUTTON=styles.buttonGradient.height
        
        return (
            <View style={[styles.checkDeliver,this.props.style]}>
                <Text style={styles.title}>Check Delivery and COD Options</Text>
                <View style={styles.wrapInputDeliver}>
                    <TextInput style={styles.inputDeliver} placeholder="Delivery" placeholderTextColor="#707070" />
                    <View style={styles.position}>
                        <Icons.Position height={styles.position.height} width={styles.position.width} fill="#707070" />
                    </View>

                    <View style={styles.buttonGradient}>
                        <View
                            style={styles.gradient}
                        >
                            <Svg
                                height={SIZE_BUTTON}
                                width={SIZE_BUTTON}
                            >
                                <Defs>
                                    <LinearGradient id="grad" x1={0} y1={0} x2={SIZE_BUTTON} y2={SIZE_BUTTON}>
                                        <Stop offset="0" stopColor={Color.Button.PrimaryGradient.fromColor} stopOpacity="1" />
                                        <Stop offset="1" stopColor={Color.Button.PrimaryGradient.fromColor} stopOpacity="1" />
                                    </LinearGradient>
                                </Defs>
                                <Circle
                                    r={SIZE_BUTTON / 2}
                                    cx={SIZE_BUTTON / 2}
                                    cy={SIZE_BUTTON / 2}
                                    fill="url(#grad)" />
                            </Svg>
                        </View>
                        <Icons.ArrowRight height={SIZE_BUTTON * 0.5} width={SIZE_BUTTON * 0.5} fill="white" />
                    </View>
                </View>
                <Text style={styles.minText}>Free shipping on orders above Rs. 500*</Text>
                <Text style={styles.link}>
                    For more details read our Shipping Policy
                </Text>

            </View >
        )
    }
}

