import {
  StyleSheet,
} from 'react-native';
import Color from '../../colors';
import Size, { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../sizes';

const styles = StyleSheet.create({
  button: {
    height: SCREEN_HEIGHT * 0.08,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'flex-start'
  },
  leftButtonContent:{
    flexDirection:'row',
  },
  leftIcon: {
    width: SCREEN_WIDTH * 0.1,
    paddingTop: 5,
    paddingRight: 7,
    alignItems: 'flex-end',
  },
  textContainer: {
    width: SCREEN_WIDTH * 0.8,
  },
  rightIcon: {
    width: SCREEN_WIDTH * 0.1,
    justifyContent: 'center',
  },
  title: {
    fontSize: Size.Text.normal,
    color: Color.Text.title,
  },
  description: {
    fontSize: Size.Text.link,
  },
})

export default styles;