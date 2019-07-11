import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';

// Import styles
import styles from '../theme/components/InputForm';


class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      isFocus:false
    }
  }
  
  render() {
    return (
      <TouchableNativeFeedback
        onPress={()=>this.inputForm.focus()}
      >
        <View style={this.state.isFocus
          ? styles.inputFormFocus
          : styles.inputForm}>
          <Text style={styles.text}>{this.props.title}</Text>
          <TextInput
            ref={(input)=>this.inputForm=input}
            onFocus={() => { this.setState({isFocus:true}) }}
            onBlur={() => { this.setState({isFocus:false}) }}
            onChangeText={(text) => { this.props.setValue(text) }}
            keyboardType={this.props.keyboardType}
            secureTextEntry={this.props.isSecureTextEntry}
            style={styles.inputText}
          />
        </View>
      </TouchableNativeFeedback>
    )
  }
}

export default InputForm;