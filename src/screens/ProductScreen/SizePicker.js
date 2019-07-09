import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { Svg, Defs, Circle, LinearGradient, Stop } from 'react-native-svg'
import Color from '../../theme/colors'
import styles from '../../theme/screens/ProductScreen/SizePicker'

export default class SizePicker extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sizeIndexPicked: -1
        }
    }

    pickSize(index) {
        this.setState({ sizeIndexPicked: index })
    }
    _renderItem(item, index) {
        const SIZE_ITEM=styles.item.height

        return (
            <TouchableWithoutFeedback
                onPress={() => this.pickSize(index)}
            >
                <View style={[styles.item, index == this.state.sizeIndexPicked ? null : styles.itemNotPicked]}>
                    {index == this.state.sizeIndexPicked ? (
                        <View style={styles.sizeItemPicked}>
                            <View
                                style={styles.gradient}
                            >
                                <Svg
                                    height={SIZE_ITEM}
                                    width={SIZE_ITEM}
                                >
                                    <Defs>
                                        <LinearGradient id="grad" x1={0} y1={0} x2={SIZE_ITEM} y2={SIZE_ITEM}>
                                            <Stop offset="0" stopColor={Color.Button.PrimaryGradient.fromColor} stopOpacity="1" />
                                            <Stop offset="1" stopColor={Color.Button.PrimaryGradient.toColor} stopOpacity="1" />
                                        </LinearGradient>
                                    </Defs>
                                    <Circle
                                        r={SIZE_ITEM/2}
                                        cx={SIZE_ITEM/2}
                                        cy={SIZE_ITEM/2}
                                        fill="url(#grad)" />
                                </Svg>
                            </View>
                            <Text style={styles.textSizePicked}>{item}</Text>
                        </View>
                    ) : (
                            <Text style={styles.textSizeNotPicked}>{item}</Text>
                        )}
                </View>
            </TouchableWithoutFeedback>
        )
    }


    render() {
        const { style, listSizes } = this.props
        return (
            <View style={style}>
                <FlatList
                    data={listSizes}
                    horizontal
                    renderItem={({ item, index }) => this._renderItem(item, index)}
                    keyExtractor={(item, key) => "size-" + key}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }
}

