import React from 'react'
import Svg, { Path } from 'react-native-svg'

const TextStyle = props => (
  <Svg viewBox="0 0 40 40" {...props}>
    <Path
      d="M28.249 35.5l-2.061-7H13.812l-2.061 7H5.702l10.721-31h7.405l10.475 31h-6.054zm-12.966-12h9.434L20.51 9.213h-1.022L15.283 23.5z"
      fill={props.fill}
    />
    <Path
      d="M23.47 5l10.137 30h-4.984l-1.849-6.282-.212-.718H13.437l-.211.718L11.377 35H6.404L16.779 5h6.691m-8.855 19H25.386l-.378-1.282L21.096 9.43l-.211-.718h-1.77l-.212.718-3.911 13.287L14.615 24m9.572-20h-8.12L5 36h7.125l2.06-7h11.629l2.061 7H35L24.187 4zm-8.236 19l3.911-13.287h.274L24.048 23h-8.097z"
      fill={props.fill}
    />
  </Svg>
)

export default TextStyle
