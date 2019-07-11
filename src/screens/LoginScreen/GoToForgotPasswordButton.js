import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import CustomI18n from '../../util/i18n';

// Import styles
import styles from '../../theme/screens/LoginScreen/GoToForgotPasswordButton';

class GoToForgotPasswordButton extends Component {
  onForgotPassword = async () => {
    this.props.navigation.navigate('ForgotPassword');
  }

  render() {
    return (
      <View style={styles.forgotPasswordButtonsContainer} >
        <TouchableOpacity
          onPress={this.onForgotPassword}
        >
          <Text style={styles.text}> {CustomI18n.t("Login").forgotPassword} </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(GoToForgotPasswordButton);