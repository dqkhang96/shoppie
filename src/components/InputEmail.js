import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

// Import styles
import styles from '../theme/components/InputEmail';

// Import redux
import * as actions from '../redux/actions/index';
import { connect } from 'react-redux';

class InputEmail extends Component {
  render() {
    return (
      <View style={this.props.inputFocus.email == true
        ? styles.inputFormFocus
        : styles.inputForm}>
        <Text style={styles.text}>Email Id</Text>
        <TextInput
          onFocus={() => { this.props.focusEmail() }}
          onBlur={() => { this.props.notFocusEmail() }}
          onChangeText={(text) => { this.props.setUsername(text) }}
          keyboardType="email-address"
          style={styles.inputText}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  inputFocus: state.inputFocus,
});

export default connect(mapStateToProps, actions)(InputEmail);