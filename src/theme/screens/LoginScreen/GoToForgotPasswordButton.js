import {
  StyleSheet,
} from 'react-native';
import Color from '../../colors';
import Size, { SCREEN_HEIGHT } from '../../sizes';

const styles = StyleSheet.create({
  text: {
    fontSize: Size.Text.link,
    color: Color.Text.link,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  forgotPasswordButtonsContainer: {
    height: SCREEN_HEIGHT * 0.1,
    paddingTop: 7,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
})

export default styles;