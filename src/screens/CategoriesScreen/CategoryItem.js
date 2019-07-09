import React from 'react'
import { Text, View } from 'react-native'
import { Svg ,Defs, Stop, Rect  ,LinearGradient } from 'react-native-svg'
import {SCREEN_WIDTH,Size,SCREEN_HEIGHT} from '../../theme/sizes'
import Icons from '../../../res/icons'

export default class CategoryItem extends React.Component {
    
    render() {
        const {category,label,fromColor,toColor}= this.props
        const HEIGHT_CATEGORY=Math.min(SCREEN_HEIGHT,SCREEN_WIDTH)*0.35,
            WIDTH_CATEGORY=SCREEN_WIDTH
        return (
            <View
            >
                <View style={{
                    position: 'absolute',
                    top: 0,
                    right: 0
                }}>
                    <Svg
                        height={HEIGHT_CATEGORY}
                        width={ WIDTH_CATEGORY}
                    >
                        <Defs>
                            <LinearGradient id="grad" x1={0} y1={HEIGHT_CATEGORY} x2={ WIDTH_CATEGORY} y2="0">
                                <Stop offset="0" stopColor={fromColor} stopOpacity="1" />
                                <Stop offset="1" stopColor={toColor} stopOpacity="0.6" />
                            </LinearGradient>
                        </Defs>
                        <Rect
                            x={0}
                            y={0}
                            width={ WIDTH_CATEGORY}
                            height={HEIGHT_CATEGORY}
                            fill="url(#grad)"
                        />
                    </Svg>
                </View>
                <View
                    style={{
                        height:HEIGHT_CATEGORY,
                        alignItems:"flex-start",
                        justifyContent:'center',
                        padding: Size.Section.padding
                    }}
                >
                    <View
                        style={{
                            justifyContent:'center'
                        }}
                    >
                        <Text style={{fontSize:Size.Text.pageTitle,color:'black'}}>{category}</Text>
                        <View style={{
                            position:'absolute',
                            left: Size.Text.pageTitle*10
                        }}>
                            <Icons.Down width={Size.Icon.width} height={Size.Icon.height}/>
                        </View>
                    </View>
                    <View>
                        <Text style={{fontSize:Size.Text.normal}}>{label}</Text>
                    </View>
                </View>

            </View>
        )
    }
}