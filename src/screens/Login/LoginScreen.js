import React, { Component } from 'react';
import {
  StyleSheet,
  Keyboard,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import stateStorage from '../../config/stateStorage';
import GoToForgotPasswordButton from './GoToForgotPasswordButton';
import GoToRegisterButton from './GoToRegisterButton';
import LoginIconsContainer from './LoginIconsContainer';
import LoginInputFormsContainer from './LoginInputFormsContainer';
import ColoredButton from '../../components/ColoredButton';
import BackXButton from '../../components/BackXButton';
import { ScrollView } from 'react-native-gesture-handler';
import oauthSignature from 'oauth-signature';
import axios from 'axios';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
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

      // consumerSecret = Config.CONSUMER_SECRET,
      // tokenSecret = Config.TOKEN_SECRET;

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
      alert(token);
    } catch(err) {
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

  onBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <BackXButton onBack={this.onBack} />
              <LoginIconsContainer />

              <LoginInputFormsContainer />

              <View style={styles.buttonContainer} >
                <ColoredButton title='Login' method={() => { this.doLogin('test@test.com', '123456') }} />
              </View>
              <GoToForgotPasswordButton />
              <GoToRegisterButton />

            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stateStorage.backgroundColor,
  },
  buttonContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
})                                                                