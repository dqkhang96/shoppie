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
import BackXButton from '../../components/BackXButton';
import LoginNormalButton from './LoginNormalButton';
import CustomI18n from '../../util/i18n';

// Import styles
import styles from '../../theme/screens/LoginScreen/LoginScreen';
import InputForm from '../../components/InputForm';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      changeLanguage: true,
    }
  }

  onBack = () => {
    if (this.state.changeLanguage) {
      CustomI18n.locale = 'en-GB';
    }
    else {
      CustomI18n.locale = 'vi-VN';
    }
    this.setState({changeLanguage: !this.state.changeLanguage});
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
                <InputForm setValue={(username) => this.setState({ username })} title={CustomI18n.t("Login").emailInput} keyboardType='email-address' isSecureTextEntry={false} />
                <InputForm setValue={(password) => this.setState({ password })} title={CustomI18n.t("Login").passwordInput} keyboardType='default' isSecureTextEntry={true} />
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

