import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';


import ColoredButton from '../../components/ColoredButton';
import Utils from '../../util/utils';

import Color from '../../theme/colors';
import styles from '../../theme/screens/LoginScreen/LoginNormalButton';

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
        'Authorization': Utils.generateAuthorization(url, method),
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
  }

  render() {
    return (
      this.state.isLoginLoading
        ? <ActivityIndicator size='large' color={Color.primary} style={styles.indicatorContainer} />
        : <ColoredButton title='Login' method={() => { this.onLoginNormal() }} />
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, actions)(withNavigation(LoginNormalButton));