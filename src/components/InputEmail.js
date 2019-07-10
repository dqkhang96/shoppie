import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableNativeFeedback
} from 'react-native';

// Import styles
import styles from '../theme/components/InputEmail';


class InputEmail extends Component {

  state={
    isFocus:false
  }

  render() {
    return (
      <TouchableNativeFeedback
        onPress={()=>this.inputEmail.focus()}
      >
        <View style={this.state.isFocus
          ? styles.inputFormFocus
          : styles.inputForm}>
          <Text style={styles.text}>Email Id</Text>
          <TextInput
            ref={(input)=>this.inputEmail=input}
            onFocus={() => { this.setState({isFocus:true}) }}
            onBlur={() => { this.setState({isFocus:false}) }}
            onChangeText={(text) => { this.props.setUsername(text) }}
            keyboardType="email-address"
            style={styles.inputText}
          />
        </View>
      </TouchableNativeFeedback>
    )
  }
}

export default InputEmail