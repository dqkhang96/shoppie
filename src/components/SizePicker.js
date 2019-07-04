import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { sp } from '../utils';
import { Svg, Defs, Circle, LinearGradient, Stop } from 'react-native-svg'

const SIZE_ITEM = sp(12)
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
                                            <Stop offset="0" stopColor="#00BBE1" stopOpacity="1" />
                                            <Stop offset="1" stopColor="#08D6CC" stopOpacity="1" />
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

const styles = StyleSheet.create({
    item: {
        height: SIZE_ITEM,
        width: SIZE_ITEM,
        borderRadius: SIZE_ITEM / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: sp(3.5)
    },
    itemNotPicked: {
        borderWidth: 1,
        borderColor: "gray"
    },
    sizeItemPicked: {
        height:SIZE_ITEM,
        width:SIZE_ITEM,
        justifyContent:'center',
        alignItems:'center'
    },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: SIZE_ITEM,
        width: SIZE_ITEM,
    },
    textSizePicked: {
        fontSize: sp(4),
        color: 'white',
    },
    textSizeNotPicked: {
        fontSize: sp(4)
    }
})