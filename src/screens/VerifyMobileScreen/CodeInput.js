import React, { Component } from 'react';
import {
  View,
  TextInput,
} from 'react-native';

// Import styles
import styles from '../../theme/screens/VerifyMobileScreen/CodeInput';

export default class CodeInput extends Component {
  render() {
    return (
      <View style={styles.codeInputContainer}>
        <TextInput
          maxLength={1}
          style={styles.cell}
        />
        <TextInput
          maxLength={1}
          style={styles.cell}
        />
        <TextInput
          maxLength={1}
          style={styles.cell}
        />
        <TextInput
          maxLength={1}
          style={styles.cell}
        />
      </View>
    )
  }
}