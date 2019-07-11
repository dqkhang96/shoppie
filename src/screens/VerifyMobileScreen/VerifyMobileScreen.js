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
import CustomI18n from '../../util/i18n';

export default class VerifyMobileScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  onResend = async () => {

  }

  onConfirm = async () => {

  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <BackXButton />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{CustomI18n.t('Verify').header}</Text>
            <Text style={styles.text}>{CustomI18n.t('Verify').paragraph}</Text>
            <Text style={[styles.text, { marginTop: 15 }]}>{CustomI18n.t('Verify').codeInputText}</Text>

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
              <ColoredButton title={CustomI18n.t('Verify').confirmButton} method={this.onConfirm}/>
            </View>

            <Text />
            <Text style={[styles.text, { alignSelf: 'center' }]}>{CustomI18n.t('Verify').resendText}</Text>
            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={this.onResend} >
              <Text style={styles.link}>{CustomI18n.t('Verify').resendButton}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}                                                        