import {StyleSheet} from 'react-native'
import {Header} from 'react-navigation'

export default styles = StyleSheet.create({
    headBarContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: Header.HEIGHT,
      backgroundColor: 'white',
      alignItems: 'center',
      width: "100%",
      zIndex:5
    },
    headerLeft: {
  
    },
    headerTitle: {
    },
    headerTitleText: {
      textAlign: 'center',
      fontSize:Header.HEIGHT*0.45,
      fontWeight:'500'
    },
    headerRight: {
  
    }
  })