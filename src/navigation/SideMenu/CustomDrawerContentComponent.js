import React, { Component } from 'react'
import { Image, StyleSheet, ScrollView, TouchableOpacity, View, Text } from 'react-native'
import { DrawerItems, SafeAreaView, withNavigation, createStackNavigator } from 'react-navigation';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MenDrawerComponent from './MenDrawerComponent'
import WomenDrawerComponent from './WomenDrawerComponent.js'
import KidDrawerComponent from './KidDrawerComponent'
import AccessoriesDrawerComponent from './AccessoriesDrawerComponent.js'
import OderDrawerComponent from './OderDrawerComponent.js'
import WishlistDrawerComponent from './WishlistDrawerComponent.js'
import GiftDawerComponent from './GiftDawerComponent'
import ReferDrawerCoponent from './ReferDrawerCoponent.js'
import SettingDrawerComponent from './SettingDrawerComponent'
import LogoutDrawerComponent from './LogoutDrawerComponent'

import oauthSignature from 'oauth-signature';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import stateStorage from '../../config/stateStorage';

// Import Facebook Login
import { AccessToken, LoginManager, GraphRequest, GraphRequestManager, LoginButton } from 'react-native-fbsdk';
// Import GG Login
import { GoogleSignin, statusCodes } from 'react-native-google-signin';

// Import redux
import * as actions from '../../actions/index';
import { connect } from 'react-redux';

let isLoginGG;
let isLoginFB;
let isLoginNormal;

class CustomDrawerContentComponent extends Component {

  // First of all, check if user had already logged in on this app?
  async componentWillMount() {
    isLoginGG = await AsyncStorage.getItem('isLoginGG');
    isLoginFB = await AsyncStorage.getItem('isLoginFB');
    isLoginNormal = await AsyncStorage.getItem('isLoginNormal');
    stateStorage.username = await AsyncStorage.getItem('username');
    stateStorage.password = await AsyncStorage.getItem('password');

    if (isLoginGG == 'true') {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // Call the Login Google action of Redux
      await this.props.logInGG(userInfo.user);
      this.props.navigation.goBack();
    }
    else if (isLoginFB == 'true') {
      let resultLogin = await LoginManager.logInWithPermissions(['public_profile', 'email']);

      if (resultLogin.isCancelled) {
        alert(`Login was cancelled!`);
      } else {
        let resultToken = await AccessToken.getCurrentAccessToken();
        let res = await fetch(`https://graph.facebook.com/me?fields=id,name,email,picture.type(large)&access_token=${resultToken.accessToken}`)
        let resultUserInfoJSON = await res.json();
        // Call the Login Facebook action of Redux
        await this.props.logInFB(resultUserInfoJSON, resultToken.accessToken);
        this.props.navigation.goBack();
      }
    }
    else if (isLoginNormal == 'true') {
      this.doLogin(stateStorage.username, stateStorage.password);
      this.props.navigation.goBack();
    }
  }

  generateAuthorization = (url, httpMethod, params) => {
    var nonce = (Math.random() * 1e32).toString(32),
      // timeStamp = new Date().getTime(),
      // timeStamp = '1559616233',//Tạm thời fix cứng vì device và server đang lệch múi giờ
      timeStamp = '1559616233',
      accessToken = '275f3514fec865dc3186fedb678a9433',
      consumerKey = "f62b7aefaf38026da8cf0b664e7e254f",
      consumerSecret = "9f6ed4ca684a0c10bbf4678c30ed56a4",
      tokenSecret = "d71d43cd90317ecc81c57e74c72e846c",

      parameters = {
        oauth_consumer_key: consumerKey,
        oauth_nonce: nonce,
        oauth_signature_method: 'HMAC-SHA1',
        oauth_timestamp: timeStamp,
        oauth_token: accessToken,
        oauth_version: '1.0',
      },

      allParams = parameters;
    if (typeof (params) != 'undefined')
      allParams = { ...parameters, ...params }

    signature = oauthSignature.generate(httpMethod, url, allParams, consumerSecret, tokenSecret);

    return "OAuth oauth_consumer_key=\"" + consumerKey + "\",oauth_nonce=\"" + nonce + "\",oauth_signature=\"" + signature + "\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"" + timeStamp + "\",oauth_token=\"" + accessToken + "\",oauth_version=\"1.0\"";
  }

  doLogin = async (username, password) => {
    url = 'https://dev.goodiebox.dk/api/rest/integration/customer/token';
    method = 'POST';
    options = {
      url: url,
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.generateAuthorization(url, method),
      },
      data: JSON.stringify({
        username: username,
        password: password,
      })
    };

    try {
      const response = await axios(options);
      const token = await response.data.split(':\"')[1].split('\"}')[0]     // This is a string, not a JSON object so we have to split this string to get the token

      // Save to redux
      const userInfo = {
        name: username,
        username: username,
        email: username,
        accessToken: token,
      }
      this.props.logInNormal(userInfo);

      // Save this for the next Login Normal
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
      await AsyncStorage.setItem('isLoginNormal', 'true');
    } catch (err) {
      console.error(`ERR with: ${err}`);
    }

    // // You can use ".then" instead of "async await" if you want
    // axios(options)
    //   .then(response => response.data.split(':\"')[1].split('\"}')[0])
    //   .then(token => {
    //     alert(token);
    //   })
    //   .catch(err => {
    //     console.error(`ERR with: ${err}`);
    //   })
  }

  onLogOut = async () => {
    isLoginGG = await AsyncStorage.getItem('isLoginGG');
    isLoginFB = await AsyncStorage.getItem('isLoginFB');
    isLoginNormal = await AsyncStorage.getItem('isLoginNormal');
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
      stateStorage.username = '';
      stateStorage.password = '';

      this.props.logOut();
    }
  }

  renderInfo() {
    return (
      this.props.user.isLogin == false
        ? <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={styles.loginButton} >
          <Text style={{ fontSize: 25, color: 'black' }}>Login</Text>
        </TouchableOpacity>
        : <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')} >
          {this.props.user.avatar !== ''
            ? <Image style={{ height: 50, width: 50, borderRadius: 25, marginLeft: 15 }}
              source={{ uri: this.props.user.avatar }}
            />
            : <View style={{ height: 50, width: 50, borderRadius: 25, marginLeft: 15, backgroundColor: stateStorage.appColor }} />}
          <View
            style={styles.pencil}>
            <EvilIcons name='pencil'
              size={15}
            />
          </View>
          <View style={styles.name} >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>{this.props.user.name}</Text>
            <Text>{this.props.user.email}</Text>
          </View>
        </TouchableOpacity>
    )
  }

  renderLogOutButton() {
    return (
      this.props.user.isLogin == false
        ? <View style={{ paddingHorizontal: 10, marginBottom: 10 }} />
        : <View style={{ paddingHorizontal: 10, marginBottom: 10 }}>
          <TouchableOpacity onPress={this.onLogOut}>
            <LogoutDrawerComponent />
          </TouchableOpacity>
        </View>)
  }

  render() {
    return (
      <View style={{ justifyContent: 'space-between', flex: 1 }}>
        <ScrollView>
          <SafeAreaView style={styles.container} forceInset={{ top: '20', horizontal: 'never' }}>
            {this.renderInfo()}

            <View style={{ width: '100%', borderBottomWidth: 0.8, borderColor: 'gray', marginTop: 5 }}></View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'column' }}>
              <View>
                <View style={{ paddingHorizontal: 10 }}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Category')}  >
                    <MenDrawerComponent />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Category')} >
                    <WomenDrawerComponent></WomenDrawerComponent>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Category')}>
                    <KidDrawerComponent></KidDrawerComponent>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Category')}>
                    <AccessoriesDrawerComponent></AccessoriesDrawerComponent>
                  </TouchableOpacity>
                </View>
                <View style={{ width: '100%', borderBottomWidth: 0.8, borderColor: 'gray', marginTop: 5 }}></View>
                <View style={{ paddingHorizontal: 10 }}>
                  <TouchableOpacity><OderDrawerComponent></OderDrawerComponent></TouchableOpacity>
                  <TouchableOpacity><WishlistDrawerComponent></WishlistDrawerComponent></TouchableOpacity>
                  <TouchableOpacity><GiftDawerComponent></GiftDawerComponent></TouchableOpacity>
                  <TouchableOpacity><ReferDrawerCoponent></ReferDrawerCoponent></TouchableOpacity>
                  <TouchableOpacity><SettingDrawerComponent></SettingDrawerComponent></TouchableOpacity>
                </View>
                <View style={{ width: '100%', borderBottomWidth: 0.8, borderColor: 'gray', marginTop: 5 }}></View>
              </View>
            </View>

          </SafeAreaView>
        </ScrollView>

        {this.renderLogOutButton()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pencil: {
    position: 'absolute',
    top: -2,
    left: 55,
    width: 15,
    height: 15,
    backgroundColor: '#32D4D9',
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  name: {
    position: 'absolute',
    top: 2,
    left: 80,
    width: 350,
    height: 30,
    backgroundColor: '#FFFFFF'
  }
});

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, actions)(withNavigation(CustomDrawerContentComponent))
