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
    padding: 15,
    height: SCREEN_HEIGHT * 0.6,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: Size.Text.pageTitle,
    color: Color.Text.title,
  },
  buttonContainer: {
    padding: 10,
    height: SCREEN_HEIGHT * 0.3,
    justifyContent: 'center',
  },
})

export default styles;