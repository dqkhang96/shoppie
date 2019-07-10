import {
  StyleSheet,
} from 'react-native';
import Color from '../../colors';
import Size, { SCREEN_HEIGHT } from '../../sizes';

const styles = StyleSheet.create({
  text: {
    fontSize: Size.Text.link,
    color: Color.Text.default,
  },
  goToRegister: {
    height: SCREEN_HEIGHT * 0.1,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default styles;