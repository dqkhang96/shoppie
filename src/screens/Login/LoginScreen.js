import React, { Component } from 'react';
import {
  StyleSheet,
  Keyboard,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import stateStorage from '../../config/stateStorage';
import GoToForgotPasswordButton from './GoToForgotPasswordButton';
import GoToRegisterButton from './GoToRegisterButton';
import LoginIconsContainer from './LoginIconsContainer';
import InputEmail from '../../components/InputEmail';
import InputPassword from '../../components/InputPassword';
import BackXButton from '../../components/BackXButton';
import LoginNormalButton from './LoginNormalButton';

import AsyncStorage from '@react-native-community/async-storage';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  async componentWillMount() {
    stateStorage.username = await AsyncStorage.getItem('username');
    stateStorage.password = await AsyncStorage.getItem('password');
  }

  onBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <BackXButton onBack={this.onBack} />
              <LoginIconsContainer />

              <View style={styles.inputFormContainer} >
                <InputEmail />
                <InputPassword />
              </View>

              <LoginNormalButton />
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
  inputFormContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.28,
    paddingHorizontal: 18,
    justifyContent: 'center',
  },
})                                                                