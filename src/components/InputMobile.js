import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

// Import styles
import styles from '../theme/components/InputMobile';

// Import redux
import * as actions from '../redux/actions/index';
import { connect } from 'react-redux';

class InputMobile extends Component {
  render() {
    return (
      <View style={this.props.inputFocus.mobile == true
        ? styles.inputFormFocus
        : styles.inputForm}>
        <Text style={styles.text}>Mobile Number</Text>
        <TextInput
          onFocus={() => { this.props.focusMobile() }}
          onBlur={() => { this.props.notFocusMobile() }}
          onChangeText={() => { }}
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

export default connect(mapStateToProps, actions)(InputMobile);