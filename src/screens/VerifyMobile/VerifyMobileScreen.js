import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import stateStorage from '../../config/stateStorage';
import BackXButton from '../../components/BackXButton';
// import CodeInput from './CodeInput';
import CodeInput from 'react-native-confirmation-code-input';
import ColoredButton from '../../components/ColoredButton';

export default class VerifyMobileScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  onReset = async () => {

  }

  onConfirm = async () => {

  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <BackXButton />
          <View style={styles.textContainer}>
            <Text style={[styles.text, { fontSize: 25, color: 'black' }]}>Verify your Mobile</Text>
            <Text style={styles.text}>We send you a code to verify your phone number.</Text>
            <Text style={[styles.text, { marginTop: 15 }]}>Send to (+84) 989652445</Text>

            <CodeInput
              keyboardType='phone-pad'
              codeLength={4}
              activeColor='black'
              inactiveColor='white'
              inputPosition='center'
              size={50}
              space={20}
              codeInputStyle={styles.codeInputStyle}
              onFulfill={() => { }}
            />
          </View>

          <View style={styles.body}>
            <View style={styles.buttonContainer} >
              <ColoredButton title='Confirm' method={this.onConfirm}/>
            </View>

            <Text />
            <Text style={[styles.text, { alignSelf: 'center' }]}>I didn't receive a code!</Text>
            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={this.onReset} >
              <Text style={[styles.text, { color: stateStorage.appColor }]}>Resend</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stateStorage.backgroundColor,
  },
  textContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.5,
    justifyContent: 'flex-end',
    padding: 25,
    paddingBottom: 0,
  },
  text: {
    fontSize: stateStorage.fontsize,
    color: 'grey',
    marginVertical: 6,
  },
  buttonContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  body: {
    height: stateStorage.SCREEN_HEIGHT * 0.5,
    justifyContent: 'flex-start',
    padding: 10,
    paddingTop: 0,
  },
  codeInputStyle: {
    borderWidth: 0.5,
    borderColor: 'grey',
    color: 'black',
    fontSize: 25,
    backgroundColor: 'white',
  },
})                                                                