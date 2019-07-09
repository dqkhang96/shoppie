import {
  StyleSheet,
} from 'react-native';
import Color from '../colors';
import Size, { SCREEN_HEIGHT } from '../sizes';

const styles = StyleSheet.create({
  backXButtonContainer: {
    height: SCREEN_HEIGHT * 0.08,
    paddingHorizontal: 18,
    paddingTop: 10,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: Size.Text.xIcon,
    color: Color.Text.default,
  },
})                                                        

export default styles;