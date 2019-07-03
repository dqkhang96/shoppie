import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import stateStorage from '../../config/stateStorage';
import { withNavigation } from 'react-navigation';

class GoToRegisterButton extends Component {
  onRegister = () => {
    this.props.navigation.navigate('RegisterScreen');
  }

  render() {
    return (
      <View style={styles.goToRegister}>
        <TouchableOpacity
          onPress={this.onRegister}
        >
          <Text style={styles.text}>Don't have an account?</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: stateStorage.fontsize,
    color: 'grey',
  },
  goToRegister: {
    height: stateStorage.SCREEN_HEIGHT * 0.1,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default withNavigation(GoToRegisterButton);