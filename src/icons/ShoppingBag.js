import React from 'react'
import Svg, { Path } from 'react-native-svg'

const  ShoppingBag = props => (
  <Svg viewBox="0 0 33 33" {...props}>
    <Path fill="blue" d="M28.313 33H4.688a.5.5 0 0 1-.5-.524L5.313 8.851a.5.5 0 0 1 .5-.476h21.375a.5.5 0 0 1 .5.476l1.125 23.625a.5.5 0 0 1-.5.524zM5.212 32h22.576L26.711 9.375H6.289L5.212 32z" />
    <Path fill="red" d="M21.905 11.375a.5.5 0 0 1-.5-.5v-4.97C21.405 3.201 19.205 1 16.5 1s-4.905 2.201-4.905 4.905v4.97a.5.5 0 0 1-1 0v-4.97C10.595 2.649 13.244 0 16.5 0s5.905 2.649 5.905 5.905v4.97a.5.5 0 0 1-.5.5z" />
  </Svg>
)
 
export default ShoppingBag