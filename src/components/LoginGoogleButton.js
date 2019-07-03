import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { withNavigation } from 'react-navigation';

// import GG Login
import { GoogleSignin, statusCodes } from 'react-native-google-signin';

//import redux
import * as actions from '../actions/index';
import { connect } from 'react-redux';

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/plus.me'],
  webClientId: '690731803269-gt8khpmlv90jkq8rdf8i8ds7744hf85s.apps.googleusercontent.com',
});

class LoginGoogleButton extends Component {
  onLoginGG = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      await this.props.logInGG(userInfo.user);

      this.props.navigation.goBack();
    } catch (err) {
      if (err.code === statusCodes.SIGN_IN_CANCELLED) {
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

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps,actions)(withNavigation(LoginGoogleButton));