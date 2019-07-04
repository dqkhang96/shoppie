import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import stateStorage from '../../config/stateStorage';

export default class ContinueButton extends Component {
  onContinue = async () => {

  }

  render() {
    return (
      <View style={styles.continueButtonsContainer}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={this.onContinue}
        >
          <Text style={styles.text}>Continue</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: stateStorage.fontsize,
    color: 'white',
    textAlign: 'center'
  },
  continueButtonsContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.07,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  continueButton: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: stateStorage.appColor,
    shadowOffset: { width: 10, height: 10, },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 4,
  },
})