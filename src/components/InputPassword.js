import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import stateStorage from '../config/stateStorage';

//import redux
import * as actions from '../redux/actions/index';
import { connect } from 'react-redux';

class InputPassword extends Component {
  render() {
    return (
      <View style={this.props.inputFocus.password == true
        ? [styles.inputForm, {
          backgroundColor: '#ffffff',
          shadowOffset: { width: 10, height: 10, },
          shadowColor: 'black',
          shadowOpacity: 0.2,
          elevation: 4,
        }]
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

const styles = StyleSheet.create({
  text: {
    fontSize: stateStorage.fontsize,
    color: 'grey',
  },
  inputForm: {
    backgroundColor: stateStorage.backgroundColor,
    borderRadius: 6,
    padding: 10,
    paddingBottom: 3,
    marginBottom: 6,
  },
  inputText: {
    paddingVertical: 6,
    paddingLeft: 0,
    fontSize: stateStorage.fontsize,
  },
})

const mapStateToProps = state => ({
  inputFocus: state.inputFocus,
});

export default connect(mapStateToProps, actions)(InputPassword);