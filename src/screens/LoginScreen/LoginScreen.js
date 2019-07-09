import React, { Component } from 'react';
import {
  Keyboard,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

// Import components
import GoToForgotPasswordButton from './GoToForgotPasswordButton';
import GoToRegisterButton from './GoToRegisterButton';
import LoginIconsContainer from './LoginIconsContainer';
import InputEmail from '../../components/InputEmail';
import InputPassword from '../../components/InputPassword';
import BackXButton from '../../components/BackXButton';
import LoginNormalButton from './LoginNormalButton';

// Import styles
import styles from '../../theme/screens/LoginScreen/LoginScreen';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  onBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <BackXButton onBack={this.onBack} />
              <LoginIconsContainer />

              <View style={styles.inputFormContainer} >
                <InputEmail setUsername={(username) => this.setState({ username })} />
                <InputPassword setPassword={(password) => this.setState({ password: password })} />
              </View>

              <LoginNormalButton username={this.state.username} password={this.state.password} />
              <GoToForgotPasswordButton />
              <GoToRegisterButton />
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    );
  }
}

