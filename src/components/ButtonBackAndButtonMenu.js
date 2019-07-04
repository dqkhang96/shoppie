import React from 'react'
import { withNavigation, Header } from 'react-navigation'
import { View, TouchableWithoutFeedback } from 'react-native'
import Icons from '../icons'
const ButtonBackAndButtonMenu = ({ navigation }) => (
    <View style={{ flexDirection: 'row', marginLeft: Header.HEIGHT * 0.3 ,justifyContent:'center'}}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack(null)}>
            <Icons.LeftArrow width={Header.HEIGHT * 0.35} height={Header.HEIGHT * 0.35} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            onPress={() => navigation.openDrawer()}
        >
            <View style={{ marginLeft: Header.HEIGHT * 0.25 }}>
                <Icons.Menu height={Header.HEIGHT * 0.4} width={Header.HEIGHT * 0.4} />
            </View>
        </TouchableWithoutFeedback>
    </View>
)

export default withNavigation(ButtonBackAndButtonMenu)