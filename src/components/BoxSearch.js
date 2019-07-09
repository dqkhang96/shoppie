import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity ,TouchableWithoutFeedback} from 'react-native'
import { sp, wp } from '../theme/sizes'
import Icons from '../../res/icons'

export default class BoxSearch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            word: ''
        }
    }

    render() {
        const {heightHeader}=this.props
        const sizeIcon=heightHeader*0.35

        return (
            <View style={styles.container}>
                <TextInput style={[styles.input,{fontSize:heightHeader*0.35}]} placeholder="Search for products" />
                <View style={{marginRight:sp(5)}}>
                    <Icons.Search width={sizeIcon} height={sizeIcon} />
                </View>
                <TouchableOpacity><Icons.Close width={sizeIcon} height={sizeIcon} /></TouchableOpacity>

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
        width: wp(75)
    },
    input: {
        marginRight: sp(3.5),
        width: wp(60)
    }
})