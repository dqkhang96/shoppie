import React, { Component } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import stateStorage from '../../config/stateStorage';
import GoToForgotPasswordButton from './GoToForgotPasswordButton';
import GoToRegisterButton from './GoToRegisterButton';
import LoginIconsContainer from './LoginIconsContainer';
import LoginInputFormsContainer from './LoginInputFormsContainer';
import ColoredButton from '../../components/ColoredButton';
import { ScrollView } from 'react-native-gesture-handler';

export default class LoginScreen extends Component {
  onLogin = async () => {

  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <LoginIconsContainer />

              <LoginInputFormsContainer />

              <View style={styles.buttonContainer} >
                <ColoredButton title='Login' method={this.onLogin} />
              </View>
              <GoToForgotPasswordButton />
              <GoToRegisterButton />

              </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stateStorage.backgroundColor,
  },
  buttonContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
})                                                                