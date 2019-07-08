import React from 'react'
import Svg, { Path, G } from 'react-native-svg'

const TextColor = props => (
  <Svg viewBox="0 0 40 40" {...props}>
    <Path fill={props.color} d="M2.5 34.5h35v3h-35z" />
    <Path d="M37 35v2H3v-2h34m1-1H2v4h36v-4z" fill={props.color} />
    <G>
      <Path
        d="M27.537 31.5l-1.999-7H14.461l-1.998 7H7.059l9.726-29h6.66l9.502 29h-5.41zm-11.934-11h8.793L20.501 6.855h-1.004L15.603 20.5z"
        fill={props.fill}
      />
      <Path
        d="M23.082 3l9.174 28h-4.343l-1.791-6.274-.207-.726H14.084l-.207.726L12.086 31H7.754l9.39-28h5.938m-8.141 18H25.059l-.364-1.274-3.61-12.644-.207-.725H19.12l-.207.726-3.609 12.644L14.941 21m8.866-19h-7.382L6.364 32h6.477l1.998-7h10.322l1.998 7h6.477L23.807 2zm-7.541 18l3.609-12.644h.249L23.733 20h-7.467z"
        fill={props.fill}
      />
    </G>
  </Svg>
)

export default TextColor
