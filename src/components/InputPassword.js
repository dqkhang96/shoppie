import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableNativeFeedback
} from 'react-native';

// Import styles
import styles from '../theme/components/InputPassword';


class InputPassword extends Component {
  state={
    isFocus:false
  }


  render() {
    return (
      <TouchableNativeFeedback
        onPress={() => this.inputPassword.focus() }
      >
        <View style={this.state.isFocus
          ? styles.inputFormFocus
          : styles.inputForm}>
          <Text style={styles.text}>Password</Text>
          <TextInput
            ref={(input)=>this.inputPassword=input}
            onFocus={() => { this.setState({isFocus:true}) }}
            onBlur={() => { this.setState({isFocus:false})}}
            onChangeText={(text) => { this.props.setPassword(text) }}
            style={styles.inputText}
            secureTextEntry={true}
          />
        </View>
      </TouchableNativeFeedback>
    )
  }
}

export default InputPassword