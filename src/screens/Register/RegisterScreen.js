import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Keyboard,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import stateStorage from '../../config/stateStorage';
import RegisterIconsContainer from './RegisterIconsContainer';
import RegisterInputFormsContainer from './RegisterInputFormsContainer';
import GoToLoginButton from './GoToLoginButton';
import BackXButton from '../../components/BackXButton';
import ColoredButton from '../../components/ColoredButton';

export default class RegisterScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  onSignup = async () => {

  }

  onBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
          <BackXButton onBack={this.onBack} />
          <RegisterIconsContainer />

          <RegisterInputFormsContainer />

          <View style={styles.buttonContainer} >
            <ColoredButton title='Sign Up' method={this.onSignup} />
          </View>
          <GoToLoginButton />
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
  buttonContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
})                                                                