import {
  StyleSheet,
} from 'react-native';
import Color from '../../colors';
import Size, { SCREEN_HEIGHT } from '../../sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Screen.background,
  },
  textContainer: {
    height: SCREEN_HEIGHT * 0.5,
    justifyContent: 'flex-end',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: Size.Text.pageTitle,
    color: Color.Text.title,
    marginVertical: 6,
  },
  text: {
    fontSize: Size.Text.normal,
    color: Color.Text.default,
    marginVertical: 6,
  },
  link: {
    fontSize: Size.Text.normal,
    color: Color.Text.default,
    marginVertical: 6,
    color: Color.primary,
  },
  buttonContainer: {
    height: SCREEN_HEIGHT * 0.1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  body: {
    height: SCREEN_HEIGHT * 0.5,
    justifyContent: 'flex-start',
    padding: 10,
    paddingTop: 0,
  },
  codeInputStyle: {
    borderWidth: 0.5,
    borderColor: Color.CodeInput.borderColor,
    color: Color.CodeInput.textColor,
    backgroundColor: Color.CodeInput.background,
    fontSize: Size.Text.pageTitle,
  },
})

export default styles;