import { StyleSheet } from 'react-native'
import { Header } from 'react-navigation'
import Size from '../sizes';
import Color from '../colors';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: Size.Section.padding
  },
  viewButton: {
    marginHorizontal: Header.HEIGHT * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  notiBox: {
    height: 15,
    paddingHorizontal:3,
    backgroundColor: Color.primary,
    position: 'absolute',
    right: -Header.HEIGHT*0.1,
    top: -Header.HEIGHT*0.1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notiBoxText: {
    color: Color.Text.button,
    fontSize: Size.Text.link,
  }
})