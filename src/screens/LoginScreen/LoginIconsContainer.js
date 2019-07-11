import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import LoginFacebookButton from '../../components/LoginFacebookButton.js';
import LoginGoogleButton from '../../components/LoginGoogleButton.js';
import CustomI18n from '../../util/i18n';

import styles from '../../theme/screens/LoginScreen/LoginIconsContainer';

export default class LoginIconsContainer extends Component {
  render() {
    return (
      <View style={styles.iconsContainer}>
        <View style={styles.appIconContainer} />
        <Text style={styles.text}> {CustomI18n.t('Login').textIcon1} </Text>
        <View style={styles.fbggContainer}>
          <LoginFacebookButton />
          <LoginGoogleButton />
        </View>
        <View style={styles.orSignInWithContainer}>
          <View>
            <Text style={styles.text}> {CustomI18n.t('Login').textIcon2} </Text>
          </View>
          <View style={styles.orSignInWith} />
        </View>
      </View>
    );
  }
}                                                    