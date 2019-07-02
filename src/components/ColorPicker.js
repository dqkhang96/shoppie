import React from 'react'
import { View , TouchableNativeFeedback,StyleSheet} from 'react-native'
import {sp} from '../untils'
export default class ColorPicker extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            indexColorPicked: -1
        }
    }

    render() {
        return (
            <View style={styles.listColors}>
                {["red", "blue", "green"].map((color, index) => (
                    <TouchableNativeFeedback key={index}
                        onPress={() => this.setState({ indexColorPicked: index })}
                    >
                        <View style={[styles.pickColor,{borderColor:this.state.indexColorPicked==index?"#00BBE1":"#eeeeee"}]}>
                            <View style={[styles.color, { backgroundColor: color }]} />
                        </View>
                    </TouchableNativeFeedback>
                ))}
            </View>
        )
    }
}

const styles= StyleSheet.create({
    listColors: {
        flexDirection: 'row',
    },
    pickColor: {
        padding: sp(1.2),
        borderWidth: 1.5,
        height: sp(20),
        width: sp(18),
        marginRight: sp(4),
        borderRadius: sp(1.2)
    },
    color: {
        height: "100%",
        width: "100%",
        borderRadius: sp(1)
    },
})