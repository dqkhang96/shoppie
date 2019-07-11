import React, { Component } from 'react';
import {
  ActivityIndicator,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import ColoredButton from '../../components/ColoredButton';
import Color from '../../theme/colors';
import CustomI18n from '../../util/i18n';

// Import styles
import styles from '../../theme/screens/LoginScreen/LoginNormalButton';

// Import api
import { loginNormalAPI } from '../../config/apis';

// Import redux
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
    try {
      const token = await loginNormalAPI(this.props.username, this.props.password);

      // Save this for the next Login Normal
      await AsyncStorage.setItem('username', this.props.username);
      await AsyncStorage.setItem('password', this.props.password);
      await AsyncStorage.setItem('isLoginNormal', 'true');

      // Save to redux
      const userInfo = {
        name: this.props.username,
        username: this.props.username,
        email: this.props.username,
        accessToken: token,
      }
      this.props.logInNormal(userInfo);

      // Go back
      this.setState({ isLoginLoading: false })
      this.props.navigation.goBack();
    } catch (err) {
      this.setState({ isLoginLoading: false });

      alert(`Normal Login failed with: ${err}`);
    }
  }

  render() {
    return (
      this.state.isLoginLoading
        ? <ActivityIndicator size='large' color={Color.primary} style={styles.indicatorContainer} />
        : <ColoredButton title={CustomI18n.t("Login").loginButton} method={() => { this.onLoginNormal() }} />
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, actions)(withNavigation(LoginNormalButton));