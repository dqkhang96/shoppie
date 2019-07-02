import React from 'react'
import Svg, { Defs, LinearGradient, Stop, Circle, Path } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Temperature = props => (
  <Svg data-name="Layer 1" viewBox="0 0 64 64" {...props}>
    <Defs>
      <LinearGradient
        gradientTransform="rotate(90 16 35.07)"
        gradientUnits="userSpaceOnUse"
        id="prefix__a"
        x1={22.27}
        x2={33.6}
        y1={13.32}
        y2={27.31}
      >
        <Stop offset={0.02} stopColor="#f7563c" />
        <Stop offset={1} stopColor="#d43217" />
      </LinearGradient>
    </Defs>
    <Circle cx={32} cy={46} r={12} fill="#0baeff" />
    <Path
      stroke="#0baeff"
      strokeLinejoin="round"
      strokeWidth={12}
      fill="none"
      strokeLinecap="round"
      d="M32 13v33"
    />
    <Path
      strokeMiterlimit={10}
      strokeWidth={6}
      stroke="#1441af"
      fill="none"
      strokeLinecap="round"
      d="M32 13v24"
    />
    <Path
      stroke="#f7563c"
      strokeMiterlimit={10}
      strokeWidth={6}
      fill="none"
      strokeLinecap="round"
      d="M32 19v27"
    />
    <Circle
      cx={32}
      cy={46}
      r={9}
      transform="rotate(-68.66 31.996 45.996)"
      fill="url(#prefix__a)"
    />
  </Svg>
)

export default Temperature
