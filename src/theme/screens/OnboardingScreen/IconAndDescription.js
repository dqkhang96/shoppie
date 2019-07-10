import {
  StyleSheet,
} from 'react-native';
import Color from '../../colors';
import Size, { SCREEN_HEIGHT } from '../../sizes';

const styles = StyleSheet.create({
  iconAndDesContainer: {
    height: SCREEN_HEIGHT * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appIconContainer: {
    height: 60,
    width: 60,
    borderRadius: 10,
    backgroundColor: Color.primary,
    margin: 10,
  },
  text: {
    textAlign: 'center',
  },
})

export default styles;