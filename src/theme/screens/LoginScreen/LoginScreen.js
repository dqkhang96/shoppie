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
  inputFormContainer: {
    height: SCREEN_HEIGHT * 0.28,
    paddingHorizontal: 18,
    justifyContent: 'center',
  },
})  

export default styles;