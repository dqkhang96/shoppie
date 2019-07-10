import {
  StyleSheet,
} from 'react-native';
import Color from '../../colors';
import Size, { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../sizes';

const styles = StyleSheet.create({
  carouselContainer: {
    height: SCREEN_HEIGHT * 0.5,
  },
  image: {
    width: SCREEN_WIDTH * 0.65,
    height: SCREEN_WIDTH * 0.65,
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: Size.Button.borderRadiusSmall,
    marginHorizontal: 5,
    backgroundColor: Color.Text.default,
  },
  inactiveDot: {
    width: 6,
    height: 6,
    borderRadius: Size.Button.borderRadiusSmall,
    marginHorizontal: 5,
    backgroundColor: Color.Text.default,
  },
})

export default styles;