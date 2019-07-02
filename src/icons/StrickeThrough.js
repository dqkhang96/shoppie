import React from 'react'
import Svg, { Path } from 'react-native-svg'

const StrickeThrough = props => (
  <Svg viewBox="0 0 40 40" {...props}>
    <Path
      fill="#dff0fe"
      d="M11.5 37.5v-2.077l4-.666V5.5H4.973l-1.333 4H2.5v-7h33v7h-1.14l-1.333-4H22.5v29.257l4 .666V37.5z"
    />
    <Path
      d="M35 3v6h-.279l-1.105-3.316L33.387 5H22v30.18l.836.139 3.164.528V37H12v-1.153l3.164-.527.836-.14V5H4.613l-.228.684L3.279 9H3V3h32m1-1H2v8h2l1.333-4H15v28.333L11 35v3h16v-3l-4-.667V6h9.667L34 10h2V2z"
      fill="#4788c7"
    />
    <Path d="M31.5 22h-25a.5.5 0 0 1 0-1h25a.5.5 0 0 1 0 1z" fill="#4788c7" />
    <Path fill="#dff0fe" d="M15 18h8v3h-8z" />
    <Path
      d="M22.5 17c.275 0 .5.225.5.5v1c0 .275-.225.5-.5.5a.501.501 0 0 1-.5-.5v-1c0-.275.225-.5.5-.5zM15.5 17c.275 0 .5.225.5.5v1c0 .275-.225.5-.5.5a.501.501 0 0 1-.5-.5v-1c0-.275.225-.5.5-.5z"
      fill="#4788c7"
    />
  </Svg>
)

export default StrickeThrough
