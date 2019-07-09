import React from 'react'
import { View , TouchableNativeFeedback} from 'react-native'
import styles from '../../theme/screens/ProductScreen/ColorPicker'
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

