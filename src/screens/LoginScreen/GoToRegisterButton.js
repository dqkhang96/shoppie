import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';

// Import styles
import styles from '../../theme/screens/LoginScreen/GoToRegisterButton';

class GoToRegisterButton extends Component {
  onRegister = () => {
    this.props.navigation.navigate('Register');
  }

  render() {
    return (
      <View style={styles.goToRegister}>
        <TouchableOpacity
          onPress={this.onRegister}
        >
          <Text style={styles.text}>Don't have an account?</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default withNavigation(GoToRegisterButton);