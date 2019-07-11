import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import ForgotIconsContainer from './ForgotIconsContainer';
import BackXButton from '../../components/BackXButton';
import ColoredButton from '../../components/ColoredButton';
import InputForm from '../../components/InputForm';

// Import styles
import styles from '../../theme/screens/ForgotPasswordScreen/ForgotPasswordScreen';

export default class ForgotPasswordScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      username: '',
    }
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
          <Text style={styles.title}>Forgot your password?</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Enter your email below to receive your password reset instructions.</Text>
            <InputForm setValue={(username) => this.setState({ username })} title='Email ID' keyboardType='email-address' isSecureTextEntry={false} />
          </View>

          <View style={styles.body}>
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