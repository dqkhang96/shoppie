import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import stateStorage from '../../config/stateStorage';
import { withNavigation } from 'react-navigation';
import oauthSignature from 'oauth-signature';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import ColoredButton from '../../components/ColoredButton';

//import redux
import * as actions from '../../redux/actions/index';
import { connect } from 'react-redux';

class LoginNormalButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginLoading: false,
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

      // consumerSecret = Config.CONSUMER_SECRET,
      // tokenSecret = Config.TOKEN_SECRET;

      allParams = parameters;
    if (typeof (params) != 'undefined')
      allParams = { ...parameters, ...params }

    signature = oauthSignature.generate(httpMethod, url, allParams, consumerSecret, tokenSecret);

    return "OAuth oauth_consumer_key=\"" + consumerKey + "\",oauth_nonce=\"" + nonce + "\",oauth_signature=\"" + signature + "\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"" + timeStamp + "\",oauth_token=\"" + accessToken + "\",oauth_version=\"1.0\"";
  }

  onLoginNormal = async () => {
    this.setState({ isLoginLoading: true });
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
        username: this.props.username,
        password: this.props.password,
      })
    };

    try {
      const response = await axios(options);
      const token = await response.data.split(':\"')[1].split('\"}')[0]     // This is a string, not a JSON object so we have to split this string to get the token

      // Save this for the next Login Normal
      await AsyncStorage.setItem('username', this.props.username);
      await AsyncStorage.setItem('password', this.props.password);
      await AsyncStorage.setItem('isLoginNormal', 'true');

      // Save to redux
      const userInfo = {
        name: this.props.username,
        username: this.props.username,
        email: username,
        accessToken: token,
      }
      this.props.logInNormal(userInfo);
      this.setState({ isLoginLoading: false })

      this.props.navigation.goBack();
    } catch (err) {
      this.setState({ isLoginLoading: false })
      alert(`ERR with: ${err}`);
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

  render() {
    return (
      <View style={styles.buttonContainer} >
        {this.state.isLoginLoading
          ? <ActivityIndicator size='large' color={stateStorage.appColor} />
          : <ColoredButton title='Login' method={() => { this.onLoginNormal() }} />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
})

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, actions)(withNavigation(LoginNormalButton));