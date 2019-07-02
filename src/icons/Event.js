import React from 'react'
import Svg, { Path } from 'react-native-svg'

const Event = props => (
  <Svg width={48} height={48} {...props}>
    <Path
      d="M5 38V14h38v24c0 2.2-1.8 4-4 4H9c-2.2 0-4-1.8-4-4z"
      fill="#cfd8dc"
    />
    <Path
      d="M43 10v6H5v-6c0-2.2 1.8-4 4-4h30c2.2 0 4 1.8 4 4z"
      fill="#f44336"
    />
    <Path
      d="M36 10a3 3 0 1 1-6.002-.002A3 3 0 0 1 36 10zM18 10a3 3 0 1 1-6.002-.002A3 3 0 0 1 18 10z"
      fill="#b71c1c"
    />
    <Path
      d="M33 3c-1.102 0-2 .898-2 2v5c0 1.102.898 2 2 2 1.102 0 2-.898 2-2V5c0-1.102-.898-2-2-2zM15 3c-1.102 0-2 .898-2 2v5c0 1.102.898 2 2 2 1.102 0 2-.898 2-2V5c0-1.102-.898-2-2-2z"
      fill="#b0bec5"
    />
    <Path
      d="M13 20h4v4h-4zM19 20h4v4h-4zM25 20h4v4h-4zM31 20h4v4h-4zM13 26h4v4h-4zM19 26h4v4h-4zM25 26h4v4h-4zM31 26h4v4h-4zM13 32h4v4h-4zM19 32h4v4h-4zM25 32h4v4h-4zM31 32h4v4h-4z"
      fill="#90a4ae"
    />
  </Svg>
)

export default Event
