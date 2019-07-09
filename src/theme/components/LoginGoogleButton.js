import {
  StyleSheet,
} from 'react-native';
import Color from '../colors';
import Size, { SCREEN_HEIGHT } from '../sizes';

const styles = StyleSheet.create({
  fbggButton: {
    padding: 10,
    backgroundColor: Color.Screen.background,
    borderRadius: Size.Button.borderRadiusSmall,
    borderWidth: 1,
    borderColor: Color.Text.default,
    width: '43%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  ggIcon: {
    height: 25,
    width: 25,
  },
})

export default styles;