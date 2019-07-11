import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import CustomI18n from '../../util/i18n';

// Import styles
import styles from '../../theme/screens/ProfileScreen/SignoutButton';

// Import Facebook Login
import { AccessToken, LoginManager, GraphRequest, GraphRequestManager, LoginButton } from 'react-native-fbsdk';
// Import GG Login
import { GoogleSignin, statusCodes } from 'react-native-google-signin';

// Import redux
import * as actions from '../../redux/actions/index';
import { connect } from 'react-redux';
import { logoutAPI } from '../../config/apis';

class SignoutButton extends Component {
  onSignOut = async () => {
    const isLogoutable = await logoutAPI();
    if (isLogoutable) {
      this.props.logOut();
    }
    else {
      // Do nothing
    }
  }

  render() {
    return (
      this.props.user.isLogin
        ? <View style={styles.footer}>
          <TouchableOpacity style={styles.signOutButton} onPress={this.onSignOut}>
            <Text> {CustomI18n.t('Profile').signoutButton} </Text>
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