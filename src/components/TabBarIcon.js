import React from 'react';
import { View} from 'react-native'

import Colors from '../constants/Colors';
import { wp } from '../untils';

export default function TabBarIcon(props) {
  return (
    <View style={{
      height:wp(3),
      width:wp(3),
      backgroundColor:'blue'
    }}/>
  );
}
