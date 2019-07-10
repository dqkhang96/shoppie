import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

// Import styles
import styles from '../theme/components/LoginFacebookButton';

// Import Facebook Login
import { AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

// Import redux
import * as actions from '../redux/actions/index';
import { connect } from 'react-redux';
import Color from '../theme/colors';


class LoginFacebookButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginLoading: false,
    }
  }

  onLoginFB = async () => {
    this.setState({ isLoginLoading: true });
    try {
      let resultLogin = await LoginManager.logInWithPermissions(['public_profile', 'email']);

      if (resultLogin.isCancelled) {
        this.setState({isLoginLoading: false});
        await AsyncStorage.setItem('isLoginFB', 'false');
      } else {
        let resultToken = await AccessToken.getCurrentAccessToken();
        let res = await fetch(`https://graph.facebook.com/me?fields=id,name,email,picture.type(large)&access_token=${resultToken.accessToken}`)
        let resultUserInfoJSON = await res.json();

        // Call the Login Facebook action of Redux
        await this.props.logInFB(resultUserInfoJSON, resultToken.accessToken);
        await AsyncStorage.setItem('isLoginFB', 'true');

        // Go Back
        this.setState({ isLoginLoading: false });
        this.props.navigation.goBack();
      }
    } catch (err) {
      this.setState({isLoginLoading: false});
      await AsyncStorage.setItem('isLoginFB', 'false');
      
      alert(`FB Login failed with error: ${err}`);
    }
  }

  render() {
    return (
      this.state.isLoginLoading
        ? <ActivityIndicator size='large' color={Color.primary} style={styles.fbggButton}/>
        : <TouchableOpacity
          style={styles.fbggButton}
          onPress={this.onLoginFB}>
          <Image
            style={styles.fbIcon}
            source={require('../../res/img/fb.png')} />
        </TouchableOpacity>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, actions)(withNavigation(LoginFacebookButton));