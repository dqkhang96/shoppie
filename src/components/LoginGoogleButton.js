import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import stateStorage from '../config/stateStorage';

// import GG Login
import { GoogleSignin, statusCodes } from 'react-native-google-signin';

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/plus.me'],
  webClientId: '690731803269-jc3c4e6q9kmn1n1bvdardvuqjv0f80g1.apps.googleusercontent.com',
});

class LoginGoogleButton extends Component {
  onLoginGG = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      stateStorage.user.id = userInfo.user.id;
      stateStorage.user.name = userInfo.user.name;
      stateStorage.user.email = userInfo.user.email;
      stateStorage.user.avatar = userInfo.user.photo;
      stateStorage.user.accessToken = userInfo.user.idToken;

      this.props.navigation.navigate('ProfileScreen');
    } catch (err) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      }
      else {
        alert(`Login failed with error: ${err}`);
      }
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.fbggButton}
        onPress={this.onLoginGG}>
        <Image
          style={styles.ggIcon}
          source={require('../img/gg.png')} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  fbggButton: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    width: '43%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  ggIcon: {
    height: 25,
    width: 25,
  },
})

export default withNavigation(LoginGoogleButton);