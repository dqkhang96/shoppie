import React from 'react'
import Svg, { Path } from 'react-native-svg'

const Circle = props => (
  <Svg viewBox="0 0 512 512" {...props}>
    <Path d="M256 0C114.837 0 0 114.837 0 256s114.837 256 256 256 256-114.837 256-256S397.163 0 256 0z" />
  </Svg>
)

export default Circle
