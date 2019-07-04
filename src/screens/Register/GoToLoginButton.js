import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import stateStorage from '../../config/stateStorage';
import { withNavigation } from 'react-navigation';

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
          <Text style={[styles.text, { textDecorationLine: 'underline', color: stateStorage.appColor }]}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: stateStorage.fontsize,
    color: 'grey',
  },
  goToLogin: {
    height: stateStorage.SCREEN_HEIGHT * 0.1,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default withNavigation(GoToLoginButton);