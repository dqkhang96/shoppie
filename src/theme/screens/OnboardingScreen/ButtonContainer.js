import {
  StyleSheet,
} from 'react-native';
import Color from '../../colors';
import Size, { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../sizes';

const styles = StyleSheet.create({
  buttonContainer: {
    height: SCREEN_HEIGHT * 0.2,
    paddingHorizontal: SCREEN_WIDTH * 0.2,
  },
  button1: {
    borderRadius: Size.Button.borderRadius,
    padding: 10,
    backgroundColor: Color.primary,
    shadowOffset: { width: 10, height: 10, },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 4,
  },
  text1: {
    fontSize: Size.Text.normal,
    color: Color.Text.button,
    textAlign: 'center'
  },
  button2: {
    marginTop: 20,
  },
  text2: {
    fontSize: Size.Text.normal,
    color: Color.Text.default,
    textAlign: 'center'
  },
  startExploringButton: {
    borderRadius: Size.Button.borderRadius,
    padding: 10,
    backgroundColor: Color.primary,
    shadowOffset: { width: 10, height: 10, },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 4,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})

export default styles;