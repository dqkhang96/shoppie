import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { withNavigation, Header } from 'react-navigation'
import Icons from '../icons'
import { sp } from '../untils';

const ButtonMenu = ({ navigation }) => (
    <TouchableOpacity
        onPress={() => navigation.openDrawer()}
    >
        <View style={{ marginLeft: sp(3.5) }}>
            <Icons.Menu height={Header.HEIGHT * 0.4} width={Header.HEIGHT * 0.4} />
        </View>
    </TouchableOpacity>
)
export default withNavigation(ButtonMenu)