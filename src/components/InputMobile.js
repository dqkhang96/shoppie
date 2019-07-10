import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableNativeFeedback
} from 'react-native';

// Import styles
import styles from '../theme/components/InputMobile';



class InputMobile extends Component {
  state={
    isFocus:false
  }
  render() {
    return (
      <TouchableNativeFeedback
        onPress={() => this.inputMobile.focus()}
      >
        <View style={this.state.isFocus == true
          ? styles.inputFormFocus
          : styles.inputForm}>
          <Text style={styles.text}>Mobile Number</Text>
          <TextInput
            ref={input=>this.inputMobile=input}
            onFocus={() => { this.setState({isFocus:true}) }}
            onBlur={() => { this.setState({isFocus:false}) }}
            onChangeText={() => { }}
            style={styles.inputText}
          />
        </View>
      </TouchableNativeFeedback>
    )
  }
}


export default (InputMobile);