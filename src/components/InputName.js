import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

// Import styles
import styles from '../theme/components/InputName';

// Import redux
import * as actions from '../redux/actions/index';
import { connect } from 'react-redux';

class InputName extends Component {
  render() {
    return (
      <View style={this.props.inputFocus.name == true
        ? styles.inputFormFocus
        : styles.inputForm}>
        <Text style={styles.text}>Name</Text>
        <TextInput
          onFocus={() => { this.props.focusName() }}
          onBlur={() => { this.props.notFocusName() }}
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

export default connect(mapStateToProps, actions)(InputName);