import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

// Import styles
import styles from '../../theme/screens/ProfileScreen/SignoutButton';

// Import Facebook Login
import { AccessToken, LoginManager, GraphRequest, GraphRequestManager, LoginButton } from 'react-native-fbsdk';
// Import GG Login
import { GoogleSignin, statusCodes } from 'react-native-google-signin';

// Import redux
import * as actions from '../../redux/actions/index';
import { connect } from 'react-redux';

class SignoutButton extends Component {
  onSignOut = async () => {
    // const isGGSignedIn = await GoogleSignin.isSignedIn();
    // if (isGGSignedIn) {
    //   await GoogleSignin.revokeAccess();
    //   await GoogleSignin.signOut();

    //   await AsyncStorage.setItem('isLoginGG', 'false');
    //   this.props.logOut();
    // }
    // else {
    //   // Create a customized request
    //   let signOutRequest =
    //     new GraphRequest(
    //       "me/permissions/",
    //       {
    //         accessToken: this.props.user.accessToken,
    //         httpMethod: 'DELETE'
    //       },
    //       (error, result) => {
    //         if (error) {
    //           console.log('Error fetching data: ' + error.toString());
    //         } else {
    //           LoginManager.logOut();
    //         }
    //       });
    //   // Execute Log out Request
    //   await new GraphRequestManager().addRequest(signOutRequest).start();

    //   await AsyncStorage.setItem('isLoginFB', 'false');

    //   // Call logOut action of Redux
    //   this.props.logOut();
    // }

    const isLoginGG = await AsyncStorage.getItem('isLoginGG');
    const isLoginFB = await AsyncStorage.getItem('isLoginFB');
    const isLoginNormal = await AsyncStorage.getItem('isLoginNormal');
    if (isLoginGG == 'true') {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      await AsyncStorage.setItem('isLoginGG', 'false');
      this.props.logOut();
    }
    else if (isLoginFB == 'true') {
      let signOutRequest =
        new GraphRequest(
          "me/permissions/",
          {
            accessToken: this.props.user.accessToken,
            httpMethod: 'DELETE'
          },
          (error, result) => {
            if (error) {
              console.error('Error fetching data: ' + error.toString());
            } else {
              LoginManager.logOut();
            }
          });
      await new GraphRequestManager().addRequest(signOutRequest).start();
      await AsyncStorage.setItem('isLoginFB', 'false');
      this.props.logOut();
    }
    else if (isLoginNormal == 'true') {
      await AsyncStorage.setItem('isLoginNormal', 'false');
      await AsyncStorage.setItem('username', '');
      await AsyncStorage.setItem('password', '');
      this.props.logOut();
    }
  }

  render() {
    return (
      this.props.user.isLogin
        ? <View style={styles.footer}>
          <TouchableOpacity style={styles.signOutButton} onPress={this.onSignOut}>
            <Text>Sign Out</Text>
          </TouchableOpacity>
        </View>
        : <View />
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, actions)(withNavigation(SignoutButton));