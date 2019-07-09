import React from 'react'
import {View,TouchableOpacity} from 'react-native'
import Icons from '../../res/icons'
import { withNavigation ,Header} from 'react-navigation'
import styles from '../theme/components/BagAndWishListButtons';

const BUTTON_SIZE= Header.HEIGHT*0.5
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



export default withNavigation(BagAndWishListButtons)