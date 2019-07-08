import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import stateStorage from '../config/stateStorage';

//import Facebook Login
import { AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

//import redux
import * as actions from '../actions/index';
import { connect } from 'react-redux';


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
      } else {
        let resultToken = await AccessToken.getCurrentAccessToken();
        let res = await fetch(`https://graph.facebook.com/me?fields=id,name,email,picture.type(large)&access_token=${resultToken.accessToken}`)
        let resultUserInfoJSON = await res.json();

        // Call the Login Facebook action of Redux
        await this.props.logInFB(resultUserInfoJSON, resultToken.accessToken);
        await AsyncStorage.setItem('isLoginFB', 'true');

        this.setState({ isLoginLoading: false });
        this.props.navigation.goBack();
      }
    } catch (err) {
      this.setState({isLoginLoading: false})
      alert(`Login failed with error: ${err}`);
    }
  }

  render() {
    return (
      this.state.isLoginLoading
        ? <ActivityIndicator size='large' color={stateStorage.appColor} style={styles.fbggButton}/>
        : <TouchableOpacity
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
});

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, actions)(withNavigation(LoginFacebookButton));