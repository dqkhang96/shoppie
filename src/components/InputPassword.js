import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

// Import styles
import styles from '../theme/components/InputPassword';

// Import redux
import * as actions from '../redux/actions/index';
import { connect } from 'react-redux';

class InputPassword extends Component {
  render() {
    return (
      <View style={this.props.inputFocus.password == true
        ? styles.inputFormFocus
        : styles.inputForm}>
        <Text style={styles.text}>Password</Text>
        <TextInput
          onFocus={() => { this.props.focusPassword() }}
          onBlur={() => { this.props.notFocusPassword() }}
          onChangeText={(text) => { this.props.setPassword(text) }}
          style={styles.inputText}
          secureTextEntry={true}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  inputFocus: state.inputFocus,
});

export default connect(mapStateToProps, actions)(InputPassword);