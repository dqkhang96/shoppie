import React from 'react'
import { Text, View } from 'react-native'
import { Svg ,Defs, Stop, Rect  ,LinearGradient } from 'react-native-svg'
import { sp } from '../util'
import Icons from '../../res/icons'

export default class CategoryItem extends React.Component {
    
    render() {
        const {category,label,fromColor,toColor}= this.props
        return (
            <View
            >
                <View style={{
                    position: 'absolute',
                    top: 0,
                    right: 0
                }}>
                    <Svg
                        height={sp(35)}
                        width={sp(100)}
                    >
                        <Defs>
                            <LinearGradient id="grad" x1={0} y1={sp(35)} x2={sp(35)} y2="0">
                                <Stop offset="0" stopColor={fromColor} stopOpacity="1" />
                                <Stop offset="1" stopColor={toColor} stopOpacity="0.6" />
                            </LinearGradient>
                        </Defs>
                        <Rect
                            x={0}
                            y={0}
                            width={sp(100)}
                            height={sp(35)}
                            fill="url(#grad)"
                        />
                    </Svg>
                </View>
                <View
                    style={{
                        height:sp(35),
                        alignItems:"flex-start",
                        justifyContent:'center',
                        padding: sp(3.5)
                    }}
                >
                    <View
                        style={{
                            justifyContent:'center'
                        }}
                    >
                        <Text style={{fontSize:sp(5.5),color:'black'}}>{category}</Text>
                        <View style={{
                            position:'absolute',
                            left: sp(40)
                        }}>
                            <Icons.Down width={sp(4)} height={sp(4)}/>
                        </View>
                    </View>
                    <View>
                        <Text style={{fontSize:sp(4)}}>{label}</Text>
                    </View>
                </View>

            </View>
        )
    }
}