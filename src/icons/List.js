import React from 'react'
import Svg, { Path, Circle, G } from 'react-native-svg'

const List = props => (
  <Svg viewBox="0 0 40 40" {...props}>
    <Path d="M38.5 9h-26a.5.5 0 0 1 0-1h26a.5.5 0 0 1 0 1z" fill={props.fill}/>
    <Circle cx={4.5} cy={8.5} r={3.6} fill={props.fill} />
    <Path
      d="M4.5 6C5.879 6 7 7.121 7 8.5S5.879 11 4.5 11 2 9.879 2 8.5 3.121 6 4.5 6m0-1a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM38.5 21h-26a.5.5 0 0 1 0-1h26a.5.5 0 0 1 0 1z"
      fill={props.fill}
    />
    <Circle cx={4.5} cy={20.5} r={3.6} fill={props.fill} />
    <Path
      d="M4.5 18C5.879 18 7 19.121 7 20.5S5.879 23 4.5 23 2 21.879 2 20.5 3.121 18 4.5 18m0-1a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM38.5 33h-26a.5.5 0 0 1 0-1h26a.5.5 0 0 1 0 1z"
      fill={props.fill}
    />
    <G>
      <Circle cx={4.5} cy={32.5} r={3.6} fill={props.fill} />
      <Path
        d="M4.5 30C5.879 30 7 31.121 7 32.5S5.879 35 4.5 35 2 33.879 2 32.5 3.121 30 4.5 30m0-1a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"
        fill={props.fill}
      />
    </G>
  </Svg>
)

export default List
