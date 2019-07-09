import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

// Import style
import styles from '../theme/components/ColoredButton';

export default class ColoredButton extends Component {
  render() {
    return (
      <View style={styles.coloredButtonsContainer}>
        <TouchableOpacity
          style={styles.coloredButton}
          onPress={this.props.method}
        >
          <Text style={styles.text}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

ColoredButton.propTypes = {
  title: PropTypes.string,
  method: PropTypes.func,
}

