import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

// Import styles
import styles from '../theme/components/BackXButton';

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