import React from 'react'
import {View,Text,TouchableWithoutFeedback,StyleSheet} from 'react-native'
import Icons from '../icons'
import { withNavigation ,Header} from 'react-navigation'
import { sp } from '../untils';

const BUTTON_SIZE= Header.HEIGHT*0.6
const BagAndWishListButtons=({navigation})=>(
    <View style={styles.container}>
        <TouchableWithoutFeedback
        >
            <View style={styles.viewButton}>
                <Icons.Heart width={BUTTON_SIZE} height={BUTTON_SIZE}/>
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
            onPress={()=>navigation.navigate("BagAndWishList")}
        >
            <View style={styles.viewButton}>
                <Icons.ShoppingBag width={BUTTON_SIZE} height={BUTTON_SIZE}/>
            </View>
        </TouchableWithoutFeedback>
    </View>
)

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center'
    },
    viewButton:{
        marginLeft:sp(3),
        flexDirection:'row',
        alignItems:'center',
    }
})

export default withNavigation(BagAndWishListButtons)