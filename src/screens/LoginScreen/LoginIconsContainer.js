import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import LoginFacebookButton from '../../components/LoginFacebookButton.js';
import LoginGoogleButton from '../../components/LoginGoogleButton.js';

import styles from '../../theme/screens/LoginScreen/LoginIconsContainer';

export default class LoginIconsContainer extends Component {
  render() {
    return (
      <View style={styles.iconsContainer}>
        <View style={styles.appIconContainer} />
        <Text style={styles.text}>LOG IN WITH</Text>
        <View style={styles.fbggContainer}>
          <LoginFacebookButton />
          <LoginGoogleButton />
        </View>
        <View style={styles.orSignInWithContainer}>
          <View>
            <Text style={styles.text}>Or sign in with</Text>
          </View>
          <View style={styles.orSignInWith} />
        </View>
      </View>
    );
  }
}                                                    