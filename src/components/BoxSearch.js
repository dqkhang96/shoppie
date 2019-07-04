import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { sp, WIDTH_SCREEN } from '../utils'
import Icons from '../icons'

export default class BoxSearch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            word: ''
        }
    }

    render() {
        const { heightHeader } = this.props
        const sizeIcon = heightHeader * 0.4

        return (
            <View style={styles.container}>
                <TextInput
                    onChangeText={(text) => this.setState({ word: text })}
                    value={this.state.word}
                    style={[styles.input, { fontSize: heightHeader * 0.35 }]} placeholder="Search for products" />
                <View style={{ marginRight: sp(5) }}>
                    <Icons.Search width={sizeIcon} height={sizeIcon} />
                </View>
                <TouchableOpacity
                    onPress={() => this.setState({ word: '' })}
                >
                    <Icons.Cancel width={sizeIcon*0.6} height={sizeIcon*0.6} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: sp(3.5),
        width: WIDTH_SCREEN * 0.8
    },
    input: {
        marginRight: sp(3.5),
        width: WIDTH_SCREEN * 0.7
    }
})