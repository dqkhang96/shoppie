import React from 'react'
import Svg, { Path } from 'react-native-svg'

const Italic = props => (
  <Svg viewBox="0 0 40 40" {...props}>
    <Path
      fill="#dff0fe"
      d="M9.948 37.5l.666-3.154h2.779l6.061-28.692h-2.74L17.38 2.5h12.672l-.665 3.154h-2.771l-6.061 28.692h2.731l-.665 3.154z"
    />
    <Path
      d="M29.435 3l-.454 2.154h-2.77l-.168.793-5.851 27.692-.255 1.207h2.732L22.216 37h-11.65l.455-2.154h2.778l.168-.793 5.851-27.692.255-1.207H17.33L17.785 3h11.65m1.233-1H16.974l-.877 4.154h2.741l-5.851 27.692h-2.778L9.332 38h13.695l.876-4.154h-2.732l5.851-27.692h2.77L30.668 2z"
      fill="#4788c7"
    />
  </Svg>
)

export default Italic
