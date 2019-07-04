import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import stateStorage from '../config/stateStorage';
import PropTypes from 'prop-types';

export default class BackXButton extends Component {
  render() {
    return (
      <View style={styles.backXButtonContainer}>
        <TouchableOpacity onPress={this.props.onBack}>
          <Ionicons name='ios-close' size={25} />
        </TouchableOpacity>
      </View>
    );
  }
}

BackXButton.propTypes = {
  onBack: PropTypes.func,
}

const styles = StyleSheet.create({
  backXButtonContainer: {
    height: stateStorage.SCREEN_HEIGHT * 0.08,
    paddingHorizontal: 18,
    paddingTop: 10,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 20,
    color: 'grey',
  },
})                                                        