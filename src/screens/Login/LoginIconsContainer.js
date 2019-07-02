import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import stateStorage from '../../config/stateStorage';
import LoginFacebookButton from '../../components/LoginFacebookButton.js';
import LoginGoogleButton from '../../components/LoginGoogleButton.js';
import BackXButton from '../../components/BackXButton';

export default class LoginIconsContainer extends Component {
  render() {
    return (
      <View style={styles.iconsContainer}>
        <BackXButton />
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

const styles = StyleSheet.create({
  iconsContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.4,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  backXButtonContainer: {
    paddingHorizontal: 10,
  },
  text: {
    fontSize: stateStorage.fontsize,
    color: 'grey',
  },
  appIconContainer: {
    height: 60,
    width: 60,
    borderRadius: 10,
    backgroundColor: stateStorage.appColor,
    margin: 10,
  },
  fbggContainer: {
    flexDirection: 'row',
    height: stateStorage.SCREEN_HEIGHT * 0.07,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  orSignInWithContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 15,
    justifyContent: 'center',
  },
})                                                        