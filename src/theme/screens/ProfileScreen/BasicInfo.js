import {
  StyleSheet,
} from 'react-native';
import Color from '../../colors';
import Size, { SCREEN_HEIGHT } from '../../sizes';

const styles = StyleSheet.create({
  basicInfoContainer: {
    height: SCREEN_HEIGHT * 0.25,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  basicInfoContainerNotLogin: {
    height: SCREEN_HEIGHT * 0.25,
    paddingVertical: 8,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  avatar: {
    height: SCREEN_HEIGHT * 0.15,
    width: SCREEN_HEIGHT * 0.15,
    borderRadius: 80,
    borderWidth: 1,
    backgroundColor: Color.primary,
  },
  name: {
    fontSize: Size.Text.pageTitle,
  },
  email: {
    fontSize: Size.Text.normal,
  },
});

export default styles;