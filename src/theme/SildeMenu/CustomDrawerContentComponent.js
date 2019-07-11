import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    loginButton: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    pencil: {
      position: 'absolute',
      top: -2,
      left: 55,
      width: 15,
      height: 15,
      backgroundColor: '#32D4D9',
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center"
    },
    name: {
      position: 'absolute',
      top: 2,
      left: 80,
      width: 350,
      height: 30,
      backgroundColor: '#FFFFFF'
    }
  });