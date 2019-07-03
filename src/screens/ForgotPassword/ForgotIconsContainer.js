import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import stateStorage from '../../config/stateStorage';
import LoginFacebookButton from '../../components/LoginFacebookButton.js';
import LoginGoogleButton from '../../components/LoginGoogleButton.js';

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

const styles = StyleSheet.create({
  iconsContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: stateStorage.fontsize,
    color: 'grey',
  },
  fbggContainer: {
    flexDirection: 'row',
    height: stateStorage.SCREEN_HEIGHT * 0.07,
    width: '100%',
    justifyContent: 'space-between',
  },
  orSignInWithContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 15,
    justifyContent: 'center',
  },
})                                                        