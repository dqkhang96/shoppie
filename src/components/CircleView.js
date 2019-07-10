import React from 'react'
import { sp } from '../theme/sizes'
import {View ,Text} from 'react-native'
import Color from '../theme/colors';

const SIZE_LARGE = sp(15)
const SIZE_SMAll = sp(12)

export default CircleView = ({ label, children ,style}) => (
    <View style={[{
        
    }
    ,style]}>
        <View style={{
            height:SIZE_LARGE,
            width:SIZE_LARGE,
            borderRadius:SIZE_LARGE/2,
            borderColor:Color.primary,
            borderWidth:1,
            justifyContent:'center',
            alignItems:'center'
        }}>
            <View style={{
                position:'absolute',
                height:sp(3),
                left:-sp(1),
                backgroundColor:'white',
                width:SIZE_LARGE+sp(1)
            }}/>
            <View style={{
                height:SIZE_SMAll,
                width:SIZE_SMAll,
                borderRadius:SIZE_SMAll/2,
                backgroundColor:'#EEEEEE',
                overflow:'hidden'
            }}>
                {children}
            </View>
        </View> 
        <Text style={{textAlign:'center',marginTop:sp(1)}}>{label}</Text>
    </View>

)