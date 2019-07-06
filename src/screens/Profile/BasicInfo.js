import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';

//import redux
import * as actions from '../../actions/index';
import { connect } from 'react-redux';

import stateStorage from '../../config/stateStorage';
import ColoredButton from '../../components/ColoredButton';

class BasicInfo extends Component {
  onLogin = () => {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      this.props.user.isLogin == true
        ?
        <View style={[styles.basicInfoContainer, { alignItems: 'center', }]}>
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
        : <View style={[styles.basicInfoContainer, { paddingHorizontal: 20 }]}>
          <ColoredButton title='Login' method={this.onLogin} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  basicInfoContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.25,
    paddingVertical: 8,
    justifyContent: 'center',
    backgroundColor: stateStorage.backgroundColor,
  },
  avatar: {
    height: stateStorage.SCREEN_HEIGHT * 0.15,
    width: stateStorage.SCREEN_HEIGHT * 0.15,
    borderRadius: 80,
    borderWidth: 1,
    backgroundColor: stateStorage.appColor,
  },
  name: {
    fontSize: 25,
  },
  email: {
    fontSize: 15,
  },
});

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, actions)(withNavigation(BasicInfo));