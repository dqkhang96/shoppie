import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import Icons from '../icons'
import { withNavigation ,Header} from 'react-navigation'
import { sp } from '../untils';

const BUTTON_SIZE= Header.HEIGHT*0.6
const BagAndWishListButtons=({navigation})=>(
    <View style={styles.container}>
        <TouchableOpacity
        >
            <View style={styles.viewButton}>
                <Icons.Heart width={BUTTON_SIZE} height={BUTTON_SIZE}/>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={()=>navigation.navigate("BagAndWishList")}
        >
            <View style={styles.viewButton}>
                <Icons.ShoppingBag width={BUTTON_SIZE} height={BUTTON_SIZE}/>
            </View>
        </TouchableOpacity>
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