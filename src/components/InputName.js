import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableNativeFeedback
} from 'react-native';

// Import styles
import styles from '../theme/components/InputName';


class InputName extends Component {
  state = {
    isFocus: false
  }
  render() {
    return (
      <TouchableNativeFeedback
        onPress={() => this.inputName.focus()}
      >
        <View style={this.state.isFocus == true
          ? styles.inputFormFocus
          : styles.inputForm}>
          <Text style={styles.text}>Name</Text>
          <TextInput
            ref={input=>this.inputName=input}
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

export default InputName;