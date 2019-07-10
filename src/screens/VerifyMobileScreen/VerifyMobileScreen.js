import React, { Component } from 'react';
import {
  View,
  Text,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import BackXButton from '../../components/BackXButton';
import CodeInput from 'react-native-confirmation-code-input';
import ColoredButton from '../../components/ColoredButton';

// Import styles
import styles from '../../theme/screens/VerifyMobileScreen/VerifyMobileScreen';

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
            <Text style={styles.title}>Verify your Mobile</Text>
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
              <Text style={styles.link}>Resend</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}                                                        