import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity ,TouchableWithoutFeedback} from 'react-native'
import { sp } from '../theme/sizes'
import Icons from '../../res/icons'
import styles from '../theme/components/BoxSearch'

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
                <View style={styles.searchIcon}>
                    <Icons.Search width={sizeIcon} height={sizeIcon} />
                </View>
                <TouchableOpacity
                    onPress={()=>this.setState({word:''})}
                >
                    <Icons.Close width={sizeIcon} height={sizeIcon} />
                </TouchableOpacity>

            </View>
        )
    }
}

