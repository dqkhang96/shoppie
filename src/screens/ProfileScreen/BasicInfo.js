import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ColoredButton from '../../components/ColoredButton';
import CustomI18n from '../../util/i18n';

// Import styles
import styles from '../../theme/screens/ProfileScreen/BasicInfo';

// Import redux
import * as actions from '../../redux/actions/index';
import { connect } from 'react-redux';

class BasicInfo extends Component {
  onLogin = () => {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      this.props.user.isLogin == true
        ?
        <View style={styles.basicInfoContainer}>
          {this.props.user.avatar == ''
            ? <View style={styles.avatar} />
            : <Image source={{ uri: this.props.user.avatar }} style={styles.avatar} />}

          <Text style={styles.name}>
            {this.props.user.name}
          </Text>
          <Text style={styles.email}>
            {this.props.user.email}
          </Text>
        </View>
        : <View style={styles.basicInfoContainerNotLogin} >
          <ColoredButton title={CustomI18n.t('Profile').signinButton} method={this.onLogin} />
        </ View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, actions)(withNavigation(BasicInfo));