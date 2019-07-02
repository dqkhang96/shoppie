import React from 'react'
import Svg, { Path } from 'react-native-svg'

const AudioFile = props => (
  <Svg viewBox="0 0 16 16" {...props}>
    <Path
      fill={props.fill}
      d="M11.4 10.5c0 1.2-.4 2.2-1 3l.4.5c.7-.9 1.2-2.1 1.2-3.5s-.5-2.6-1.2-3.5l-.4.5c.6.8 1 1.9 1 3z"
    />
    <Path
      fill={props.fill}
      d="M9.9 8l-.4.5c.4.5.7 1.2.7 2s-.3 1.5-.7 2l.4.5c.5-.6.8-1.5.8-2.5s-.3-1.8-.8-2.5z"
    />
    <Path
      fill={props.fill}
      d="M9.1 9l-.4.5c.2.3.3.6.3 1s-.1.7-.3 1l.4.5c.3-.4.5-.9.5-1.5S9.4 9.4 9.1 9z"
    />
    <Path
      fill={props.fill}
      d="M10 0H2v16h12V4l-4-4zM9 5h4v10H3V1h6v4zm1-1V1l3 3h-3z"
    />
    <Path fill={props.fill} d="M6 9H4v3h2l2 2V7z" />
  </Svg>
)

export default AudioFile
