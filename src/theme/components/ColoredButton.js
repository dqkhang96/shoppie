import {
  StyleSheet,
} from 'react-native';

import Size, { SCREEN_HEIGHT, sp } from '../sizes';

const styles = StyleSheet.create({
  coloredButton: {
    borderRadius: Size.Button.borderRadius,
    height:Size.Button.height*0.8,
    width:sp(80),
    alignSelf:'center',
    padding: 10,
    fontSize:Size.Button.textSize,
    shadowOffset: { width: 10, height: 10, },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 4,
  },
})

export default styles;