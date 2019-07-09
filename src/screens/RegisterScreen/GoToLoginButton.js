import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
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
        <Text style={styles.text}>Already have an account? </Text>
        <TouchableOpacity
          onPress={this.onGoToLogin}
        >
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(GoToLoginButton);