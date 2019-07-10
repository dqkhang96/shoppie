import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import LoginFacebookButton from '../../components/LoginFacebookButton.js';
import LoginGoogleButton from '../../components/LoginGoogleButton.js';

// Import styles
import styles from '../../theme/screens/ForgotPasswordScreen/ForgotIconsContainer';

export default class ForgotIconsContainer extends Component {
  render() {
    return (
      <View style={styles.iconsContainer}>
        <View style={styles.orSignInWithContainer}>
          <View>
            <Text style={styles.text}>Or sign in with</Text>
          </View>
          <View style={styles.orSignInWith} />
        </View>
        <View style={styles.fbggContainer}>
          <LoginFacebookButton />
          <LoginGoogleButton />
        </View>

      </View>
    );
  }
}                                                