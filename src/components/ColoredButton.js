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
import ButtonGradient from './ButtonGradient'
import Color from '../theme/colors';

export default class ColoredButton extends Component {
  render() {
    return (

      <View>
        <ButtonGradient title={this.props.title}
          onPress={this.props.method} style={styles.coloredButton}
          fromColor={Color.Button.PrimaryGradient.fromColor}
          toColor={Color.Button.PrimaryGradient.toColor}
        />
      </View>

    )
  }
}

ColoredButton.propTypes = {
  title: PropTypes.string,
  method: PropTypes.func,
}

