import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import stateStorage from '../../config/stateStorage';
import InputEmail from '../../components/InputEmail';
import ForgotIconsContainer from './ForgotIconsContainer';
import BackXButton from '../../components/BackXButton';
import ColoredButton from '../../components/ColoredButton';

export default class ForgotPasswordScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  onBack = () => {
    this.props.navigation.goBack();
  }

  onReset = async () => {

  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
          <BackXButton onBack={this.onBack} />
          <View style={styles.textContainer}>
            <Text style={[styles.text, { fontSize: 25, color: 'black' }]}>Forgot your password?</Text>
            <Text style={styles.text}>Enter your email below to receive your password reset instructions.</Text>
          </View>

          <View style={styles.body}>
            <InputEmail />

            <View style={styles.buttonContainer} >
              <ColoredButton title='Reset Password' method={this.onReset} />
            </View>

            <ForgotIconsContainer />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stateStorage.backgroundColor,
  },
  textContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.25,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  text: {
    fontSize: stateStorage.fontsize,
    marginVertical: 8,
    color: 'grey',
  },
  body: {
    height: stateStorage.SCREEN_HEIGHT * 0.55,
    justifyContent: 'center',
    paddingHorizontal: 10,
  }
})                                                                