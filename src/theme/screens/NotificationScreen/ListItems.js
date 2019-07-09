import {
  StyleSheet,
} from 'react-native';
import Color from '../../colors';
import Size, { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../sizes';

const styles = StyleSheet.create({
  item: {
    height: SCREEN_HEIGHT * 0.1,
    paddingVertical: 6,
    flexDirection: 'row',
    backgroundColor: Color.ItemMenu.background,
  },
  leftIcon: {
    width: SCREEN_WIDTH * 0.1,
    paddingRight: 7,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    width: SCREEN_WIDTH * 0.8,
  },
  description: {
    fontSize: Size.Text.normal,
  },
})

export default styles;