import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import { withNavigation, Header } from 'react-navigation'
import Icons from '../icons'
import { sp } from '../untils';

const ButtonMenu = ({ navigation }) => (
    <TouchableWithoutFeedback
        onPress={() => navigation.openDrawer()}
    >
        <View style={{ marginLeft: sp(3.5) }}>
            <Icons.Menu height={Header.HEIGHT * 0.45} width={Header.HEIGHT * 0.45} />
        </View>
    </TouchableWithoutFeedback>
)
export default withNavigation(ButtonMenu)