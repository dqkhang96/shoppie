import {
  StyleSheet,
} from 'react-native';
import Color from '../../colors';
import Size, { SCREEN_HEIGHT } from '../../sizes';

const styles = StyleSheet.create({
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: SCREEN_HEIGHT * 0.1,
  },
  cell: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SCREEN_HEIGHT * 0.1 * 0.3,
  }
})           

export default styles;