import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import stateStorage from '../../config/stateStorage';

//import Facebook Login
import { AccessToken, LoginManager, GraphRequest, GraphRequestManager, LoginButton } from 'react-native-fbsdk';
// import GG Login
import { GoogleSignin, statusCodes } from 'react-native-google-signin';

//import redux
import * as actions from '../../actions/index';
import { connect } from 'react-redux';

class SignoutButton extends Component {
  onSignOut = async () => {
    const isGGSignedIn = await GoogleSignin.isSignedIn();
    if (isGGSignedIn) {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.props.logOut();
    }
    else {
      // Create a customized request
      let signOutRequest =
        new GraphRequest(
          "me/permissions/",
          {
            accessToken: this.props.user.accessToken,
            httpMethod: 'DELETE'
          },
          (error, result) => {
            if (error) {
              console.log('Error fetching data: ' + error.toString());
            } else {
              LoginManager.logOut();
            }
          });
      // Execute Log out Request
      await new GraphRequestManager().addRequest(signOutRequest).start();

      // Call logOut action of Redux
      this.props.logOut();
    }
  }

  render() {
    return (
      <View style={styles.footer}>
        <TouchableOpacity style={styles.signOutButton} onPress={this.onSignOut}>
          <Text>Sign Out</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    height: stateStorage.SCREEN_HEIGHT * 0.1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  signOutButton: {
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
})

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, actions)(withNavigation(SignoutButton));