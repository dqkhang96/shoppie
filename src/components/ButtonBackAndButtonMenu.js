import React from 'react'
import { withNavigation, Header } from 'react-navigation'
import { View, TouchableOpacity } from 'react-native'
import Icons from '../../res/icons'
const ButtonBackAndButtonMenu = ({ navigation }) => (
    <View style={{ flexDirection: 'row', marginLeft: Header.HEIGHT * 0.3 ,justifyContent:'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <Icons.LeftArrow width={Header.HEIGHT * 0.35} height={Header.HEIGHT * 0.35} />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.openDrawer()}
        >
            <View style={{ marginLeft: Header.HEIGHT * 0.2 }}>
                <Icons.Menu height={Header.HEIGHT * 0.4} width={Header.HEIGHT * 0.4} />
            </View>
        </TouchableOpacity>
    </View>
)

export default withNavigation(ButtonBackAndButtonMenu)