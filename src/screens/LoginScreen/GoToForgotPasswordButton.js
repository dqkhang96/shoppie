import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {withNavigation} from 'react-navigation';

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
          <Text style={styles.text}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(GoToForgotPasswordButton);