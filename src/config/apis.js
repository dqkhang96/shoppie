import axios from 'axios';
import Utils from '../util/utils';
import Config from './config';
import Constant, { Url } from '../util/constants';

import AsyncStorage from '@react-native-community/async-storage';
// Import Facebook Login
import { AccessToken, LoginManager, GraphRequest, GraphRequestManager, LoginButton } from 'react-native-fbsdk';
// Import GG Login
import { GoogleSignin, statusCodes } from 'react-native-google-signin';


export const loginNormalAPI = async (username, password) => {
  url = Url.LOGIN;
  method = 'POST';
  options = {
    url: url,
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': Utils.generateAuthorization(url, method),
    },
    data: JSON.stringify({
      username: username,
      password: password,
    })
  };
  const response = await axios(options);
  const token = await response.data.split(':\"')[1].split('\"}')[0]     // This is a string, not a JSON object so we have to split this string to get the token

  return token;
}

export const logoutAPI = async () => {
  const isLoginGG = await AsyncStorage.getItem('isLoginGG');
  const isLoginFB = await AsyncStorage.getItem('isLoginFB');
  const isLoginNormal = await AsyncStorage.getItem('isLoginNormal');
  if (isLoginGG == 'true') {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    await AsyncStorage.setItem('isLoginGG', 'false');
    return true;
  }
  else if (isLoginFB == 'true') {
    let signOutRequest = new GraphRequest(
      "me/permissions/", {
        accessToken: this.props.user.accessToken,
        httpMethod: 'DELETE'
      }, (error, result) => {
        if (error) {
          console.error('Error fetching data: ' + error.toString());
        } else {
          LoginManager.logOut();
        }
      });
    await new GraphRequestManager().addRequest(signOutRequest).start();
    await AsyncStorage.setItem('isLoginFB', 'false');
    return true;
  }
  else if (isLoginNormal == 'true') {
    await AsyncStorage.setItem('isLoginNormal', 'false');
    await AsyncStorage.setItem('username', '');
    await AsyncStorage.setItem('password', '');
    return true;
  }
  else {
    return false;
  }
}