import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import stateStorage from '../../config/stateStorage';
import LoginFacebookButton from '../../components/LoginFacebookButton';
import LoginGoogleButton from '../../components/LoginGoogleButton';

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

const styles = StyleSheet.create({
  iconsContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.4,
    alignItems: 'center',
    justifyContent: 'flex-end',
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
  orSignInWith: {
    marginTop: 10,
    marginHorizontal: 12,
    width: '23%',
    borderBottomWidth: 1,
    height: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
})                                                        