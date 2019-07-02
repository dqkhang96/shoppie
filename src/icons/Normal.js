import React from 'react'
import Svg, { Path } from 'react-native-svg'

const Normal = props => (
  <Svg viewBox="0 0 40 40" {...props}>
    <Path fill="#b0c1d4" d="M16.5 37.5v-31h-13v-4h33v4h-13v31z" />
    <Path
      d="M36 3v3H23v31h-6V6H4V3h32m1-1H3v5h13v31h8V7h13V2z"
      fill="#66798f"
    />
  </Svg>
)

export default Normal
