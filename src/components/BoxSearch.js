import React from 'react'
import { View, TextInput, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { sp, WIDTH_SCREEN } from '../untils'
import Icons from '../icons'

export default class BoxSearch extends React.Component {

    constructor(props){
        super(props)
        this.state={
            word:''
        }
    }

    render() {
        const { heightHeader } = this.props
        const sizeIcon = heightHeader * 0.4

        return (
            <View style={styles.container}>
                <TextInput value={this.state.word}
                    onChangeText={(text)=>this.setState({word:text})}
                    style={[styles.input, { fontSize: heightHeader * 0.35 }]} placeholder="Search for products" />
                <View style={{ marginRight: sp(5) }}>
                    <Icons.Search width={sizeIcon} height={sizeIcon} />
                </View>
                <TouchableNativeFeedback
                    onPress={()=>this.setState({word:''})}
                >
                    <Icons.Cancel width={heightHeader*0.3} height={heightHeader*0.3} />
                </TouchableNativeFeedback>
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