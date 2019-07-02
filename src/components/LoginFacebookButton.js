import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { withNavigation } from 'react-navigation';

//import Facebook Login
import { AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import stateStorage from '../config/stateStorage';


class LoginFacebookButton extends Component {
  onLoginFB = async () => {
    try {
      let resultLogin = await LoginManager.logInWithPermissions(['public_profile']);
      alert('DONE')

      if (resultLogin.isCancelled) {
        alert(`Login was cancelled!`);
      } else {
        let resultToken = await AccessToken.getCurrentAccessToken();

        let res = await fetch(`https://graph.facebook.com/me?fields=id,name,email,picture.type(large)&access_token=${resultToken.accessToken}`)
        let resultUserInfoJSON = await res.json();

        stateStorage.user.id = resultUserInfoJSON.id;
        stateStorage.user.name = resultUserInfoJSON.name;
        stateStorage.user.email = resultUserInfoJSON.email;
        stateStorage.user.avatar = resultUserInfoJSON.picture.data.url;
        stateStorage.user.accessToken = resultToken.accessToken;

        this.props.navigation.navigate('ProfileScreen');
      }
    } catch (err) {
      alert(`Login failed with error: ${err}`);
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.fbggButton}
        onPress={this.onLoginFB}>
        <Image
          style={styles.fbIcon}
          source={require('../img/fb.png')} />
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
  fbIcon: {
    height: 43,
    width: 43,
  },
})

export default withNavigation(LoginFacebookButton);