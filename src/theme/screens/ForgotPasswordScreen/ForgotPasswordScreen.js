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
  title: {
    fontSize: Size.Text.pageTitle,
    marginVertical: 8,
    color: Color.Text.title,
    paddingHorizontal: 10,
  },
  textContainer: {
    height: SCREEN_HEIGHT * 0.3,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  body: {
    height: SCREEN_HEIGHT * 0.3,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    height: SCREEN_HEIGHT * 0.1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  text: {
    fontSize: Size.Text.normal,
    color: Color.Text.default,
    marginBottom: 15,
  },
})                    

export default styles;