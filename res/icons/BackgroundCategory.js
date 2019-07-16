import React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop, G } from 'react-native-svg'

const BackgroundCategory = props => (
  <Svg viewBox="0 0 1.7 0.5" {...props}>
    <Path fill="#7a7" d="M0 0h2v1H0z" />
    <Defs>
      <LinearGradient
        id="prefix__a"
        gradientUnits="userSpaceOnUse"
        x1={0}
        x2={0}
        y1={0}
        y2={1}
      >
        <Stop offset={0} stopColor="#7a7" />
        <Stop offset={1} stopColor="#4fd" />
      </LinearGradient>
      <LinearGradient
        id="prefix__b"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={0}
        x2={0}
        y2={1}
      >
        <Stop offset={0} stopColor="#cf8" stopOpacity={0} />
        <Stop offset={1} stopColor="#cf8" />
      </LinearGradient>
      <LinearGradient
        id="prefix__c"
        gradientUnits="userSpaceOnUse"
        x1={0}
        y1={0}
        x2={2}
        y2={2}
      >
        <Stop offset={0} stopColor="#cf8" stopOpacity={0} />
        <Stop offset={1} stopColor="#cf8" />
      </LinearGradient>
    </Defs>
    <Path fill="url(#prefix__a)" d="M0 0h2v1H0z" />
    <G fillOpacity={0.5}>
      <Path fill="url(#prefix__b)" d="M0 1V0h2z" />
      <Path fill="url(#prefix__c)" d="M2 1V0H0z" />
    </G>
  </Svg>
)

export default BackgroundCategory
