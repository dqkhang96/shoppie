import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { withNavigation, Header } from 'react-navigation'
import Icons from '../../res/icons'

const ButtonMenu = ({ navigation }) => (
    <TouchableOpacity
        onPress={() => navigation.openDrawer()}
    >
        <View style={{ marginLeft: Header.HEIGHT*0.2 }}>
            <Icons.Menu height={Header.HEIGHT * 0.4} width={Header.HEIGHT * 0.4} />
        </View>
    </TouchableOpacity>
)
export default withNavigation(ButtonMenu)