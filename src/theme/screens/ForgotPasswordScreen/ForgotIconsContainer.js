import {
  StyleSheet,
} from 'react-native';
import Color from '../../colors';
import Size, { SCREEN_HEIGHT } from '../../sizes';

const styles = StyleSheet.create({
  iconsContainer: {
    height: SCREEN_HEIGHT * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: Size.Text.normal,
    color: Color.Text.default,
  },
  fbggContainer: {
    flexDirection: 'row',
    height: SCREEN_HEIGHT * 0.07,
    width: '100%',
    justifyContent: 'space-between',
  },
  orSignInWithContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 15,
    justifyContent: 'center',
  },
})             

export default styles;