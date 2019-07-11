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
import CustomI18n from '../../util/i18n';

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
          <Text style={styles.title}>{CustomI18n.t('ForgotPassword').header}</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{CustomI18n.t('ForgotPassword').paragraph}</Text>
            <InputForm setValue={(username) => this.setState({ username })} title={CustomI18n.t('ForgotPassword').emailInput} keyboardType='email-address' isSecureTextEntry={false} />
          </View>

          <View style={styles.body}>
            <View style={styles.buttonContainer} >
              <ColoredButton title={CustomI18n.t('ForgotPassword').resetPassword} method={this.onReset} />
            </View>
            <ForgotIconsContainer />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}