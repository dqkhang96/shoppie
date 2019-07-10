import {
  StyleSheet,
} from 'react-native';
import Color from '../../colors';
import Size, { SCREEN_HEIGHT } from '../../sizes';

const styles = StyleSheet.create({
  footer: {
    height: SCREEN_HEIGHT * 0.1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  signOutButton: {
    borderWidth: 1,
    borderRadius: Size.Button.borderRadius,
    paddingVertical: 10,
    alignItems: 'center',
  },
})

export default styles;