import React, { Component } from 'react';
import {
  ScrollView,
  Keyboard,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import RegisterIconsContainer from './RegisterIconsContainer';
import GoToLoginButton from './GoToLoginButton';
import BackXButton from '../../components/BackXButton';
import ColoredButton from '../../components/ColoredButton';
import InputForm from '../../components/InputForm';
import CustomI18n from '../../util/i18n';

// Import styles
import styles from '../../theme/screens/RegisterScreen/RegisterScreen';

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      name: '',
      mobile: '',
    }
  }

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

          <View style={styles.inputFormContainer} >
            <InputForm
              setValue={(name) => this.setState({ name })}
              title={CustomI18n.t('Register').nameInput}
              keyboardType='default'
              isSecureTextEntry={false} />
            <InputForm
              setValue={(username) => this.setState({ username })}
              title={CustomI18n.t('Register').emailInput}
              keyboardType='email-address'
              isSecureTextEntry={false} />
            <InputForm
              setValue={(password) => this.setState({ password })}
              title={CustomI18n.t('Register').passwordInput}
              keyboardType='default'
              isSecureTextEntry={true} />
            <InputForm
              setValue={(mobile) => this.setState({ mobile })}
              title={CustomI18n.t('Register').mobileInput}
              keyboardType='phone-pad'
              isSecureTextEntry={false} />
          </View>

          <View style={styles.buttonContainer} >
            <ColoredButton title={CustomI18n.t('Register').signupButton} method={this.onSignup} />
          </View>
          <GoToLoginButton />
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}