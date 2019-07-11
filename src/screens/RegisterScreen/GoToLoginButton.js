import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../../theme/screens/RegisterScreen/GoToLoginButton';

class GoToLoginButton extends Component {
  onGoToLogin = async () => {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.goToLogin}>
        <Text style={styles.text}> {CustomI18n.t('Register').goToLoginText} </Text>
        <TouchableOpacity
          onPress={this.onGoToLogin}
        >
          <Text style={styles.link}> {CustomI18n.t('Register').goToLoginLink} </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(GoToLoginButton);