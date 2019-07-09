import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import LoginFacebookButton from '../../components/LoginFacebookButton';
import LoginGoogleButton from '../../components/LoginGoogleButton';

// Import styles
import styles from '../../theme/screens/RegisterScreen/RegisterIconsContainer';

export default class RegisterIconsContainer extends Component {
  render() {
    return (
      <View style={styles.iconsContainer}>
        <View style={styles.appIconContainer} />

        <Text style={styles.text}>SIGN UP WITH</Text>

        <View style={styles.fbggContainer}>
          <LoginFacebookButton />
          <LoginGoogleButton />
        </View>

        <View style={styles.orSignInWithContainer}>
          <View style={styles.orSignInWith} />
          <View>
            <Text style={styles.text}>Or sign up with</Text>
          </View>
          <View style={styles.orSignInWith} />
        </View>
      </View>
    );
  }
}