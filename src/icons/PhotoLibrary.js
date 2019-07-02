import React from 'react'
import Svg, { Path } from 'react-native-svg'

const PhotoLibrary = props => (
  <Svg viewBox="0 0 560 560" {...props}>
    <Path d="M561 408V51c0-28.05-22.95-51-51-51H153c-28.05 0-51 22.95-51 51v357c0 28.05 22.95 51 51 51h357c28.05 0 51-22.95 51-51zM242.25 267.75l63.75 76.5 89.25-114.75L510 382.5H153l89.25-114.75zM0 102v408c0 28.05 22.95 51 51 51h408v-51H51V102H0z" />
  </Svg>
)

export default PhotoLibrary
