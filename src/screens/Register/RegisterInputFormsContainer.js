import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import stateStorage from '../../config/stateStorage';
import InputEmail from '../../components/InputEmail';
import InputPassword from '../../components/InputPassword';
import InputMobile from '../../components/InputMobile';
import InputName from '../../components/InputName';

export default class RegisterInputFormsContainer extends Component {
  render() {
    return (
      <View style={styles.inputFormContainer} >
        <InputName />
        <InputEmail />
        <InputPassword />
        <InputMobile />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputFormContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.56,
    paddingHorizontal: 18,
    justifyContent: 'center',
  },
})                                                        