import React from 'react'
import Svg, { Path } from 'react-native-svg'

const BackgroundColor = props => (
  <Svg viewBox="0 0 231 231" {...props} fill={props.color}>
    <Path d="M115.379 78l-17.125 59h35.039l-17.237-59z" />
    <Path d="M.5 0v231h230V0H.5zm150.71 199l-9.412-33h-52.05l-9.295 33H41.898L95.191 33h41.163l53.413 166H151.21z" />
  </Svg>
)

export default BackgroundColor 
