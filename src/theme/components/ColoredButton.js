import {
  StyleSheet,
} from 'react-native';
import Color from '../colors';
import Size, { SCREEN_HEIGHT } from '../sizes';

const styles = StyleSheet.create({
  text: {
    fontSize: Size.Text.normal,
    color: Color.Text.button,
    textAlign: 'center'
  },
  coloredButtonsContainer: {
    height: SCREEN_HEIGHT * 0.07,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  coloredButton: {
    borderRadius: Size.Button.borderRadius,
    padding: 10,
    backgroundColor: Color.primary,
    shadowOffset: { width: 10, height: 10, },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 4,
  },
})

export default styles;