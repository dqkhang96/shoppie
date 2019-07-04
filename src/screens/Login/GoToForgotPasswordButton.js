import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import stateStorage from '../../config/stateStorage';
import {withNavigation} from 'react-navigation';

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

const styles = StyleSheet.create({
  text: {
    fontSize: stateStorage.fontsize,
    color: stateStorage.appColor,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  forgotPasswordButtonsContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.1,
    paddingTop: 7,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
})

export default withNavigation(GoToForgotPasswordButton);