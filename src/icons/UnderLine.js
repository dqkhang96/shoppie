import React from 'react'
import Svg, { Path } from 'react-native-svg'

const UnderLine = props => (
  <Svg viewBox="0 0 40 40" {...props}>
    <Path
      fill="none"
      stroke="#4788c7"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M3.5 37.5h33"
    />
    <Path
      d="M20 33.5c-6.893 0-12.5-5.607-12.5-12.5V5.109l-2-.5V2.5h10v2.109l-2 .5V21c0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5V5.109l-2-.5V2.5h10v2.109l-2 .5V21c0 6.893-5.607 12.5-12.5 12.5z"
      fill="#dff0fe"
    />
    <Path
      d="M34 3v1.219l-1.243.311-.757.189V21c0 6.617-5.383 12-12 12S8 27.617 8 21V4.719l-.757-.189L6 4.219V3h9v1.219l-1.243.311-.757.189V21c0 3.86 3.14 7 7 7s7-3.14 7-7V4.719l-.757-.189L25 4.219V3h9m1-1H24v3l2 .5V21a6 6 0 1 1-12 0V5.5l2-.5V2H5v3l2 .5V21c0 7.18 5.82 13 13 13s13-5.82 13-13V5.5l2-.5V2z"
      fill="#4788c7"
    />
  </Svg>
)

export default UnderLine
