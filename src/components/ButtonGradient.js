import React from 'react'
import { View, Text } from 'react-native'
import { Svg ,Defs, Stop, Rect  ,LinearGradient } from 'react-native-svg'


export default ButtonGradient = ({fromColor, toColor ,title,style}) => (
    <View
        style={[{
            justifyContent:'center',
            alignItems:'center'
        },style]}
    >
        <View style={{
            position: 'absolute',
            top: 0,
            right: 0
        }}>
            <Svg
                height={style.height}
                width={style.width}
            >
                <Defs>
                    <LinearGradient id="grad" x1={0} y1={0} x2={style.width} y2={style.height}>
                        <Stop offset="0" stopColor={fromColor} stopOpacity="1" />
                        <Stop offset="1" stopColor={toColor} stopOpacity="1" />
                    </LinearGradient>
                </Defs>
                <Rect
                    x={0}
                    y={0}
                    width={style.width}
                    height={style.height}
                    fill="url(#grad)"
                />
            </Svg>
        </View>
        <Text
            style={{
                textAlign:'center',
                fontSize:style.fontSize,
                color:'white'
            }}
        >{title}</Text>
    </View>
)