import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import stateStorage from '../../config/stateStorage';

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

const styles = StyleSheet.create({
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: stateStorage.SCREEN_HEIGHT * 0.1,
  },
  cell: {
    width: '20%',
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    padding: stateStorage.SCREEN_HEIGHT * 0.1 * 0.3,
  }
})           