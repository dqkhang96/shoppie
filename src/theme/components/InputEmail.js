import {
  StyleSheet,
} from 'react-native';
import Color from '../colors';
import Size, { SCREEN_HEIGHT } from '../sizes';

const styles = StyleSheet.create({
  text: {
    fontSize: Size.Text.normal,
    color: Color.Text.default,
  },
  inputForm: {
    backgroundColor: Color.InputForm.notfocus,
    borderRadius: Size.Button.borderRadiusSmall,
    padding: 10,
    paddingBottom: 3,
    marginBottom: 6,
  },
  inputFormFocus: {
    backgroundColor: Color.InputForm.focus,
    borderRadius: Size.Button.borderRadiusSmall,
    padding: 10,
    paddingBottom: 3,
    marginBottom: 6,
    shadowOffset: { width: 10, height: 10, },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 4,
  },
  inputText: {
    paddingVertical: 6,
    paddingLeft: 0,
    fontSize: Size.Text.normal,
  },
})

export default styles;