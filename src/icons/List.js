import React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'

const List = props => (
  <Svg viewBox="0 0 60.123 60.123" {...props}>
    <Path d="M57.124 51.893H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6zM57.124 33.062H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6zM57.124 14.231H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6z" />
    <Circle cx={4.029} cy={11.463} r={4.029} />
    <Circle cx={4.029} cy={30.062} r={4.029} />
    <Circle cx={4.029} cy={48.661} r={4.029} />
  </Svg>
)

export default List
