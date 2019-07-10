import {
  StyleSheet,
} from 'react-native';
import Color from '../../colors';
import Size, { SCREEN_HEIGHT } from '../../sizes';

const styles = StyleSheet.create({
  iconsContainer: {
    height: SCREEN_HEIGHT * 0.3,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: Size.Text.normal,
    color: Color.Text.default,
  },
  appIconContainer: {
    height: 60,
    width: 60,
    borderRadius: 10,
    backgroundColor: Color.primary,
    margin: 10,
  },
  fbggContainer: {
    flexDirection: 'row',
    height: Size.Button.height,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  orSignInWithContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 15,
    justifyContent: 'center',
  },
})                                                        

export default styles;