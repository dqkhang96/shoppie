import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import stateStorage from '../../config/stateStorage';
import InputEmail from '../../components/InputEmail';
import InputPassword from '../../components/InputPassword';

export default class LoginInputFormsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.inputFormContainer} >
        <InputEmail />
        <InputPassword />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputFormContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.28,
    paddingHorizontal: 18,
    justifyContent: 'center',
  },
})                                                        